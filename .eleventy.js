const fs = require('fs');
const miniHtml = require('html-minifier');
const _ = require('lodash')

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
function wikilinkSlugifier(pageName) {
  pageName = pageName.trim()
  pageName = pageName.split('/').map(require('sanitize-filename')).join('/')
  pageName = pageName.replace(/\s+/, '-')
  return pageName
}
const markdownIt = require('markdown-it')
const md = markdownIt({
  html: true,
  fence: false
})
.use(require('markdown-it-wikilinks')({
  uriSuffix: '',
  makeAllLinksAbsolute: true,
  class: 'wikilink',
  postProcessPageName: wikilinkSlugifier
})).disable('code')
.use(require('markdown-it-attrs'))
.use(require('markdown-it-anchor'))
.use(require('markdown-it-footnote'))
.use(require('markdown-it-sup'))
.use(require('markdown-it-sub'))
.use(require('markdown-it-ins'))
.use(require('markdown-it-mark'))
.use(require('markdown-it-container'))
.use(require('markdown-it-collapsible'))
.use(require('markdown-it-abbr'))
.use(require('markdown-it-mathjax3'));

module.exports = function(eleventyConfig) {

    //******************//
   // Global variables //
  //******************//
  eleventyConfig.addGlobalData('image', '/tommi.space.wip.png');

  eleventyConfig.setFrontMatterParsingOptions({
    permalink: '/{{ page.fileSlug }}/',
  });

    //********//
   // Liquid //
  //********//
  eleventyConfig.setLiquidOptions({
    strictVariables: false,
    strictFilters: false,
    jekyllInclude: true,
    //trimOutputLeft: true,
    //trimOutputRight: true,
    //trimTagLeft: true,
    //trimTagRight: true,
  });
  eleventyConfig.addLiquidFilter('reverse', (collection) => {
    const arr = [...collection];
    return arr.reverse();
  });
  eleventyConfig.addFilter('markdownify', (str) => {
    return md.renderInline(str);
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
  eleventyConfig.setLibrary('md', md);
  eleventyConfig.addPlugin(require('eleventy-plugin-find'));
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-syntaxhighlight'));
  eleventyConfig.addPlugin(require('@sardine/eleventy-plugin-external-links'));
  eleventyConfig.addPlugin(require('@sardine/eleventy-plugin-tinysvg'), {
    baseUrl: 'assets/svg/'
  });
  eleventyConfig.addPlugin(require('eleventy-plugin-toc'), {
    ul: true,
  });
  eleventyConfig.addPlugin(require('@11ty/eleventy-plugin-rss'));
  eleventyConfig.addPlugin(require('@quasibit/eleventy-plugin-sitemap'), {
    sitemap: {
      hostname: 'https://tommi.space'
    },
  });
  eleventyConfig.addPlugin(require('eleventy-plugin-seo'), {
    title: 'Tommi Space',
    description: 'A virtual representation of the mess inside Tommi’s mind',
    url: 'https://tommi.space',
    author: 'Tommi',
    twitter: 'xplosionmind',
    image: '/tommi.space.wip.png',
    options: {
      titleStyle: 'minimalistic',
      titleDivider: '|',
      imageWithBaseUrl: true,
      twitterCardType: 'summary_large_image',
      showPageNumbers: false
    }
  });
  eleventyConfig.addDataExtension('csv', contents => require('csv-parse/sync').parse(contents, {columns: true, skip_empty_lines: true}));

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
