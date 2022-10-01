import * as React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import rehypeReact from "rehype-react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Footer from "../components/Footer";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: ({ children }) => {
      return (
        <Typography variant="subtitle2" component="p" pb={3}>
          {children}
        </Typography>
      );
    },
    ul: List,
    li: ({ children }) => {
      return (
        <ListItem alignItems="flex-start">
          <Typography variant="subtitle2" component="p" pb={1}>
            - {children}
          </Typography>
        </ListItem>
      );
    },
  },
}).Compiler;

const Legal = ({ pageContext }) => {
  const { pageTitle, pageContent, contact, legalPages } = pageContext;

  console.log(pageContext);

  const light = "rgb(0, 30, 60)";
  const dark = "rgb(10, 25, 41)";

  return (
    <Layout>
      <header>
        <Box bgcolor={light} py={10}>
          <Container maxWidth="xl">
            <Typography
              variant="h4"
              component="h1"
              fontFamily={"Source Code Pro, monospace"}
              fontWeight="bold"
            >
              {pageTitle}
            </Typography>
          </Container>
        </Box>
      </header>
      <main>
        <Box bgcolor={light}>
          <Container
            maxWidth="xl"
            sx={{ columnCount: { xs: 1, md: 2 }, columnGap: "40px" }}
          >
            {renderAst(pageContent)}
          </Container>
        </Box>
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

export default Legal;
