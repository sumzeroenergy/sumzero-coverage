import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comfort Club Membership | SumZero Energy Systems",
  description:
    "$99/year per system. Annual 16-point HVAC inspection, priority service, 15% off repairs, and more. No contract. Cancel any time. Serving Greater Boston & MetroWest.",
  keywords: [
    "HVAC maintenance plan",
    "comfort club",
    "annual HVAC inspection",
    "SumZero Energy Systems",
    "heat pump inspection",
    "mini-split maintenance",
    "HVAC service plan Massachusetts",
    "Greater Boston HVAC",
    "MetroWest HVAC",
  ],
  openGraph: {
    title: "Comfort Club Membership — $99/year | SumZero Energy Systems",
    description:
      "Annual HVAC inspection + priority service + 15% off repairs. One trained technician, 16 documented points, written report. No contract.",
    url: "https://coverage.sumzeroenergysystems.com/club-membership",
    siteName: "SumZero Energy Systems",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://coverage.sumzeroenergysystems.com/assets/club-membership/teaser-title.png",
        width: 1200,
        height: 630,
        alt: "SumZero Comfort Club Membership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Club Membership — $99/year | SumZero Energy Systems",
    description:
      "Annual HVAC inspection + priority service + 15% off repairs. No contract. Greater Boston & MetroWest.",
  },
  alternates: {
    canonical: "https://coverage.sumzeroenergysystems.com/club-membership",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://www.sumzeroenergysystems.com/#business",
      name: "SumZero Energy Systems",
      url: "https://www.sumzeroenergysystems.com",
      telephone: "+15089650046",
      address: {
        "@type": "PostalAddress",
        streetAddress: "84 October Hill Road",
        addressLocality: "Holliston",
        addressRegion: "MA",
        postalCode: "01746",
        addressCountry: "US",
      },
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 42.2001,
          longitude: -71.4245,
        },
        geoRadius: "50000",
      },
      priceRange: "$$",
      sameAs: ["https://www.sumzeroenergysystems.com"],
    },
    {
      "@type": "Service",
      "@id": "https://coverage.sumzeroenergysystems.com/club-membership#service",
      name: "SumZero Comfort Club Membership",
      description:
        "Annual HVAC maintenance membership plan. Includes a 16-point system inspection, priority service queue, 15% off repairs and tune-ups, discounted weekend diagnostic, and referral rewards. $99 per system per year. No long-term contract.",
      provider: { "@id": "https://www.sumzeroenergysystems.com/#business" },
      offers: {
        "@type": "Offer",
        price: "99.00",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "99.00",
          priceCurrency: "USD",
          unitText: "per system per year",
        },
        availability: "https://schema.org/InStock",
        url: "https://coverage.sumzeroenergysystems.com/club-membership",
      },
      areaServed: "Greater Boston and MetroWest, Massachusetts",
      serviceType: "HVAC Maintenance Plan",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What does the Comfort Club membership include?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Comfort Club membership includes an annual 16-point system inspection (valued at $149), priority service queue, 15% off all labor and repairs, 10% off electrical and plumbing services, 5% off new equipment installations, a discounted weekend diagnostic charge of $99 (vs. $199 standard), and a $300 referral gift card for qualifying referrals.",
          },
        },
        {
          "@type": "Question",
          name: "How much does the Comfort Club cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Comfort Club costs $99 per system per year. Each system in your home (heat pump, mini-split, water heater, etc.) is covered by its own membership.",
          },
        },
        {
          "@type": "Question",
          name: "Is there a contract for the Comfort Club?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No long-term contract. The membership renews automatically each year via credit card. You can cancel at any time in writing — benefits end at cancellation and nothing is billed after.",
          },
        },
        {
          "@type": "Question",
          name: "What systems does the Comfort Club cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The Comfort Club covers heat pumps and central air conditioning, ductless mini-splits, gas furnaces, oil heating systems, tankless and heat pump water heaters, ERVs, and whole-home humidifiers.",
          },
        },
      ],
    },
  ],
}

export default function ClubMembershipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
