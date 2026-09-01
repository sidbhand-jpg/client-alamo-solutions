// ============================================================
// PROJECTS.js — Project photo gallery data
// ============================================================
// Separate from CONFIG.js on purpose: this file updates far more
// often (new completed jobs) than the rest of the site config, and
// is written automatically by the Houzflow asset pipeline's publish
// step once that's live. Keeping it isolated means a malformed write
// here can never break the rest of the site (header, services, etc).
//
// Format is a plain global array — intentionally NOT nested in an
// object — so the publish step can write this whole file with simple
// string templating (assign the JSON-stringified array to a single
// top-level array variable). No AST-aware JS writer or bundler
// required on the Worker side.
//
// Field notes:
//   alt          — descriptive alt text (from the pipeline's alt_text
//                  field). Never reuse `title` here — title is a project
//                  label, alt should describe what's actually in the photo.
//   width/height — explicit intrinsic dimensions (post-Photon-resize),
//                  prevents layout shift (CLS) while the image loads.
//   featured     — true = eligible to show in the home page "Recent Work"
//                  section (capped at 8–9 there). Lets curation/approval
//                  decide what's a homepage-worthy shot vs. just-the-gallery.
//   publishedAt  — optional, supports freshness sorting later.
// ============================================================

const PROJECTS = [
  {
    title: "Residential Shingle Installation",
    category: "Roof Installation",
    img: "https://images.pexels.com/photos/38028508/pexels-photo-38028508.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Roofing crew installing asphalt shingles on a residential home",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-06-08",
  },
  {
    title: "New Roof Underlayment",
    category: "Roof Replacement",
    img: "https://images.pexels.com/photos/31771166/pexels-photo-31771166.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Roofer installing shingles over underlayment on a new residential roof",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-30",
  },
  {
    title: "Precision Shingle Work",
    category: "Roof Repair",
    img: "https://images.pexels.com/photos/33404248/pexels-photo-33404248.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Professional roofer securing shingles with a nail gun",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-20",
  },
  {
    title: "Commercial Flat Roofing",
    category: "Commercial Roofing",
    img: "https://images.pexels.com/photos/38781395/pexels-photo-38781395.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Roofing crew applying weatherproof material to a commercial flat roof",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-11",
  },
  {
    title: "Flat Roof Weatherproofing",
    category: "Commercial Roofing",
    img: "https://images.pexels.com/photos/38510748/pexels-photo-38510748.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Roofer installing weatherproof material on a flat roof",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-05-02",
  },
  {
    title: "Metal Roof Installation",
    category: "Roof Installation",
    img: "https://images.pexels.com/photos/37704240/pexels-photo-37704240.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Roofing crew installing metal panels on a residential roof",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-24",
  },
  {
    title: "Tile Roof Craftsmanship",
    category: "Roof Installation",
    img: "https://images.pexels.com/photos/37623622/pexels-photo-37623622.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Professional roofer installing tiles while wearing protective safety gear",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-15",
  },
  {
    title: "Rooftop Installation Detail",
    category: "Roof Repair",
    img: "https://images.pexels.com/photos/8853474/pexels-photo-8853474.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Construction professional completing a detailed rooftop installation",
    width: 800,
    height: 800,
    featured: true,
    publishedAt: "2026-04-06",
  },
];
