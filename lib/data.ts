export type Service = {
  slug: string;
  number: string;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "estate-development",
    number: "01",
    name: "Estate Development",
    tagline: "From raw ground to gated estate",
    summary:
      "We plan and develop full residential and commercial estates — roads, plot layout, and titles handled from the first survey peg to the final sale.",
    description: [
      "Estate development is where every other service we offer meets in one place. We take raw land, work out the most sellable and liveable layout for it, and carry the project through opening of access roads, subdivision, and titling of individual plots.",
      "Every estate currently on our books — from Busunju to Buloba — passed through this process before a single plot went on sale. It's the backbone of Frank Realtors.",
    ],
    bullets: [
      "Land acquisition & feasibility",
      "Plot layout & subdivision planning",
      "Access road opening",
      "Title processing per plot",
      "Estate sales & installment plans",
    ],
  },
  {
    slug: "surveying",
    number: "02",
    name: "Surveying",
    tagline: "Boundaries you can defend",
    summary:
      "Licensed boundary opening, resurveying, and mapping — the paperwork and pegs that protect a plot from future dispute.",
    description: [
      "A plot is only as secure as its survey. We carry out boundary opening, re-opening of disputed boundaries, and full topographical surveys for clients building, subdividing, or simply confirming what they own.",
      "Every survey we run feeds directly into Ministry of Lands records, so the coordinates on your title match what's pegged on the ground.",
    ],
    bullets: [
      "Boundary opening & re-opening",
      "Topographical & site surveys",
      "Deed plan preparation",
      "Coordinate verification with Ministry of Lands",
      "Subdivision surveys",
    ],
  },
  {
    slug: "land-documentation",
    number: "03",
    name: "Land Documentation",
    tagline: "Clean paper, clear ownership",
    summary:
      "Title searches, transfers, and processing — we handle the Ministry of Lands paperwork so your ownership is never in question.",
    description: [
      "Most land disputes in Uganda trace back to weak paperwork, not weak land. We run title searches before you commit to a purchase, process transfers once you have, and follow up on titles stuck in the system.",
      "This is the quiet, unglamorous work that makes every other transaction safe.",
    ],
    bullets: [
      "Title search & due diligence",
      "Transfer processing",
      "Sale agreement drafting",
      "Title follow-up at Ministry of Lands",
      "Land title mortgage support",
    ],
  },
  {
    slug: "land-settlement",
    number: "04",
    name: "Land Settlement",
    tagline: "Resolving disputes on the ground",
    summary:
      "Boundary disputes, family land conflicts, and encroachment — we mediate and settle before they become court cases.",
    description: [
      "Land settlement is about getting neighbours, family members, or buyers and sellers to agree on a boundary or claim before it escalates. We combine surveying, local council engagement, and straightforward mediation.",
      "Where settlement isn't possible on-site, we prepare the documentation needed to take a matter further.",
    ],
    bullets: [
      "Boundary dispute mediation",
      "Family land settlement",
      "Encroachment resolution",
      "Local council liaison",
      "Settlement documentation",
    ],
  },
  {
    slug: "farm-management",
    number: "05",
    name: "Farm Management",
    tagline: "Land that works while you're away",
    summary:
      "Day-to-day management of agricultural land for absentee owners — from planting schedules to harvest sales.",
    description: [
      "Many of our clients buy land as an investment but live and work elsewhere. Our farm management service keeps that land productive: planting, upkeep, security, and sale of produce, with regular reporting back to the owner.",
      "It's the difference between land that sits idle and land that earns.",
    ],
    bullets: [
      "Planting & crop planning",
      "On-site labour supervision",
      "Land security & upkeep",
      "Produce sales coordination",
      "Regular owner reporting",
    ],
  },
  {
    slug: "construction",
    number: "06",
    name: "Construction",
    tagline: "Structures on solid ground",
    summary:
      "Residential and commercial construction — from foundation to finishing, on land we've often surveyed and titled ourselves.",
    description: [
      "Because we already control the land side — surveying, titling, and settlement — construction is a natural next step for clients ready to build. We manage contractors, materials, and timelines against a clear budget.",
      "Whether it's a boundary wall, a home, or a commercial unit, the same site knowledge that protected your title also informs how we build.",
    ],
    bullets: [
      "Foundation & structural work",
      "Residential & commercial builds",
      "Boundary walls & access roads",
      "Contractor & materials management",
      "Site supervision",
    ],
  },
  {
    slug: "compound-design",
    number: "07",
    name: "Compound Design",
    tagline: "The finished picture",
    summary:
      "Landscaping and compound layout that turns a completed plot into a finished home — driveways, gardens, and outdoor living space.",
    description: [
      "A compound is the last impression a property makes. We design driveways, gardens, walkways, and outdoor sitting areas that fit the size of the plot and the character of the home built on it.",
      "This service usually closes out a project that started years earlier with a single survey peg.",
    ],
    bullets: [
      "Compound layout & landscaping",
      "Driveway & walkway design",
      "Garden & greenery planning",
      "Outdoor sitting areas",
      "Finishing consultation",
    ],
  },
];

