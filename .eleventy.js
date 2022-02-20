const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginSeo = require('eleventy-plugin-seo');
//const pluginRss = require('@11ty/eleventy-plugin-rss');
const markdownIt = require('markdown-it');
const markdownItRenderer = new markdownIt();
const markdownItAnchor = require('markdown-it-anchor'); // to implement
const csvParse = require('csv-parse/sync').parse;
const pluginNavigation = require('@11ty/eleventy-navigation'); // to implement


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
  });

    //*************//
   // Collections //
  //*************//
  eleventyConfig.addCollection('posts',
  collection => collection
    .getAllSorted()
    .filter(item => item.url && item.inputPath.startsWith('./_posts/')));
  eleventyConfig.addCollection('notes',
  collection => collection
    .getAllSorted()
    .filter(item => item.url && item.inputPath.startsWith('./_notes/')));

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
