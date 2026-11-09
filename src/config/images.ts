/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IMAGE CONFIGURATION
 * ─────────────────────────────────────────────────────────────────────────────
 * This is the single file to edit when swapping placeholder images for a
 * client's real photos. Astro will automatically optimize every local image
 * at build time (WebP/AVIF conversion, srcset generation, CLS-safe dimensions).
 *
 * HOW TO ADD YOUR OWN IMAGES
 * ──────────────────────────
 * 1. Drop your image file into the correct folder under src/assets/images/
 * 2. Uncomment the matching import below and update the filename
 * 3. Export it — the component picks it up automatically
 *
 * Supported formats: .jpg  .jpeg  .png  .webp  .avif
 *
 * FOLDER STRUCTURE
 * ────────────────
 *   src/assets/images/
 *     hero/      ← one image used in the homepage Hero section
 *     about/     ← one image used in the About section and About page
 *     gallery/   ← all project photos (drop any number of files here)
 *
 * Until you add local files the components fall back to placeholder URLs
 * served from Unsplash. Those are fine for development/demo but are NOT
 * optimized by Astro. Swap them for local files before going live.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import type { ImageMetadata } from 'astro';

// ── Hero ──────────────────────────────────────────────────────────────────────
// Recommended: landscape, at least 1600 × 1200 px
// To swap: replace the file in src/assets/images/hero/ and update the filename.
import heroImage from '../assets/images/hero/hero.jpg';
export { heroImage };

// ── About ─────────────────────────────────────────────────────────────────────
// Recommended: portrait or square, at least 900 × 700 px
// To use: drop your file into src/assets/images/about/, then uncomment the
// import below, update the filename, and change the export to: export { aboutImage };
//
// import aboutImage from '../assets/images/about/team.jpg';
export const aboutImage: ImageMetadata | undefined = undefined;
//comment out above and uncomment below to use your own image
// export { aboutImage };

// ── Gallery — auto-discovered ─────────────────────────────────────────────────
// Drop any number of image files into src/assets/images/gallery/ and they will
// appear in the gallery automatically — no code changes needed.
//
// The file name becomes the alt text:
//   rare-manuscript-scanning.jpg    → "Rare Manuscript Scanning"
//   metadata-cataloging.jpg         → "Metadata Cataloging"
//
// Recommended: landscape images, at least 800 × 600 px each.
// Aim for consistent proportions (4:3 works best with the gallery grid).

export interface GalleryImage {
  src: ImageMetadata | string;
  alt: string;
}

const discovered = Object.entries(
  import.meta.glob<{ default: ImageMetadata }>(
    '../assets/images/gallery/*.{jpg,jpeg,png,webp,avif}',
    { eager: true },
  ),
).map(([path, mod]): GalleryImage => ({
  src: mod.default,
  alt: path
    .split('/').pop()!
    .replace(/\.[^.]+$/, '')        // strip extension
    .replace(/[-_]/g, ' ')          // hyphens/underscores → spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()), // Title Case
}));

// High-quality placeholders for book digitization, archival collections, and typography
const placeholders: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80',
    alt: 'Archival library book stacks and preservation',
  },
  {
    src: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=600&q=80',
    alt: 'Vintage open book during digitization and inspection',
  },
  {
    src: 'https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=600&q=80',
    alt: 'Detailed manuscript proofreading and typesetting review',
  },
  {
    src: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
    alt: 'Digital cataloging and metadata indexing workstation',
  },
  {
    src: 'https://images.unsplash.com/photo-1532012164546-f432f2e3777a?w=600&q=80',
    alt: 'Rare book conservation and non-destructive capture',
  },
  {
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80',
    alt: 'Academic volume digitization and digital preservation',
  },
];

export const galleryImages: GalleryImage[] = discovered.length > 0 ? discovered : placeholders;