export type LandListing = {
  slug: string;
  name: string;
  location: string;
  priceLow: string;
  priceHigh: string;
  description: string[];
  features: string[];
  images: string[];
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const listingGallery = [
  "/land/plot-1.png",
  "/land/plot-2.png",
  "/land/plot-3.png",
  "/land/plot-4.png",
  "/land/plot-5.png",
];

function galleryFor(_seed: string): string[] {
  return listingGallery;
}

const defaultFeatures = [
  "Surveyed & pegged boundaries",
  "Ready title processing",
  "Access road to the plot",
  "Flexible installment plans",
  "Verified ownership documentation",
];

function listingDescription(name: string, location: string) {
  return [
    `${name} sits in ${location}, one of the areas Frank Realtors has fully surveyed, subdivided, and opened up with access roads for sale.`,
    `As with every Frank Realtors estate, plots here come with clean, verifiable paperwork and the option to pay in installments rather than one lump sum.`,
  ];
}

const rawListings: Array<Omit<LandListing, "slug" | "description" | "features" | "images">> = [
  { name: "Busunju Town Council Estate", location: "Busunju", priceLow: "6.5M", priceHigh: "8M" },
  { name: "Zigoti Mega City Estate", location: "Zigoti", priceLow: "12M", priceHigh: "14M" },
  { name: "Buwalula Roadside Estate", location: "Buwalula", priceLow: "14M", priceHigh: "16M" },
  { name: "Mudduuma Commercial Estate", location: "Mudduuma", priceLow: "13.8M", priceHigh: "15M" },
  { name: "Mpigi Mpambire Estate", location: "Mpigi", priceLow: "7M", priceHigh: "8M" },
  { name: "Kibibi Town View Estate", location: "Kibibi", priceLow: "6.8M", priceHigh: "8M" },
  { name: "Katende Estate", location: "Katende", priceLow: "15M", priceHigh: "18M" },
  { name: "Buloba Town Estate", location: "Buloba", priceLow: "45M", priceHigh: "50M" },
  { name: "Wakiso Kitalya Estate", location: "Wakiso", priceLow: "10M", priceHigh: "14M" },
  { name: "Gayaza Nakifuma Estate", location: "Gayaza", priceLow: "10M", priceHigh: "15M" },
  { name: "New Mpigi Hilltop Estate", location: "Mpigi", priceLow: "12M", priceHigh: "15M" },
  { name: "Bujjuko Mbazi Estate", location: "Bujjuko", priceLow: "12M", priceHigh: "15M" },
];

export const landListings: LandListing[] = rawListings.map((l) => {
  const slug = slugify(l.name);
  return {
    ...l,
    slug,
    description: listingDescription(l.name, l.location),
    features: defaultFeatures,
    images: galleryFor(slug),
  };
});

export const contact = {
  location: "Entebbe, Uganda",
  email: "donffrank@gmail.com",
  phone: "+256 751 886452",
  phoneDigits: "256751886452",
};
