/**
 * Atribuição de campanha (UTM) do lead.
 *
 * Portado da intranet para o card do Slack e o resumo do booking dizerem a
 * mesma coisa que o resto da operação já lê.
 */

/** Os que a operação lê. A ordem aqui é a ordem de exibição. */
const CHAVES = [
  ["utm_campaign", "Campaign"],
  ["utm_source",   "Source"],
  ["utm_medium",   "Medium"],
  ["utm_content",  "Content"],
  ["utm_term",     "Term"],
] as const

export type Utm = Record<string, string>

const STORAGE_KEY = "sumzero:utm"
const PAGE_KEY    = "sumzero:landing-url"

/**
 * Extrai os UTM da URL, com regra de PRIMEIRO VENCE.
 *
 * Os links da campanha saem com as tags que o marketing escreveu e o SendGrid
 * anexa as dele no fim da mesma URL — o resultado tem `utm_campaign` duas
 * vezes. `URLSearchParams.get()` devolve a primeira ocorrência, então a tag
 * do marketing ganha da que a ferramenta acrescentou.
 */
export function utmDaUrl(pageUrl: string | null | undefined): Utm {
  if (!pageUrl) return {}
  let params: URLSearchParams
  try {
    params = new URL(pageUrl).searchParams
  } catch {
    return {}
  }

  const out: Utm = {}
  for (const [chave] of CHAVES) {
    const v = params.get(chave)?.trim()
    if (v) out[chave] = v.slice(0, 200)
  }
  return out
}

/**
 * A URL manda sobre o objeto do cliente, porque só ela preserva as duplicatas
 * — o objeto já passou por uma deduplicação que costuma ficar com a última
 * ocorrência, isto é, com a tag da ferramenta em vez da nossa.
 */
export function normalizaUtm(
  pageUrl: string | null | undefined,
  doCliente?: Utm | null,
): Utm {
  return { ...(doCliente ?? {}), ...utmDaUrl(pageUrl) }
}

/** Pares [rótulo, valor] na ordem de exibição, só os preenchidos. */
export function utmPares(utm: Utm | null | undefined): Array<[string, string]> {
  if (!utm) return []
  const out: Array<[string, string]> = []
  for (const [chave, rotulo] of CHAVES) {
    const v = utm[chave]?.trim()
    if (v) out.push([rotulo, v])
  }
  return out
}

/**
 * Bloco de texto para o resumo do booking. A API de bookings do ServiceTitan
 * não tem campo livre de atribuição — o `campaignId` é um id fixo. O que o CSR
 * lê na tela é o `summary`, então é nele que isto entra.
 */
export function utmParaResumo(utm: Utm | null | undefined): string {
  const pares = utmPares(utm)
  if (!pares.length) return ""
  return "\n\nCampaign tracking:\n" + pares.map(([k, v]) => `${k}: ${v}`).join("\n")
}

/**
 * Guarda a atribuição da PRIMEIRA página da visita.
 *
 * O link da campanha cai em `/club-membership/terms?utm_...`, mas a pessoa
 * costuma navegar antes de preencher — sem guardar, a atribuição morre no
 * primeiro clique interno. Só grava se ainda não houver nada na sessão, senão
 * uma segunda visita orgânica apagaria a campanha que trouxe a pessoa.
 */
export function capturaUtm(): void {
  if (typeof window === "undefined") return
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return
    const utm = utmDaUrl(window.location.href)
    if (!Object.keys(utm).length) return
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(utm))
    sessionStorage.setItem(PAGE_KEY, window.location.href)
  } catch {
    // Modo privado ou storage bloqueado: segue sem atribuição.
  }
}

/** O que os formulários anexam ao POST. */
export function leadTracking(): { utm: Utm; pageUrl: string } {
  if (typeof window === "undefined") return { utm: {}, pageUrl: "" }
  try {
    const bruto = sessionStorage.getItem(STORAGE_KEY)
    const utm   = bruto ? (JSON.parse(bruto) as Utm) : utmDaUrl(window.location.href)
    const pageUrl = sessionStorage.getItem(PAGE_KEY) ?? window.location.href
    return { utm, pageUrl }
  } catch {
    return { utm: utmDaUrl(window.location.href), pageUrl: window.location.href }
  }
}
