import * as React from "react";
import rehypeReact from "rehype-react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: ({ children }) => {
      return (
        <Typography variant="h5" component="p" pt={5} textAlign="center">
          {children}
        </Typography>
      );
    },
  },
}).Compiler;

const Availability = ({ maxWidth, bgcolor, content, cv }) => {
  return (
    <Box sx={{ bgcolor: bgcolor }} py={{ xs: 10, md: 20 }}>
      <Container maxWidth={maxWidth}>
        <Typography
          variant="h4"
          component="h3"
          fontWeight="bold"
          textAlign="center"
        >
          AVAILABILITY
        </Typography>
        {renderAst(content)}

        {cv && (
          <Box textAlign="center" pt={5}>
            <Button
              endIcon={<InsertDriveFileIcon fontSize="small" />}
              href="/CV.pdf"
              target="_blank"
              variant="contained"
              disableElevation
              style={{
                display: "inline-block",
                borderRadius: 0,
              }}
            >
              Resume
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Availability;
