const inputDir = "src";
const layoutsDir = `_includes/layouts`;
const componentsDir = `${inputDir}/_includes/components`;

// Plugins
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const htmlMinPlugin = require('html-minifier');
const lazyImagesPlugin = require('eleventy-plugin-lazyimages');

// Components
// Code modified from https://github.com/adamduncan/eleventy-shortcomps
const Section = require(`./${componentsDir}/Section.js`);
const Lead = require(`./${componentsDir}/Lead.js`);
const Image = require(`./${componentsDir}/Image.js`);
const ImageThumbs = require(`./${componentsDir}/ImageThumbs.js`);
const Button = require(`./${componentsDir}/Button.js`);
const Card = require(`./${componentsDir}/Card.js`);
const ProjectSummary = require(`./${componentsDir}/ProjectSummary.js`);

module.exports = function(eleventyConfig) {
  // Plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(lazyImagesPlugin, {
    scriptSrc: '/assets/scripts/lazysizes/lazysizes.min.js',
    //preferNativeLazyLoad: false
  });

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy({ "node_modules/bootstrap/dist/js": "assets/scripts/bootstrap" });
  eleventyConfig.addPassthroughCopy({ "node_modules/jquery/dist": "assets/scripts/jquery" });
  eleventyConfig.addPassthroughCopy({ "node_modules/lazysizes/*.js": "assets/scripts/lazysizes" });

  // Paired shortcodes
  eleventyConfig.addPairedShortcode("section", Section);
  eleventyConfig.addPairedShortcode("lead", Lead);

  // Shortcodes
  eleventyConfig.addShortcode("ImageThumbs", ImageThumbs);
  eleventyConfig.addShortcode("Image", Image);
  eleventyConfig.addShortcode("Button", Button);
  eleventyConfig.addShortcode("Card", Card);
  eleventyConfig.addShortcode("ProjectSummary", ProjectSummary);

  // Markdown Options
  let markdownIt = require("markdown-it");
  let options = {
    html: true,
    breaks: true,
    typographer: true
  };
  eleventyConfig.setLibrary("md", markdownIt(options).disable("code"));

  // Transforms
  eleventyConfig.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlMinPlugin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true
      });
      return minified;
    }
    return content;
  });

  return {
    dir: {
      input: inputDir,
      output: "public",
      layouts: layoutsDir
    },
    markdownTemplateEngine: "njk"
  };
};
