/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PRIVACY POLICY — edit the sections below with your own policy content.
 * ─────────────────────────────────────────────────────────────────────────────
 * Each section has a `heading` and a `content` array of paragraphs.
 * Add, remove, or reorder sections as needed for your business.
 *
 * The `effectiveDate` is displayed at the top of the page.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const privacyPolicy = {
  effectiveDate: 'November 9, 2026',

  sections: [
    {
      heading: 'Information We Collect',
      content: [
        'At Glamkalai, we collect information that you voluntarily provide when requesting book proofreading, digitization, metadata extraction, or archive maintenance services. This includes your name, email address, institutional affiliation, telephone number, and project specifications.',
        'When you submit manuscripts, rare books, or digital files for processing, we maintain strict confidentiality protocols. We treat all text, imagery, and proprietary data with the utmost discretion and never disclose client materials to unauthorized third parties.',
      ],
    },
    {
      heading: 'Manuscript & Archival Material Confidentiality',
      content: [
        'We understand the sensitivity of unpublished works, proprietary research, and rare institutional collections. All files, scans, and metadata records uploaded or provided to Glamkalai remain exclusively your intellectual property.',
        'Our editorial staff and scanning technicians are bound by strict non-disclosure obligations. We never use client manuscripts for AI training, public indexing, or commercial redistribution.',
      ],
    },
    {
      heading: 'How We Use Your Information',
      content: [
        'We use client information solely to fulfill service agreements, provide detailed quotes, deliver digitized assets and proofreading reports, communicate project progress, and manage invoicing.',
        'Technical data collected automatically when visiting our website (such as browser type and referring URLs) is aggregated strictly to improve site performance and user experience.',
      ],
    },
    {
      heading: 'Data Security & Storage',
      content: [
        'We employ enterprise-grade encryption for all file transfers and digital storage repositories. Physical book collections entrusted to our facility for digitization are kept in secure, climate-monitored environments.',
        'Upon project completion and client sign-off, digital files are archived or securely expunged in accordance with the retention schedule agreed upon in your service contract.',
      ],
    },
    {
      heading: 'Your Rights & Controls',
      content: [
        'You have the right to request access to, modification of, or immediate deletion of your personal data and uploaded files at any time by contacting our privacy compliance team.',
      ],
    },
    {
      heading: 'Contact Us',
      content: [
        'For questions or inquiries regarding our privacy standards or data handling practices, please contact us at contact@glamkalai.com or through our Contact page.',
      ],
    },
  ],
} as const;

export type PrivacyPolicy = typeof privacyPolicy;
