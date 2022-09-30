import * as React from "react";
import rehypeReact from "rehype-react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: ({ children }) => {
      return (
        <Typography variant="h5" component="p" fontWeight="bold" pb={5}>
          {children}
        </Typography>
      );
    },
  },
}).Compiler;

const renderSecondAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: ({ children }) => {
      return (
        <Typography variant="body2" gutterBottom pb={5}>
          {children}
        </Typography>
      );
    },
    ul: List,
    li: ({ children }) => {
      return (
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <KeyboardArrowRightIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ variant: "subtitle2", component: "p" }}
            primary={children}
          />
        </ListItem>
      );
    },
  },
}).Compiler;

const About = ({ bgcolor, maxWidth, aboutIntro, aboutDetails }) => {
  console.log(renderAst(aboutIntro));
  return (
    <Box component="header" sx={{ bgcolor: bgcolor }} py={{ xs: 10, md: 20 }}>
      <Container maxWidth={maxWidth}>
        <Grid container columnSpacing={15}>
          <Grid xs={12} md={6}>
            {renderAst(aboutIntro)}
          </Grid>
          <Grid xs={12} md={6}>
            {renderSecondAst(aboutDetails)}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
