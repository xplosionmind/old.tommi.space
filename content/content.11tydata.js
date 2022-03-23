module.exports = {
  permalink: '/{{ page.fileSlug | replace: " ", "-" }}/',
  lang: 'en',
  layout: 'wrapper',
  // Automatically generating titles, as explained in https://github.com/11ty/eleventy/discussions/2241#discussioncomment-2224265
  eleventyComputed: {
    title(data) {
      // return data.title || deslugify(data.page?.fileSlug);
      let hadTitle = false;
      const title = data.title || require('lodash').startCase(data.page?.fileSlug);
      if (data.title) {
        hadTitle = true;
      }
      // console.log(`${data.page.filePathStem} => ${title}${hadTitle ? " (had title)" : ""}`);
      return title;
    }
  }
};
