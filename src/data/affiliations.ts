export interface Affiliation {
  name: string;        // displayed link text
  sub: string;         // muted subtitle line under the name
  href: string;
}

export const affiliations: Affiliation[] = [
  {
    name: 'Lasisi Lab',
    sub: 'Department of Anthropology · University of Michigan',
    href: 'https://www.lasisilab.com/',
  },
  // TODO: Add any other center/program affiliations you hold at UMich below.
  // Example format:
  // {
  //   name: 'Michigan Institute for Data & AI in Society',
  //   sub: 'MIDAS',
  //   href: 'https://midas.umich.edu/',
  // },
];
