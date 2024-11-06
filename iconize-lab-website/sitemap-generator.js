const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const { Readable } = require('stream');

// Define your routes here
const routes = [
  '/',
  '/services',
  '/services/app-development',
  '/services/web-development',
  '/services/marketing',
  '/services/magento',
  '/services/ecommerce',
  '/services/woocommerce',
  '/services/integration',
  '/about',
  '/about/company-culture',
  '/industries',
  '/connect'
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: 'https://iconizelab.com/' });

// Return a promise that resolves with your XML string
const sitemap = streamToPromise(Readable.from(routes).pipe(stream)).then((data) =>
  data.toString()
);

sitemap.then((xmlString) => {
  const ws = createWriteStream('./public/sitemap.xml');
  ws.write(xmlString);
  ws.end();
  console.log('Sitemap generated successfully');
});
