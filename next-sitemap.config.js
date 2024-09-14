/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://thetatau-dg.org',  // Replace with your site's URL
    generateRobotsTxt: true,  // (Optional) Creates a robots.txt file
    sitemapSize: 5000,  // Number of URLs per sitemap file (default is 5000)
    changefreq: 'weekly',  // Optional: Frequency of page updates
    robotsTxtOptions: {
        policies: [
        { userAgent: '*', allow: '/' }
        // { userAgent: '*', disallow: '/admin'} // Example once there is a backend
        ],
    }
  };