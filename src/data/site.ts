// ─────────────────────────────────────────────────────────────
// All site content lives in this file. Edit here; pages update.
// Anything marked TODO is a gap to fill in before going live.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Yemko Pryor',
  suffix: 'PhD',
  role: 'Postdoctoral Researcher',
  lab: 'Lasisi Lab',
  labUrl: 'https://lasisilab.com/',
  institution: 'University of Michigan',
  location: 'Ann Arbor, MI',
  tagline: 'DNA is a historical document.',
  statement:
    'I am a genetic historian interested in how migration, admixture, and social history shape human variation. My research brings together population genetics, evolutionary biology, and historical inquiry to understand how human populations have changed through time. I use skin pigmentation as one model for exploring these relationships, investigating how evolutionary and demographic processes leave their imprint on patterns of human genetic variation.',
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

export const centralGoal =
  'Using an integrated historical and genetic approach to understand human biological variation and the social and political systems built around its interpretation.';

// `short` is the home page card; `title`, `kicker` and `body` are the longer
// version on the Research page, which each home card links to by `id`.
export const scales = [
  {
    n: '01',
    id: 'trait',
    title: 'Trait',
    kicker: 'Pigmentation as a model',
    body:
      'Skin pigmentation is a dynamic, complex trait that I have studied for years. Its remarkable variation makes it a powerful model for understanding human genetic diversity and tracing how evolutionary processes shape variation in actively admixing populations. Yet pigmentation is more than a biological trait; it is also a visible characteristic through which societies have historically constructed racial categories and assigned social meaning.',
    short: {
      label: 'Biological',
      question: 'What is human variation?',
      blurb: 'Pigmentation as a model for understanding the evolution and distribution of human genetic diversity.',
    },
  },
  {
    n: '02',
    id: 'population',
    title: 'Population',
    kicker: 'Admixture through time',
    body:
      'Population history is complex, and the ways we model it influence the evolutionary patterns we can recover. I investigate how migration, admixture, and population structure shape genetic variation, and how population history and a gene’s position within the melanogenesis network jointly influence evolutionary constraint and adaptation.',
    short: {
      label: 'Evolutionary',
      question: 'How does variation change?',
      blurb: 'Migration, admixture, population structure, selection, and evolutionary constraint.',
    },
  },
  {
    n: '03',
    id: 'historical',
    title: 'Historical',
    kicker: 'Genomes ↔ archives',
    body:
      'DNA is a historical document, but it tells us the most when read alongside the written record. I bring genomic data together with historical archives, legal codes, and documentary evidence to investigate how migration, admixture, and historical systems of racial classification have shaped our understanding of human variation—and how historical events have redirected population histories.',
    short: {
      label: 'Historical and social',
      question: 'What have humans made of that variation?',
      blurb:
        'The historical construction of racial categories, color-based hierarchies, legal classifications, and the ways these systems have shaped people’s lives and the historical records available to us.',
    },
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
    year: '2026',
    title: 'Beyond racial categories: what genetics tells us about skin and hair variation, and why it matters for health',
    venue: 'Advanced Topics (MCDB 401), Department of Molecular, Cellular, and Developmental Biology, University of Michigan',
  },
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

export type Feature = {
  year: string;
  kind: string;
  title: string;
  outlet: string;
  summary?: string;
  links: { label: string; href: string }[];
};

// Press, profiles and interviews, newest first.
export const media: Feature[] = [
  {
    year: '2026',
    kind: 'Award',
    title: 'Yemko Pryor Receives Outstanding Postdoctoral Fellow Award',
    outlet: 'U-M Ecology and Evolutionary Biology',
    summary:
      'A profile marking the 2026 Outstanding Postdoctoral Fellow Award, covering current work on the genetics of human pigmentation alongside teaching and community engagement.',
    links: [
      {
        label: 'Read the profile',
        href: 'https://lsa.umich.edu/eeb/news-events/all-news/search-news/yemko-pryor-receives-outstanding-postdoctoral-fellow-award.html',
      },
    ],
  },
  {
    year: '2026',
    kind: 'Award',
    title: 'Postdoctoral fellows, faculty mentors recognized',
    outlet: 'The University Record, University of Michigan',
    summary:
      'Coverage of the Outstanding Postdoctoral Fellow Awards, which recognize excellence across research, teaching, mentoring, service and leadership.',
    links: [
      {
        label: 'Read the article',
        href: 'https://record.umich.edu/articles/postdoctoral-fellows-faculty-mentors-recognized/',
      },
    ],
  },
  {
    year: '2025',
    kind: 'Research news',
    title: 'Epigenetics linked to high-altitude adaptation in Andes',
    outlet: 'Emory News',
    summary:
      'A news feature on the first whole-methylome data from the Kichwa of the Ecuadorian Andes and the Ashaninka of the Amazon Basin, and what DNA methylation may contribute to long-standing human adaptation.',
    links: [
      {
        label: 'Read the article',
        href: 'https://news.emory.edu/stories/2025/11/epigenetics-linked-high-altitude-adaptation-andes',
      },
    ],
  },
  {
    year: '2024',
    kind: 'Profile',
    title: 'Student Spotlight: Meet Yemko Pryor',
    outlet: 'Emory Genetics and Molecular Biology Program',
    summary:
      'A featured scientist spotlight on bringing a genetics perspective into biological anthropology and studying the evolutionary histories of Indigenous populations in South America.',
    links: [
      {
        label: 'Read the spotlight',
        href: 'https://biomed.emory.edu/PROGRAM_SITES/GMB/news-events/featured-scientist/',
      },
    ],
  },
  {
    year: '2024',
    kind: 'Community',
    title: 'Top Priorities and Growing Complexities for Some LGBTQ Voters',
    outlet: 'GLAAD',
    summary:
      'Coverage of GLAAD Media Institute listening and coaching sessions with activists and community leaders at Atlanta City Hall, including work building community for queer graduate students at Emory.',
    links: [
      {
        label: 'Read the article',
        href: 'https://glaad.org/glaad-gmi-atlanta-activists-training-development-listening-session/',
      },
    ],
  },
  {
    year: '2021',
    kind: 'Profile',
    title: 'Oberlin Science Scholar Explores Ancient DNA at Emory and Howard Universities',
    outlet: 'Oberlin College and Conservatory',
    summary:
      'An alumni profile tracing the path from a double major in biology and Africana studies to doctoral research in ancient DNA.',
    links: [
      {
        label: 'Read the profile',
        href: 'https://www.oberlin.edu/news/oberlin-science-scholar-explores-ancient-dna-emory-and-howard-universities',
      },
    ],
  },
  {
    year: '2020',
    kind: 'Research news',
    title: 'Ancient DNA lab maps little-explored human lineages',
    outlet: 'Emory News',
    summary:
      'A feature on the Lindo ancient DNA lab, including work comparing coastal and high-altitude populations of ancient Peru.',
    links: [
      {
        label: 'Read the feature',
        href: 'https://news.emory.edu/features/2020/10/ancient-dna-lab-maps-little-explored-human-lineages',
      },
    ],
  },
  {
    year: '2019',
    kind: 'Interview',
    title: 'I Am Abel',
    outlet: 'Chicago Access Network Television (CAN TV)',
    summary: 'A television interview with Dr. Conway about research, recorded in Chicago in July 2019.',
    links: [{ label: 'Watch the interview', href: 'https://www.youtube.com/watch?v=e6TCWTI_FrI' }],
  },
  {
    year: '2018',
    kind: 'Profile',
    title: 'Alumni Perspectives: Yemko Pryor ’14',
    outlet: 'Francis W. Parker School, Chicago',
    summary:
      'An alumni interview on how interests in biology and Africana studies first took shape and where they led after Oberlin.',
    links: [{ label: 'Read the interview', href: 'https://www.fwparker.org/alumni-perspectives/yemko-pryor-14' }],
  },
];

export type Outreach = {
  when: string;
  org: string;
  role: string;
  body: string;
  links: { label: string; href: string }[];
};

export const outreach: Outreach[] = [
  {
    when: '2026–present',
    org: 'African American Cultural and Historical Museum of Washtenaw County (AACHM)',
    role: 'Museum volunteer · Woodlawn Cemetery restoration volunteer',
    body: 'I volunteer at the museum, which runs primarily on volunteers, staffing the front desk to help keep its doors open. Through the museum I joined the Woodlawn Cemetery restoration effort, a community-led project to uncover and archive the headstones of a historically Black cemetery in Ypsilanti. At listening sessions I record the stories and concerns of residents and descendants for the executive committee, so that restoration proceeds on the community’s terms.',
    links: [{ label: 'Visit AACHM', href: 'https://www.aachm.org/' }],
  },
  {
    when: '',
    org: 'MI DNA Day',
    role: 'Volunteer scientist',
    body: 'I volunteer with MI DNA Day, a statewide program that brings scientists into Michigan high school classrooms to teach hands-on lessons about genetics and to talk with students about what a career in science can look like.',
    links: [],
  },
];
