export function openBookingModal(summaryTitle: string) {
  window.dispatchEvent(new CustomEvent("sumzero:open-booking", { detail: { summaryTitle } }))
}
