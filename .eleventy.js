const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginSeo = require('eleventy-plugin-seo');
//const pluginRss = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const markdownItRenderer = new markdownIt();
const csvParse = require('csv-parse/sync').parse;

module.exports = function(eleventyConfig) {

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
  })

    //*********//
   // Plugins //
  //*********//
  eleventyConfig.addPlugin(syntaxHighlight);
  //eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSeo, {
    title: 'Tommi Space',
    description: 'A virtual representation of the mess inside Tommi’s mind',
    url: 'https://tommi.space',
    author: 'Tommi',
    twitter: 'xplosionmind',
    image: '/logos/tommi.space.wip.png'
  });
  eleventyConfig.addDataExtension('csv', contents => csvParse(contents, {columns: true, skip_empty_lines: true}));

  return {
    dir: {
      layouts: '_layouts'
    }
  }; // there should never be anything after the “return” function
};
