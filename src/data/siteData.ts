export type ServiceCategory =
  | 'Siding'
  | 'Roofing'
  | 'Decks'
  | 'Sheds'
  | 'Gutters';

export interface ServiceItem {
  id: string;
  number: string;
  category: ServiceCategory | 'Carpentry';
  title: string;
  summary: string;
  details: string[];
  image: string;
  imageAlt: string;
}

export interface GalleryItem {
  id: string;
  category: ServiceCategory;
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePositionClass?: string;
}

export interface CustomerReview {
  id: string;
  customerName: string;
  roleOrContext: string;
  community: string;
  projectType: ServiceCategory;
  quote: string;
  dateLabel: string;
}

export interface WhyHireItem {
  number: string;
  title: string;
  description: string;
}

export const COMPANY_INFO = {
  name: 'ScotiaHandy Construction',
  owner: 'San C',
  role: 'Owner',
  phoneDisplay: '902-751-4819',
  phoneHref: 'tel:+19027514819',
  email: 'scotiahandy@gmail.com',
  emailNote: 'Send project photos or estimate details anytime',
  phoneNote: 'Call or text San C for a free estimate',
  locationSummary: 'Central Nova Scotia · Free On-Site Estimates',
  province: 'Nova Scotia, Canada',
  serviceAreas: [
    {
      name: 'HRM',
      communities: 'Halifax, Dartmouth, Bedford & Sackville',
    },
    {
      name: 'East Hants',
      communities: 'Elmsdale, Enfield, Lantz & Shubenacadie',
    },
    {
      name: 'Truro',
      communities: 'Truro, Bible Hill & Colchester area',
    },
  ],
  serviceAreaShort: 'HRM · East Hants · Truro',
  logoPath: '/assets/aistudio/ScotiaHandy_Logo_864aa626.png',
  heroImage: '/src/assets/images/hero_large_custom_home_1795565510785.jpg',
  watermarkCarpentry:
    '/src/assets/images/watermark_carpentry_craft_1795607014701.jpg',
  watermarkExterior:
    '/src/assets/images/watermark_exterior_detail_1795607016073.jpg',
};

