// ─────────────────────────────────────────────────────────────
// All site content lives in this file. Edit here; pages update.
// Anything marked TODO is a gap to fill in before going live.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yemko Pryor',
  suffix: 'PhD',
  role: 'Postdoctoral Researcher',
  lab: 'Lasisi Lab',
  labUrl: '', // not shown anywhere yet
  institution: 'University of Michigan',
  location: 'Ann Arbor, MI',
  tagline: 'DNA is a historical document.',
  statement:
    'I am a genetic historian studying how migration, admixture, and social history shape human variation. By reading DNA alongside the written historical record, I use skin pigmentation—a highly variable and evolutionarily dynamic trait—as a model for understanding how populations change as they come together.',
  // Shown in the footer. Set to '' to hide.
  email: 'ypryor@umich.edu',
  links: {
    'Google Scholar': 'https://scholar.google.com/citations?user=SK9QDGgAAAAJ&hl=en',
    ORCID: 'https://orcid.org/0000-0002-1942-786X',
    GitHub: 'https://github.com/ypryor',
  } as Record<string, string>,
  // File in public/. Set to '' to hide the download button.
  cvPdf: 'Yemko_Pryor_CV.pdf',
};

export const scales = [
  {
    n: '01',
    title: 'Trait',
    kicker: 'Pigmentation as a model',
    body:
      'Skin pigmentation is a dynamic, complex trait that I have studied for years. It varies more than almost any other human trait, so it captures the upper bounds of human variation and tracks how that variation moves in actively admixing populations.',
  },
  {
    n: '02',
    title: 'Population',
    kicker: 'Admixture through time',
    body:
      'Most population-history methods were built for old, well-separated groups. I extend them to highly admixed, recently diverged populations, and ask how a gene’s place in the melanogenesis network and a population’s history together shape constraint and adaptation.',
  },
  {
    n: '03',
    title: 'Historical',
    kicker: 'Genomes ↔ archives',
    body:
      'DNA is a historical document, and it says the most when read next to actual ones. I pair historical and modern genomes with legal codes and archival records to ask how moments in history redirected admixture and variation.',
  },
];

export const path = [
  {
    place: 'Oberlin College',
    what: 'BA, Biology and Africana Studies · 2014–2018',
    detail:
      'Honors thesis across both majors, bringing epigenetics into conversation with historical archives of chattel slavery. Biology and documents, side by side for the first time.',
  },
  {
    place: 'University of Chicago',
    what: 'Postbaccalaureate Research Fellow · 2018–2019',
    detail:
      'How environments register in the epigenome: stress, preterm birth and DNA methylation in an African American cohort.',
  },
  {
    place: 'Emory University',
    what: 'PhD, Genetics and Molecular Biology · Lindo Lab · 2019–2025',
    detail:
      'Population genomics and epigenomics of high-altitude Andean populations, including the first whole-methylome dataset from Indigenous Andean and Amazonian populations, with training in ancient DNA.',
  },
  {
    place: 'University of Michigan',
    what: 'Postdoctoral Researcher · Lasisi Lab · 2025–present',
    detail:
      'Human variation through the lens of pigmentation: genetic constraint in the melanogenesis network, measurement bias across skin tones, and the infrastructure of forensic genomics.',
  },
];

export const methods = [
  'Ancestry and admixture inference',
  'Haplotype- and allele-frequency-based selection scans',
  'Ancestral recombination graphs',
  'Historical and ancient DNA',
  'DNA methylation analysis',
  'Whole-genome QC pipelines',
  'Python · R · shell · HPC',
];

export type Publication = {
  year: number;
  title: string;
  authors: string;
  venue: string;
  status: 'Published' | 'Preprint';
  summary?: string;
  links: { label: string; href: string }[];
};

