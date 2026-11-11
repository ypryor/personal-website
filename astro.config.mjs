import { defineConfig } from 'astro/config';

// The site currently lives at https://ypryor.github.io/personal-website/.
// Once yemkopryor.com is registered and pointed at GitHub, switch to:
//   site: 'https://yemkopryor.com'   and delete the `base` line.
export default defineConfig({
  site: 'https://ypryor.github.io',
  base: '/personal-website',
});
