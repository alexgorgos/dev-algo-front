import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const ScrollHandler = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    style: {
      backgroundColor: trigger ? "rgba(10, 25, 41, .9)" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
      padding: trigger ? "15px 0px" : "5px 0px",
      boxShadow: "none",
      backgroundImage: "none",
    },
  });
};

const MenuBar = () => {
  return (
    <ScrollHandler>
      <AppBar component="nav">
        <Container maxWidth="xl">
          <Toolbar>
            <Link variant="logo" color="#fff" underline="none" href="/">
              Alexandru Gorgos
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </ScrollHandler>
  );
};

export default MenuBar;
