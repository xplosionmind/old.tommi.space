const fs = require('fs');
const pluginFind = require('eleventy-plugin-find'); // #blocked #upstream-bug: not working
const pluginSyntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight'); // #TODO not working
const pluginImage = require('@11ty/eleventy-img'); // #TODO: understand how to make this work for local paths
const pluginSafeLinks = require('@sardine/eleventy-plugin-external-links');
const pluginSitemap = require('@quasibit/eleventy-plugin-sitemap');
const pluginSeo = require('eleventy-plugin-seo');
const pluginTinySVG = require('@sardine/eleventy-plugin-tinysvg');
const pluginTOC = require('eleventy-plugin-toc');
const pluginRSS = require('@11ty/eleventy-plugin-rss');
const csvParse = require('csv-parse/sync').parse;
const miniHtml = require('html-minifier');

// HTML Headers ID generation
/* #TODO: what walue to pass as `html`?
const { parseHHTML } = require('node-html-parser')
const rootHHTML = parseHHTML(html)

for (const h of rootHHTML.querySelectorAll('h1, h2, h3, h4, h5, h6')) {
  const slug = h.getAttribute('id') || slugify(h.textContent)
  h.setAttribute('id', slug)
  h.innerHTML = `<a href="#${slug}>${h.innerHTML}</a>`
}*/

// Markdown //
const markdownIt = require('markdown-it');
const markdownItRenderer = new markdownIt();
const markdownItAnchor = require('markdown-it-anchor');
const markdownItAttrs = require('markdown-it-attrs');
const markdownItFootnotes = require('markdown-it-footnote');
const markdownItWikilinks = require('markdown-it-wikilinks')({
  'uriSuffix': '',
  'makeAllLinksAbsolute': true,
  'class': 'wikilink'
});
const mdOptions = {
  html: true,
  fence: false
};
const markdownLib = markdownIt(mdOptions).disable('fence').use(markdownItWikilinks).use(markdownItAttrs).use(markdownItAnchor).use(markdownItFootnotes);


module.exports = function(eleventyConfig) {

    //******************//
   // Global variables //
  //******************//
  eleventyConfig.addGlobalData('image', '/tommi.space.wip.png');
  eleventyConfig.addGlobalData('primary', '#FCC920');
  eleventyConfig.addGlobalData('author', {
    name: 'Tommi',
    email: 'surfing@tommi.space'
  });

  eleventyConfig.setFrontMatterParsingOptions({
    permalink: '/{{ page.fileSlug }}/',
  });

    //********//
   // Liquid //
  //********//
  eleventyConfig.setLiquidOptions({
    strictVariables: false,
    strictFilters: false,
    jekyllInclude: true
  });
  eleventyConfig.addLiquidFilter('reverse', (collection) => {
    const arr = [...collection];
    return arr.reverse();
  });
  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.renderInline(str)
  });

    //*************//
   // Collections //
  //*************//
  eleventyConfig.addCollection('posts', function(collection) {
    return collection.getFilteredByGlob('content/posts/*').sort((a, b) => {
      return b.date - a.date; // sort by date - descending
    });
  });
  eleventyConfig.addCollection('jam', function(collection) {
    return collection.getFilteredByGlob('content/notes/public/*').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection('poetry', function(collection) {
    return collection.getFilteredByGlob('content/poetry/*').sort((a, b) => {
      return b.date - a.date;
    });
  });
  eleventyConfig.addCollection('sconnesso', function(collection) {
    return collection.getFilteredByGlob('content/sconnesso/*').sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Post excerpt
  eleventyConfig.setFrontMatterParsingOptions({ excerpt: true, excerpt_separator: '<!--excerpt-->'});

    //******//
   // Scss //
  //******//
  eleventyConfig.addWatchTarget('./styles');
  eleventyConfig.addPassthroughCopy({ './styles': '/' });
  eleventyConfig.addPassthroughCopy({'./assets/fonts': '/'});
  eleventyConfig.addPassthroughCopy({'./assets/graphics': '/'});
  eleventyConfig.addPassthroughCopy({'./assets/images': '/'});
  eleventyConfig.addPassthroughCopy({'./assets/svg': '/'});

    //*********//
   // Plugins //
  //*********//
  eleventyConfig.setLibrary('md', markdownLib);
  eleventyConfig.addPlugin(pluginFind);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.addPlugin(pluginSafeLinks);
  eleventyConfig.addPlugin(pluginTinySVG, {
    baseUrl: 'assets/svg/',
  });
  eleventyConfig.addPlugin(pluginTOC, {
    ul: true,
  });
  eleventyConfig.addPlugin(pluginRSS);
  eleventyConfig.addPlugin(pluginSitemap, {
    sitemap: {
      hostname: 'https://tommi.space'
    },
  });
  eleventyConfig.addPlugin(pluginSeo, {
    title: 'Tommi Space',
    description: 'A virtual representation of the mess inside Tommi’s mind',
    url: 'https://tommi.space',
    author: 'Tommi',
    twitter: 'xplosionmind',
    image: '/tommi.space.wip.png'
  });
  eleventyConfig.addDataExtension('csv', contents => csvParse(contents, {columns: true, skip_empty_lines: true}));

  eleventyConfig.addTransform('miniHtml', function(content, outputPath) {
    if( this.outputPath && this.outputPath.endsWith('.html') ) {
      let minified = miniHtml.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true
      });
      return minified;
    }

    return content;
  });

    //*****//
   // 404 //
  //*****//
  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware('*', (req, res) => {
          const content_404 = fs.readFileSync('_site/404.html');
          res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    dir: {
      layouts: '_layouts'
    }
  }; // there should never be anything after the “return” function
};
