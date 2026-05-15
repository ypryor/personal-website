export interface EventEntry {
  tag: string;
  tagColor: 'teal' | 'pink' | 'neutral';
  date: string;
  title: string;
  summary: string;
  href: string;
}

export const upcoming: EventEntry[] = [
  // TODO: Add your upcoming talks, conferences, and events here.
  // Example:
  // {
  //   tag: 'Conference',
  //   tagColor: 'teal',
  //   date: 'Jun 9–12, 2026 · Asilomar, CA',
  //   title: 'Population, Evolutionary, and Quantitative Genetics Conference (PEQG 2026)',
  //   summary: 'Presenting research on selection in African-descent populations.',
  //   href: 'https://genetics-gsa.org/peqg/',
  // },
];

export const recent: EventEntry[] = [
  // TODO: Add your recent talks, publications announcements, and events here.
];
