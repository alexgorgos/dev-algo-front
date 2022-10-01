require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Alexandru Gorgos | Full-stack Developer`,
    siteUrl: `https://dev.alexandrugorgos.com`,
    description: "Alexandru Gorgos web development presentation website",
    twitterUsername: `@alexandrugo_`,
    image: `/6532770.jpeg`,
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.ACCESS_TOKEN_CONTENTFUL,
        spaceId: process.env.SPACE_ID_CONTENTFUL,
      },
    },
    "gatsby-plugin-emotion",
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-9FGC4R22NH"],
      },
      pluginConfig: {
        head: true,
        anonymize_ip: true,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`, `.markdown`],
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://dev.alexandrugorgos.com",
        sitemap: "https://dev.alexandrugorgos.com/sitemap/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
  ],
};
