import * as React from "react";
import Box from "@mui/material/Box";
import Project from "../Project";

const Projects = ({ bgcolor, maxWidth, projects }) => {
  return (
    <Box sx={{ bgcolor: bgcolor }} py={{ xs: 10, md: 20 }}>
      {projects.length &&
        projects.map((project, i) => {
          return (
            <Project
              key={i}
              no={i}
              maxWidth={maxWidth}
              name={project.name}
              url={project.url}
              mainImage={project.mainImage}
              relatedStack={project.relatedStack}
            />
          );
        })}
    </Box>
  );
};

export default Projects;
