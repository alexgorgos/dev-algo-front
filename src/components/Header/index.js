import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Header = ({ bgcolor, maxWidth, content }) => {
  return (
    <Box component="header" sx={{ bgcolor: bgcolor }} py={{ xs: 10, md: 20 }}>
      <Container maxWidth={maxWidth}>
        <Typography
          variant="h4"
          component="h1"
          fontFamily={"Source Code Pro, monospace"}
          fontWeight="bold"
          textAlign={{ xs: "left", md: "center" }}
        >
          {content}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
