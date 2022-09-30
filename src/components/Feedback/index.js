import * as React from "react";
import rehypeReact from "rehype-react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: ({ children }) => {
      return (
        <Typography variant="body1" component="p" textAlign={"center"} pb={10}>
          ``
          {children}
          ``
        </Typography>
      );
    },
  },
}).Compiler;

const Feedback = ({ maxWidth, name, position, content, className }) => {
  return (
    <Box className={className}>
      <Container maxWidth={maxWidth}>
        {renderAst(content.childMarkdownRemark.htmlAst)}
        <Box textAlign="right">
          <Typography variant="caption" p={0}>
            {name}
            <br />
            <Typography
              variant="overline"
              fontWeight={"bold"}
              component={"span"}
            >
              {position}
            </Typography>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Feedback;