export const publications: Publication[] = [
  {
    year: 2026,
    title:
      'Optical Limits in Skin Reflectance Measurement: Quantifying Melanin-Dependent Constraints on Erythema Detection',
    authors: 'Pryor Y, He J, Kang J, Jenkins B, Lasisi T',
    venue: 'Journal of Investigative Dermatology 146, 1740–1751',
    status: 'Published',
    summary:
      'Objective skin measurements are not automatically unbiased. Analysing 15,000+ reflectance spectra, we show that melanin progressively masks hemoglobin’s spectral signature, so visible-range erythema detection, whether by spectrophotometers, clinical cameras, or AI, loses sensitivity in the darkest skin, where data are also scarcest.',
    links: [
      { label: 'Journal', href: 'https://doi.org/10.1016/j.jid.2026.03.025' },
      { label: 'bioRxiv', href: 'https://doi.org/10.64898/2025.12.22.696093' },
    ],
  },
  {
    year: 2026,
    title:
      'National and state-level datasets of United States forensic DNA databases 2001–2025',
    authors: 'Pryor Y, Ranka V, Donadio JP, Muller SC, Wilson J, Lasisi T',
    venue: 'Scientific Data',
    status: 'Published',
    summary:
      'The first harmonized longitudinal record of US forensic DNA infrastructure: a monthly national (NDIS) time series reconstructed from archived FBI webpages, state-level totals and policy metadata for all 50 states, and standardized demographic data from public-records requests.',
    links: [
      { label: 'Journal', href: 'https://doi.org/10.1038/s41597-026-07605-5' },
      { label: 'arXiv', href: 'https://arxiv.org/abs/2511.11953' },
      { label: 'Dataset', href: 'https://lasisilab.github.io/PODFRIDGE-Databases/' },
    ],
  },
  {
    year: 2026,
    title:
      'Ancient Ecuadorian genomes reveal millennia of genetic continuity on the Pacific Coast of South America',
    authors: 'Lindo J, Rivas Alava D, Juengst S, Pryor Y, Joseph SK, Ortiz Aguilu JJ, Lunniss R',
    venue: 'PNAS Nexus 5, pgag323',
    status: 'Published',
    links: [{ label: 'Journal', href: 'https://doi.org/10.1093/pnasnexus/pgag323' }],
  },
  {
    year: 2026,
    title: 'Classical Foundations and Genomic Advances in Human Pigmentation and Hair Morphology',
    authors: 'Pryor Y, Heald L, Lasisi T',
    venue: 'Under review',
    status: 'Preprint',
    links: [{ label: 'Preprint', href: 'https://doi.org/10.20944/preprints202610.0784.v1' }],
  },
  {
    year: 2025,
    title:
      'Whole Methylomes Reveal High-Altitude–Associated Methylation at Hypoxia and Pigmentation Genes in South American Indigenous Populations',
    authors:
      'Pryor Y, Lindo J, Migliore NR, Alava DR, Di Gerlando R, Tineo DHT, Gusmão L, Gonzalez-Andrade F, Achilli A',
    venue: 'Environmental Epigenetics, dvaf026',
    status: 'Published',
    links: [{ label: 'Journal', href: 'https://doi.org/10.1093/eep/dvaf026' }],
  },
  {
    year: 2023,
    title:
      'Deconstructing Eurocentrism in skin pigmentation research via the incorporation of diverse populations and theoretical perspectives',
    authors: 'Pryor Y, Lindo J',
    venue: 'Evolutionary Anthropology, 1–11',
    status: 'Published',
    links: [{ label: 'Journal', href: 'https://doi.org/10.1002/evan.21993' }],
  },
  {
    year: 2018,
    title:
      'Attraction of Culex pipiens to House Sparrows Is Influenced by Host Age but Not Uropygial Gland Secretions',
    authors: 'Garvin MC, Austin A, Boyer K, Gefke M, Wright C, Pryor Y, Soble A, Whelan RJ',
    venue: 'Insects 9, 127',
    status: 'Published',
    links: [],
  },
];

export type Talk = { year: string; title: string; venue: string; note?: string };

