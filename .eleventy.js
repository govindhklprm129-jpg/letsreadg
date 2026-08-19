const { DateTime } = require("luxon");

module.exports = function (eleventyConfig) {
    eleventyConfig.addFilter("limit", (items, count) => {
    return Array.isArray(items) ? items.slice(0, count) : [];
  });
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "src/robots.txt": "robots.txt" });
  eleventyConfig.addPassthroughCopy({ "src/sitemap.xml": "sitemap.xml" });
  eleventyConfig.addFilter("date", (date, format = "d LLLL yyyy") => DateTime.fromJSDate(date === "now" ? new Date() : new Date(date)).toFormat(format));
  eleventyConfig.addFilter("slug", (text) => String(text).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""));
  eleventyConfig.addCollection("posts", (api) => api.getFilteredByGlob("src/blog/*.md").reverse());
  eleventyConfig.addCollection("books", () => []);
  eleventyConfig.addCollection("recommendations", (api) => api.getFilteredByGlob("src/recommendations/*.md"));
  eleventyConfig.addCollection("categories", (api) => [...new Set(api.getFilteredByGlob("src/blog/*.md").map(p => p.data.category).filter(Boolean))]);
  eleventyConfig.addCollection("tagsList", (api) => [...new Set(api.getFilteredByGlob("src/blog/*.md").flatMap(p => p.data.tags || []))]);
  eleventyConfig.addFilter("byCategory", (posts, category) => posts.filter(p => p.data.category === category));
  eleventyConfig.addFilter("byTag", (posts, tag) => posts.filter(p => (p.data.tags || []).includes(tag)));
  return { dir: { input: "src", includes: "_includes", data: "_data", output: "_site" }, markdownTemplateEngine: "njk", htmlTemplateEngine: "njk" };
};
