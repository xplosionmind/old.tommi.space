// Automatically generating titles, as explained in https://github.com/11ty/eleventy/discussions/2241#discussioncomment-2224265
const _ = require('lodash');

module.exports = {
  permalink: '/{{ page.fileSlug }}/',
  lang: 'en',
  layout: 'wrapper',
  eleventyComputed: {
    title(data) {
      // return data.title || deslugify(data.page?.fileSlug);

      let hadTitle = false;
      const title = data.title || _.startCase(data.page?.fileSlug);
      if (data.title) {
        hadTitle = true;
      }
      // console.log(`${data.page.filePathStem} => ${title}${hadTitle ? " (had title)" : ""}`);
      return title;
    }
  }
};
