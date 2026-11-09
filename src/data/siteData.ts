/**
 * ─────────────────────────────────────────────────────────────────────────────
 * SITE DATA — the single file every template user edits
 * ─────────────────────────────────────────────────────────────────────────────
 * Business name, contact info, services, reviews, team, hours, and navigation
 * all live here. Components and pages import from this file so you never need
 * to hunt through markup to update your business details.
 *
 * IMPORTANT: also update the `site` field in astro.config.mjs to match your
 * production domain.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteData = {
  // ── Business identity ────────────────────────────────────────────────────
  name: 'Glamkalai',
  tagline: 'Preserving Knowledge, Perfecting Words.',
  description:
    'Professional book proofreading, archival digitization, metadata extraction, and digital catalog maintenance services for authors, publishers, libraries, and cultural archives.',
  url: 'https://glamkalai.github.io',
  locale: 'en_US',

  /** Business / contractor license number. Displayed in the header and footer
   *  as a trust signal. Set to an empty string to hide it. */
  license: 'Archival & Editorial Standards Compliant',

  // ── Contact ──────────────────────────────────────────────────────────────
  email: 'contact@glamkalai.com',
  phoneForTel: '+1-800-555-0199',
  phoneFormatted: '(800) 555-0199',
  address: {
    lineOne: 'Library & Archival Center',
    lineTwo: 'Suite 400',
    city: 'Boston',
    state: 'MA',
    zip: '02108',
    country: 'US',
    mapLink: 'https://maps.app.goo.gl/example',
  },
  hours: [
    { days: 'Monday - Friday', time: '8:00 AM - 6:00 PM EST' },
    { days: 'Saturday', time: '9:00 AM - 3:00 PM EST' },
    { days: 'Sunday', time: 'Closed' },
  ],
  emergencyService: 'Expedited Rush Proofreading & Digitization Available',

  // ── Social media (set to empty string to hide a link) ────────────────────
  socials: {
    facebook: 'https://www.facebook.com/',
    instagram: 'https://www.instagram.com/',
    google: 'https://www.google.com/maps',
  },

  // ── Navigation (add, remove, or reorder as needed) ───────────────────────
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── Services ─────────────────────────────────────────────────────────────
  services: [
    {
      title: 'Book Proofreading & Editorial Review',
      description:
        'Meticulous line-by-line editorial proofreading for manuscripts, rare reprints, academic publications, and translations. We catch typographical errors, grammatical inconsistencies, citation anomalies, and typesetting issues before publication.',
    },
    {
      title: 'Archival Book Digitization',
      description:
        'Non-destructive, high-resolution optical scanning for delicate books, manuscripts, periodicals, and rare collections. We capture every detail with archival color precision adhering to ISO preservation guidelines.',
    },
    {
      title: 'Advanced OCR & Text Extraction',
      description:
        'Transform scanned book pages into clean, searchable, and fully editable digital text. Our specialized OCR pipeline handles complex multi-column typography, footnotes, archaic fonts, and multiple languages with high fidelity.',
    },
    {
      title: 'Bibliographic Metadata Extraction',
      description:
        'Automated and curated metadata indexing for libraries and repositories. We extract and structure data conforming to MARC21, Dublin Core, MODS, and ONIX schemas, including ISBN, author authority, subjects, and table of contents.',
    },
    {
      title: 'Digital Archive Maintenance & Preservation',
      description:
        'Long-term preservation solutions for digital collections. We manage repository architecture, checksum audits, lossless file migration, and secure cloud backups to safeguard your digital heritage indefinitely.',
    },
    {
      title: 'eBook Conversion & Digital Publishing',
      description:
        'Convert digitized texts into modern publishing standards including EPUB 3, Kindle KF8, accessible PDF/UA, and XML. Ready for distribution on global platforms with dynamic reflow and accessibility compliance.',
    },
  ],

  // ── Reviews ──────────────────────────────────────────────────────────────
  reviews: [
    {
      quote:
        "Glamkalai digitized our university's special collection of 19th-century manuscripts with breathtaking fidelity and flawless metadata tagging. Truly exceptional craftsmanship.",
      name: 'Dr. Eleanor Vance',
      location: 'University Archives, MA',
      rating: 5,
    },
    {
      quote:
        'The proofreading team caught subtle grammatical and typography errors that two previous editorial rounds overlooked. Our latest volume went to print with complete peace of mind.',
      name: 'Marcus Thorne',
      location: 'Historical Press Author',
      rating: 5,
    },
    {
      quote:
        'Their metadata extraction pipeline saved our cataloging team months of manual labor. Every record arrived structured in MARC21 and Dublin Core formats without a hitch.',
      name: 'Siddharth Raman',
      location: 'Digital Library Director',
      rating: 5,
    },
    {
      quote:
        'Fast turnaround on high-resolution scanning without risking binding or spine strain. Their non-destructive equipment is second to none for rare print conservation.',
      name: 'Claire Beauchamp',
      location: 'Heritage Conservation Trust',
      rating: 5,
    },
    {
      quote:
        'From OCR transcription cleanup to routine maintenance of our digital repository, Glamkalai is an indispensable partner for our academic publishing house.',
      name: 'David K. Lindqvist',
      location: 'Academic Press Publisher',
      rating: 5,
    },
    {
      quote:
        'Clear project communication, transparent pricing, and remarkable attention to detail on every digitized page. They set the gold standard in book preservation.',
      name: 'Amina Al-Mansoor',
      location: 'Literary Foundation',
      rating: 5,
    },
  ],

  // ── About page ───────────────────────────────────────────────────────────
  about: {
    story: [
      'Founded with a deep commitment to literary heritage and cultural preservation, Glamkalai bridges the physical world of print with modern digital accessibility. We partner with authors, independent publishers, university libraries, and archival institutions to protect, digitize, and perfect the written word.',
      'Our team comprises seasoned editorial proofreaders, archival scanning specialists, and metadata engineers. Utilizing state-of-the-art non-destructive scanners and rigorous editorial workflows, we ensure that every digitized book and manuscript maintains historical integrity while gaining modern digital discoverability.',
    ],
    team: [
      {
        name: 'Anwar Kalai',
        role: 'Founder & Archival Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
      },
      {
        name: 'Elena Rostova',
        role: 'Lead Editorial Proofreader',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
      },
      {
        name: 'Marcus Vance',
        role: 'Metadata & Information Architect',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
      },
    ],
  },

  // ── Trust bar items (homepage strip) ─────────────────────────────────────
  trustItems: [
    { label: 'Archival Standard', value: 'ISO' },
    { label: 'Accuracy Guarantee', value: '99.9%' },
    { label: 'Books Preserved', value: '50,000+' },
    { label: 'Years Experience', value: '12+' },
  ],

  // ── Footer nav columns ──────────────────────────────────────────────────
  footerNav: [
    {
      title: 'Services',
      links: [
        { label: 'Book Proofreading', href: '/services' },
        { label: 'Archival Digitization', href: '/services' },
        { label: 'Metadata Extraction', href: '/services' },
        { label: 'Archive Maintenance', href: '/services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Glamkalai', href: '/about' },
        { label: 'Client Reviews', href: '/reviews' },
        { label: 'Blog & Insights', href: '/blog' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'Contact', href: '/contact' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
  ],
} as const;

export type SiteData = typeof siteData;
