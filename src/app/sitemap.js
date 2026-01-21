export default function sitemap() {
  return [
    {
      url: 'https://qcdtravels.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://qcdtravels.com/about',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://qcdtravels.com/tours',
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}