export interface EventEntry {
  tag: string;
  tagColor: 'teal' | 'pink' | 'neutral';
  date: string;
  title: string;
  summary: string;
  href: string;
}

export const upcoming: EventEntry[] = [
  {
    tag: 'Conference',
    tagColor: 'teal',
    date: 'Jun\u00a09–12, 2026 · Asilomar, CA',
    title:
      'Population, Evolutionary, and Quantitative Genetics Conference (PEQG\u00a02026)',
    summary:
      'I will be there with my postdoc, Yemko Pryor, who will be presenting some of our research.',
    href: 'https://genetics-gsa.org/peqg/',
  },
];

export const recent: EventEntry[] = [
  {
    tag: 'Invited Forum',
    tagColor: 'neutral',
    date: 'May 2026 · Virtual',
    title: 'Making Genomics Matter: Science, Storytelling, and Public Engagement',
    summary:
      'ELSIhub — ELSI Friday Forum. With Janina Jeff, PhD. Moderated by Grace Byfield, PhD.',
    href: 'https://elsihub.org/event/elsi-friday-forum-making-genomics-matter-science-storytelling-and-public-engagement',
  },
];
