/** @type {import('next').NextConfig} */
const nextConfig = {
  // enable static export for GitHub Pages
  output: 'export',
  // ensure folder-per-page output (index.html files)
  trailingSlash: true,
  // repo path, e.g. https://fablabbcn.github.io/more4nature-website
  basePath: '/more4nature-website',
  async redirects() {
    return [
      {
        source: '/events-news',
        destination: 'https://blog.more4nature.eu',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
