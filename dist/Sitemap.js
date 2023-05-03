"use strict";

React = require('react');
var createSitemap = require('react-router-sitemap');
var StaticRouter = require('react-router-dom').StaticRouter;
var App = require('./App');
var routes = ['/', '/home', '/about',
// '/service',
'/contactUs', '/webDesigning', '/webDevelopment', '/appDevlopment', '/softwareDevlopment', '/digitalMarketing', '/automatedSystem', '/businessAnalysis', '/socialMediaMarketing', '/gallery',
// '/service/:id',
'/404'];
var path = require('path');
function generateSitemap() {
  var myapp = React.createElement(StaticRouter, {
    location: "/",
    context: {}
  }, React.createElement(App));
  return createSitemap({
    hostname: 'https://www.hminnovance.com',
    urls: routes.map(function (route) {
      return {
        url: route,
        changefreq: 'daily',
        priority: 0.7
      };
    }),
    targetFolder: path.join(process.cwd(), './public'),
    sitemapFilename: 'sitemap.xml',
    gzip: true,
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"'
  }).toString();
}
generateSitemap();
