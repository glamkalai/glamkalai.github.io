/**
 * ─────────────────────────────────────────────────────────────────────────────
 * TERMS OF SERVICE — edit the sections below with your own terms.
 * ─────────────────────────────────────────────────────────────────────────────
 * Each section has a `heading` and a `content` array of paragraphs.
 * Add, remove, or reorder sections as needed for your business.
 *
 * The `effectiveDate` is displayed at the top of the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const termsOfService = {
  effectiveDate: 'November 9, 2026',

  sections: [
    {
      heading: 'Acceptance of Terms',
      content: [
        'By commissioning services or accessing the Glamkalai website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our services or website.',
      ],
    },
    {
      heading: 'Scope of Services',
      content: [
        'Glamkalai provides professional book proofreading, non-destructive optical digitization, OCR text conversion, bibliographic metadata extraction, digital archive maintenance, and eBook publishing preparation.',
        'Each commission is governed by an agreed statement of work detailing specific deliverables, file formats, resolution parameters, delivery timelines, and pricing.',
      ],
    },
    {
      heading: 'Intellectual Property & Copyright',
      content: [
        'Clients retain 100% ownership and copyright of all manuscripts, literary works, and archival materials submitted to Glamkalai. Glamkalai claims no intellectual property rights over any client content processed or digitized.',
        'Clients represent and warrant that they possess the legal authority, copyright, or appropriate licensing to digitize, proofread, or reproduce the materials provided.',
      ],
    },
    {
      heading: 'Handling of Physical Books & Materials',
      content: [
        'We exercise the highest standard of archival care with all books, manuscripts, and print collections. Our digitization equipment employs non-destructive V-cradle scanners and cold LED illumination designed specifically to protect fragile bindings and pages.',
        'Clients are responsible for insured transit to and from our archival facilities unless white-glove transport is explicitly contracted.',
      ],
    },
    {
      heading: 'Quality Guarantee & Review Window',
      content: [
        'We take pride in our 99.9% accuracy guarantee. Upon receipt of completed proofreading passes, digitized images, or metadata packages, clients have 14 calendar days to review deliverables and request revisions or corrections consistent with the original scope.',
      ],
    },
    {
      heading: 'Limitation of Liability',
      content: [
        'To the fullest extent permitted by applicable law, Glamkalai’s liability for any claim arising from our services shall be strictly limited to the fees paid by the client for the specific service in question.',
      ],
    },
    {
      heading: 'Contact Us',
      content: [
        'If you have any questions regarding these Terms of Service, please reach out to us at contact@glamkalai.com or visit our Contact page.',
      ],
    },
  ],
} as const;

export type TermsOfService = typeof termsOfService;