export const talksArePlaceholder = false;
export const talks: Talk[] = [
  {
    year: '2026',
    title: 'Testing Network-Based Predictions of Genetic Constraint in Melanogenesis',
    venue: 'Midwest Population Genetics Conference, Chicago, IL',
    note: 'Poster · Best Postdoctoral Poster Award',
  },
  {
    year: '2026',
    title: 'Testing Network-Based Predictions of Genetic Constraint in Melanogenesis',
    venue: 'Population, Evolutionary, and Quantitative Genetics (PEQG) Conference, Pacific Grove, CA',
    note: 'Poster',
  },
  {
    year: '2025',
    title: 'Exploring the Evolutionary Histories of High-Altitude Andean Populations',
    venue: 'Oberlin College Biology Department Seminar, Oberlin, OH',
    note: 'Talk',
  },
  {
    year: '2023',
    title:
      'Deconstructing Eurocentrism in Skin Pigmentation Research: The Value of Public Health and Genetic Data from Ancient and Contemporary Populations',
    venue: 'Edward Bouchet Graduate Honor Society Conference, Yale University, New Haven, CT',
    note: 'Talk',
  },
  {
    year: '2022',
    title: 'Epigenetics, Slavery and Transgenerational Trauma',
    venue: 'Oberlin College Department of Neuroscience (virtual)',
    note: 'Talk',
  },
  {
    year: '2022',
    title:
      'Marginalizing Melanin: Historical Pigmentation-Based Prejudices Obscuring Research on the Microevolution of Skin Pigmentation',
    venue: 'American Association of Biological Anthropologists (AABA), Denver, CO',
    note: 'Poster',
  },
  {
    year: '2021',
    title:
      'Marginalizing Melanin: Historical Pigmentation-Based Prejudices Obscuring Research on the Microevolution of Skin Pigmentation',
    venue: 'Research Symposium on Racial and Social Disparities, Inequities, and Injustice, Atlanta, GA',
    note: 'Talk',
  },
  {
    year: '2019',
    title: 'Resilience, Research and Resistance: Diary of a Black Woman Scientist',
    venue: 'Chicago Health and Medical Careers Citywide Student Conference, Chicago, IL',
    note: 'Talk',
  },
];

export const guestLectures: Talk[] = [
  {
    year: '2025',
    title: 'Epigenomic and genomic approaches to high-altitude adaptation in Indigenous Andean populations',
    venue: 'Department of Biology Speaker Series, Oberlin College',
  },
  {
    year: '2024',
    title: 'What population genetics offers global health: pigmentation, vitamin D and UV adaptation',
    venue: 'Foundations of Global Health (NSCI 103), Oberlin College',
  },
  {
    year: '2022',
    title: 'Epigenetic techniques and gene regulatory networks',
    venue: 'Genetics, Evolution & Ecology (BIOL 200), Oberlin College',
  },
  {
    year: '2022',
    title: 'Human history, genetic variation, and how historical racism shapes global health research',
    venue: 'Global Health and Culture (BIOL 035), Oberlin College',
  },
];

export const cv = {
  appointments: [
    {
      title: 'Postdoctoral Researcher, Lasisi Lab',
      where: 'Department of Anthropology, University of Michigan',
      when: '2025–present',
    },
    {
      title: 'Postbaccalaureate Research Fellow',
      where: 'Biological Sciences Division and Department of Human Genetics, University of Chicago',
      when: '2018–2019',
    },
  ],
  education: [
    {
      title: 'PhD, Genetics and Molecular Biology',
      where: 'Emory University · Advisor: John Lindo',
      when: '2019–2025',
    },
    {
      title: 'BA, Biology and Africana Studies (High Honors)',
      where: 'Oberlin College',
      when: '2014–2018',
    },
  ],
  awards: [
    { title: 'Michigan Pioneer Fellowship', when: '2026' },
    { title: 'Outstanding Postdoctoral Fellow Award, U-M Postdoctoral Association', when: '2026' },
    { title: 'Best Postdoctoral Poster Award, Midwest Population Genetics Conference', when: '2026' },
    { title: 'Kharen Fulton Diversity Graduate Award, Emory University', when: '2024' },
    { title: 'Edward Bouchet Graduate Honor Society, Emory University', when: '2023' },
    { title: 'National Science Foundation Graduate Research Fellowship', when: '2022–2025' },
    { title: 'Emory Diversifying Graduate Education (EDGE) Fellowship, Laney Graduate School', when: '2022–2023' },
    { title: 'Ford Foundation Predoctoral Fellowship', when: '2021–2022' },
    { title: 'Centennial Scholars Fellowship, Laney Graduate School', when: '2019–2024' },
  ],
  teaching: [
    {
      title: 'LEO Lecturer, Introduction to Genetics (BIOL 305)',
      where: 'University of Michigan',
      when: 'Fall 2026',
    },
    {
      title: 'Teaching Assistant, Measuring Human Traits (ANTHBIO 471)',
      where: 'University of Michigan',
      when: 'Fall 2025',
    },
    {
      title: 'Program Coordinator, LGS-SOAR',
      where: 'Laney Graduate School, Emory University',
      when: 'Summer 2023',
    },
    {
      title: 'Teaching Assistant, Epigenetics and the Human Condition',
      where: 'Emory University',
      when: 'Fall 2020',
    },
    {
      title: 'Research mentor',
      where: 'Undergraduate, honors-thesis and doctoral trainees at Michigan and Emory',
      when: '2020–present',
    },
  ],
};
