const path = require("path");

exports.createPages = async function ({ actions, graphql }) {
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

  console.log(landingPageRes);

  await createPage({
    path: `/`,
    component: path.resolve(`src/templates/homepage.js`),
    context: {
      contact: contactRes.data.contentfulContact,
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
};