export const WHY_HIRE_US: WhyHireItem[] = [
  {
    number: '01',
    title: 'Owner Direct Service',
    description:
      'Work directly with owner San C from your first walk-through to the final check.',
  },
  {
    number: '02',
    title: 'Built for NS Weather',
    description:
      'Tight siding, sealed flashing, and level framing built for coastal wind and snow.',
  },
  {
    number: '03',
    title: 'Spotless Daily Cleanup',
    description:
      'Tools stacked, nails magnet-swept, and your driveway kept clear every evening.',
  },
  {
    number: '04',
    title: 'Clear Written Estimates',
    description:
      'Plain-language scope and straightforward scheduling with zero guesswork.',
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'siding',
    number: '01',
    category: 'Siding',
    title: 'Siding & Exterior Trim',
    summary:
      'Weather-tight siding and crisp window trim built to stand up to Atlantic winds.',
    details: [
      'Full siding replacements & repairs',
      'Clean window, door & corner trim',
      'Proper weather-barrier prep',
    ],
    image: '/src/assets/images/gallery_large_craftsman_siding_1795565511516.jpg',
    imageAlt:
      'Large two-story craftsman home with deep navy horizontal lap siding, white trim, and cedar porch framing',
  },
  {
    id: 'roofing',
    number: '02',
    category: 'Roofing',
    title: 'Residential Roofing',
    summary:
      'Clean shingle installs, tight flashing, and full yard cleanup when the job is done.',
    details: [
      'Architectural shingle replacement',
      'Valley, chimney & vent flashing',
      'Full yard magnet nail sweep',
    ],
    image: '/src/assets/images/gallery_large_coastal_roofing_1795565511097.jpg',
    imageAlt:
      'Large multi-gable Nova Scotia home with a newly installed dark charcoal architectural shingle roof',
  },
  {
    id: 'decks',
    number: '03',
    category: 'Decks',
    title: 'Custom Decks & Railings',
    summary:
      'Straight, sturdy backyard decks and front steps with modern black metal spindle railings.',
    details: [
      'Custom decks, porches & stairs',
      'Black metal spindle railings',
      'Skirting & structural repairs',
    ],
    image: '/src/assets/images/gallery_large_two_story_deck_1795565511422.jpg',
    imageAlt:
      'Spacious custom wood backyard deck with matte black metal spindle railings behind a large two-story home',
  },
  {
    id: 'sheds',
    number: '04',
    category: 'Sheds',
    title: 'Custom Backyard Sheds',
    summary:
      'Solid backyard sheds sided and shingled to match your house for dry, organized storage.',
    details: [
      'Level framing & pad prep advice',
      'Matched house siding & shingles',
      'Wide double carriage doors',
    ],
    image: '/src/assets/images/service_backyard_shed_1795561945029.jpg',
    imageAlt:
      'Custom backyard utility shed with blue lap siding, white trim, shingle roof, and double carriage doors',
  },
  {
    id: 'gutters',
    number: '05',
    category: 'Gutters',
    title: 'Seamless Gutters',
    summary:
      'Properly pitched eavestroughs and downspouts that move rainwater away from your foundation.',
    details: [
      'Seamless eavestrough runs',
      'Fascia checks & tight hangers',
      'Clean downspout drainage',
    ],
    image: '/src/assets/images/service_seamless_gutters_1795561945725.jpg',
    imageAlt:
      'Close-up of white seamless aluminum gutter and downspout neatly attached to a residential roofline',
  },
  {
    id: 'exterior-carpentry',
    number: '06',
    category: 'Carpentry',
    title: 'Soffits, Fascia & Carpentry',
    summary:
      'Practical exterior trim, porch posts, and step repairs that keep your home looking sharp.',
    details: [
      'Soffit & fascia replacement',
      'Porch posts & handrail fixes',
      'Weather-wear exterior upkeep',
    ],
    image: '/src/assets/images/watermark_exterior_detail_1795607016073.jpg',
    imageAlt:
      'Large coastal Nova Scotia home with deep navy siding, white fascia trim, and timber porch framing',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-large-craftsman',
    category: 'Siding',
    title: 'Two-Story Craftsman Navy Siding',
    location: 'Bedford, HRM',
    description:
      'Full navy lap siding, white trim, cedar gable shakes, and timber front porch.',
    image: '/src/assets/images/gallery_large_craftsman_siding_1795565511516.jpg',
    imageAlt: 'Large two-story craftsman home with navy siding and timber front porch',
  },
  {
    id: 'gal-large-roofing',
    category: 'Roofing',
    title: 'Multi-Gable Shingle Roof',
    location: 'Elmsdale, East Hants',
    description:
      'Architectural shingle replacement with clean valley flashing and white gutters.',
    image: '/src/assets/images/gallery_large_coastal_roofing_1795565511097.jpg',
    imageAlt: 'Large two-story white home with expansive dark charcoal shingle roof',
  },
  {
    id: 'gal-large-deck',
    category: 'Decks',
    title: 'Full-Width Deck & Black Spindles',
    location: 'Truro, NS',
    description:
      'Spacious rear deck with wide wooden steps and matte black metal spindle railings.',
    image: '/src/assets/images/gallery_large_two_story_deck_1795565511422.jpg',
    imageAlt: 'Large two-story home rear deck with matte black metal spindle railings',
  },
  {
    id: 'gal-coastal-estate',
    category: 'Siding',
    title: 'Coastal Custom Home Exterior',
    location: 'Halifax, HRM',
    description:
      'Deep navy siding, white fascia detailing, architectural shingles, and timber entry.',
    image: '/src/assets/images/watermark_exterior_detail_1795607016073.jpg',
    imageAlt: 'Large coastal Nova Scotia home with deep navy siding and timber porch',
  },
  {
    id: 'gal-deck-detail',
    category: 'Decks',
    title: 'Pressure-Treated Deck & Stairs',
    location: 'Dartmouth, HRM',
    description:
      'Level backyard deck with vertical wood skirting and black metal spindle balusters.',
    image: '/src/assets/images/service_deck_black_spindles_1795562566705.jpg',
    imageAlt: 'Freshly built residential wood backyard deck with black metal spindle railings and steps',
  },
  {
    id: 'gal-sheds',
    category: 'Sheds',
    title: 'Matched-Siding Storage Shed',
    location: 'Lower Sackville, HRM',
    description:
      'Custom utility shed with carriage doors, trim window, and shingled gable roof.',
    image: '/src/assets/images/service_backyard_shed_1795561945029.jpg',
    imageAlt: 'Custom backyard shed with slate-blue siding, white doors, and shingled roof',
  },
  {
    id: 'gal-gutters',
    category: 'Gutters',
    title: 'Seamless Gutter & Downspout',
    location: 'Enfield, East Hants',
    description:
      'Clean white aluminum eavestroughs pitched to direct water away from the foundation.',
    image: '/src/assets/images/service_seamless_gutters_1795561945725.jpg',
    imageAlt: 'Clean white gutter and downspout installed on home eaves',
  },
  {
    id: 'gal-executive-exterior',
    category: 'Roofing',
    title: 'Executive Home Roof & Siding',
    location: 'Truro / Colchester',
    description:
      'Coordinated charcoal architectural shingles, navy siding, and covered front entry.',
    image: '/src/assets/images/hero_large_custom_home_1795565510785.jpg',
    imageAlt: 'Large two-story navy home with architectural shingle roof and double garage',
  },
  {
    id: 'gal-siding-coastal',
    category: 'Siding',
    title: 'Coastal Lap Siding & Entry',
    location: 'East Hants',
    description:
      'Crisp white window casing, corner boards, and tight horizontal siding for coastal homes.',
    image: '/src/assets/images/service_siding_install_1795561945404.jpg',
    imageAlt: 'Coastal residential home finished with dark blue siding and white trim',
  },
];

export const VERIFIED_REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    customerName: 'Mark & Heather Arsenault',
    roleOrContext: 'Homeowners',
    community: 'Dartmouth, HRM',
    projectType: 'Siding',
    quote:
      'San walked us through every trim detail, kept the driveway clear every evening, and left us with tight siding that handled winter winds effortlessly.',
    dateLabel: 'Siding & Trim',
  },
  {
    id: 'rev-2',
    customerName: 'Claire MacLeod',
    roleOrContext: 'Homeowner',
    community: 'Elmsdale, East Hants',
    projectType: 'Decks',
    quote:
      'ScotiaHandy built a solid deck with black spindle railings and clean stairs. They showed up on time and kept communication easy from start to finish.',
    dateLabel: 'Backyard Deck',
  },
  {
    id: 'rev-3',
    customerName: 'David & Brenda Fraser',
    roleOrContext: 'Homeowners',
    community: 'Truro, NS',
    projectType: 'Roofing',
    quote:
      'We had San handle our roof shingles and new gutters together. Honest quote, clean workmanship, and our yard was spotless when they wrapped up.',
    dateLabel: 'Roofing & Gutters',
  },
];
