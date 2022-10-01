const path = require("path");

const slugify = (text) => {
  return text
    .toString() // Cast to string (optional)
    .normalize("NFKD") // The normalize() using NFKD method returns the Unicode Normalization Form of a given string.
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string (optional)
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/\-$/g, "");
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const contactRes = await graphql(`
    query Contact {
      contentfulContact {
        city
        emailAddress
        gitHub
        linkedIn
        phoneNumber
        twitter
        whatsapp
      }
    }
  `);

  const landingPageRes = await graphql(`
    query landingPage {
      contentfulLandingPage {
        aboutDetail {
          childMarkdownRemark {
            htmlAst
          }
        }
        aboutIntro {
          childMarkdownRemark {
            htmlAst
          }
        }
        headerParagraph {
          headerParagraph
        }
        featuredProjects {
          name
          url
          mainImage {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          relatedStack {
            stackItem
          }
        }
        availability {
          childMarkdownRemark {
            htmlAst
          }
        }
        cv
        feedbacks {
          name
          position
          content {
            childMarkdownRemark {
              htmlAst
            }
          }
        }
      }
    }
  `);

  const legalPagesRes = await graphql(`
    query legalPages {
      allContentfulLegal {
        nodes {
          pageTitle
          pageContent {
            childMarkdownRemark {
              html
              htmlAst
            }
          }
        }
      }
    }
  `);

  const getLegalPages = () => {
    let arr = [];
    legalPagesRes.data.allContentfulLegal.nodes.forEach(async (node) => {
      arr.push({ title: node.pageTitle, slug: `/${slugify(node.pageTitle)}` });
    });
    return arr;
  };

  const legalPages = await getLegalPages();

  await createPage({
    path: `/`,
    component: path.resolve(`src/templates/homepage.js`),
    context: {
      contact: contactRes.data.contentfulContact,
      legalPages: legalPages,
      headerContent:
        landingPageRes.data.contentfulLandingPage.headerParagraph
          .headerParagraph,
      aboutIntro:
        landingPageRes.data.contentfulLandingPage.aboutIntro.childMarkdownRemark
          .htmlAst,
      aboutDetails:
        landingPageRes.data.contentfulLandingPage.aboutDetail
          .childMarkdownRemark.htmlAst,
      featuredProjects:
        landingPageRes.data.contentfulLandingPage.featuredProjects,
      availability:
        landingPageRes.data.contentfulLandingPage.availability
          .childMarkdownRemark.htmlAst,
      cv: landingPageRes.data.contentfulLandingPage.cv,
      feedbacks: landingPageRes.data.contentfulLandingPage.feedbacks,
    },
  });

  legalPagesRes.data.allContentfulLegal.nodes.forEach(async (node) => {
    await createPage({
      path: `/${slugify(node.pageTitle)}`,
      component: path.resolve(`src/templates/legal.js`),
      context: {
        contact: contactRes.data.contentfulContact,
        legalPages: legalPages,
        pageTitle: node.pageTitle,
        pageContent: node.pageContent.childMarkdownRemark.htmlAst,
      },
    });
  });
};
