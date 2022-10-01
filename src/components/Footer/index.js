import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Footer = ({ bgcolor, maxWidth, contact, legalPages }) => {
  console.log(legalPages);
  return (
    <Box component="footer" sx={{ bgcolor: bgcolor }} py={5}>
      <Container maxWidth={maxWidth}>
        <Grid container alignItems="center">
          <Grid item xs={5} md={8}>
            {legalPages && (
              <Typography variant="contact" component="nav">
                <Link
                  href="/"
                  mr={3}
                  p={1}
                  color="#fff"
                  display={{ xs: "block", md: "inline-block" }}
                  aria-label="Go to Homepage"
                >
                  {"Home"}
                </Link>
                {legalPages.map((page, i) => {
                  return (
                    <Link
                      key={i}
                      href={page.slug}
                      mr={3}
                      py={1}
                      color="#fff"
                      display={{ xs: "block", md: "inline-block" }}
                      aria-label={`Go to ${page.title} page`}
                    >
                      {page.title}
                    </Link>
                  );
                })}
              </Typography>
            )}
          </Grid>
          <Grid item xs={7} md={4} textAlign="right">
            <Typography variant="contact">{contact.emailAddress}</Typography>
            <br />
            <Typography variant="contact">{contact.phoneNumber}</Typography>
            <br />
            <Typography variant="contact">{contact.city}</Typography>
            <br />
            <Stack
              direction="row"
              spacing={2}
              alignItems="flex-end"
              justifyContent="flex-end"
            >
              <Link
                href={contact.whatsapp}
                target="_blank"
                color="#fff"
                aria-label="Go to Whatsapp"
              >
                <WhatsAppIcon fontSize="small" />
              </Link>
              <Link
                href={contact.linkedIn}
                target="_blank"
                color="#fff"
                aria-label="Go to LinkedIn"
              >
                <LinkedInIcon fontSize="small" />
              </Link>
              <Link
                href={contact.gitHub}
                target="_blank"
                color="#fff"
                aria-label="Go to GitHub"
              >
                <GitHubIcon fontSize="small" />
              </Link>
              <Link
                href={contact.twitter}
                target="_blank"
                color="#fff"
                aria-label="Go to Twitter"
              >
                <TwitterIcon fontSize="small" />
              </Link>
            </Stack>
            <Typography variant="contact">
              Alexandru Gorgos &copy; 2022
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
