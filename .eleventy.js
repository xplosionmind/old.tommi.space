const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
//const pluginSeo = require('eleventy-plugin-seo');
const pluginRss = require('@11ty/eleventy-plugin-rss')
const markdownIt = require('markdown-it')
const markdownItRenderer = new markdownIt()

module.exports = function (eleventyConfig) {
  return {
    dir: {
      layouts: '_layouts'
    }
  };

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
};
