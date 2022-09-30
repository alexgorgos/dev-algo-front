import * as React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import rehypeReact from "rehype-react";
import Footer from "../components/Footer";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: ({ children }) => {
      return (
        <Typography variant="body1" component="p" textAlign={"center"} pb={10}>
          {children}
        </Typography>
      );
    },
  },
}).Compiler;

const Legal = ({ pageContext }) => {
  const { pageTitle, pageContent, contact } = pageContext;

  console.log(pageContext);

  const light = "rgb(0, 30, 60)";
  const dark = "rgb(10, 25, 41)";

  return (
    <Layout>
      <header>
        <Box
          bgcolor={light}
          sx={{ columnCount: { xs: 1, md: 2 }, columnGap: "40px" }}
        >
          <Container maxWidth="xl">{pageTitle}</Container>
        </Box>
      </header>
      <main>
        <Box
          bgcolor={light}
          sx={{ columnCount: { xs: 1, md: 2 }, columnGap: "40px" }}
        >
          <Container maxWidth="xl">{renderAst(pageContent)}</Container>
        </Box>
      </main>
      <Footer bgcolor={dark} maxWidth="xl" contact={contact} />
    </Layout>
  );
};

export default Legal;
