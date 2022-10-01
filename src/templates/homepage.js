import * as React from "react";
import About from "../components/About";
import Availability from "../components/Availability";
import Feedbacks from "../components/Feedbacks";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Projects from "../components/Projects";
import { Helmet } from "react-helmet";

const Homepage = ({ pageContext }) => {
  const {
    contact,
    headerContent,
    aboutDetails,
    aboutIntro,
    featuredProjects,
    availability,
    cv,
    feedbacks,
    legalPages,
  } = pageContext;

  const light = "rgb(0, 30, 60)";
  const dark = "rgb(10, 25, 41)";

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Alexandru Gorgos | Full-stack Developer</title>
        <link rel="canonical" href="https:/alexandrugorgos.com" />
        <meta
          name="description"
          content="Alexandru Gorgos - web developer specialist based in Oxford, this is his presentation website"
        />
        <meta
          name="twitter:title"
          content="Alexandru Gorgos | Full-stack Developer"
        />
        <meta name="twitter:url" content="https:/dev.alexandrugorgos.com" />
        <meta
          name="twitter:description"
          content="Alexandru Gorgos - web developer specialist based in Oxford, this is his presentation website"
        />
        <meta name="twitter:image" content="/6532770.jpeg" />
        <meta name="twitter:creator" content="@alexandrugo_" />
        <link rel="icon" href="/ico.jpg" />
      </Helmet>
      <Header bgcolor={light} maxWidth="xl" content={headerContent} />
      <main>
        <About
          bgcolor={dark}
          maxWidth="xl"
          aboutIntro={aboutIntro}
          aboutDetails={aboutDetails}
        />
        <Projects bgcolor={light} maxWidth="xl" projects={featuredProjects} />
        <Availability
          bgcolor={dark}
          maxWidth="xl"
          content={availability}
          cv={cv}
        />
        <Feedbacks bgcolor={light} maxWidth="xl" feedbacks={feedbacks} />
      </main>
      <Footer
        bgcolor={dark}
        maxWidth="xl"
        contact={contact}
        legalPages={legalPages}
      />
    </Layout>
  );
};

export default Homepage;
