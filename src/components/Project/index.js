import * as React from "react";
import Container from "@mui/material/Container";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const Project = ({ maxWidth, name, url, relatedStack, mainImage, no }) => {
  const orderC1 = () => {
    if (no % 2) {
      return { xs: 2, md: 2 };
    } else {
      return { xs: 2, md: 1 };
    }
  };

  const orderC2 = () => {
    if (no % 2) {
      return { xs: 1, md: 1 };
    } else {
      return { xs: 1, md: 2 };
    }
  };

  return (
    <Box py={{ xs: 5, md: 15 }}>
      <Container maxWidth={maxWidth}>
        <Grid container alignItems={"center"}>
          <Grid
            sx={12}
            md={5}
            order={orderC1}
            textAlign={{ xs: "left", md: no % 2 ? "right" : "left" }}
            justifyContent={{ md: !(no % 2) ? "flex-start" : "flex-end" }}
          >
            <Box width={{ xs: "100%", md: "65%" }} display="inline-block">
              <Typography variant="h4" component="p" fontWeight="bold" pb={2}>
                {name.toUpperCase()}
              </Typography>
              <Typography variant="caption" component="p">
                Stack:{" "}
                {relatedStack.length &&
                  relatedStack.map((item, i) => {
                    return i === relatedStack.length - 1 ? (
                      <span key={i}>{item.stackItem}</span>
                    ) : (
                      <span key={i}>{item.stackItem}, </span>
                    );
                  })}
              </Typography>
            </Box>
          </Grid>
          <Grid xs={12} md={7} order={orderC2} pb={{ xs: 2, md: 0 }}>
            <Link href={url} target="_blank">
              {mainImage && <GatsbyImage image={getImage(mainImage)} />}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Project;
