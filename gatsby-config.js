require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: process.env.GATSBY_URL,
    title: "Award Book Subscription",
    titleTemplate: "%s · The last book subscription you will ever need.",
    description:
      "What to read next? This question comes often when confronted with the vast choice of books. By delivering an award winning book we are giving you quality literature for your next read. Chances are you will like it!",
    url: process.env.GATSBY_URL, // No trailing slash allowed!
    image: "/books.jpg", // Path to the image placed in the 'static' folder, in the project's root directory.
    keywords: ["book subscription", "book subscription ireland"],
    author: "Award Book Subscription",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
