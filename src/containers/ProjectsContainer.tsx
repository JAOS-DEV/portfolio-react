import React from "react";
import Projects from "../components/Projects";
import Project from "../components/Project";
import { PROJECTDATA } from "../PROJECTDATA";

export default function ProjectsContainer() {
  return (
    <Projects>
      {PROJECTDATA.map((project) => {
        return (
          <Project key={project.id}>
            <Project.Pane border={true} backgroundColor="#EDECEC">
              <Project.Image src={project.image} alt="Alt text" />
            </Project.Pane>
            <Project.Pane backgroundColor="#C4C4C4">
              <Project.Description>
                <Project.Title>{project.title}</Project.Title>
                <Project.Text>{project.description}</Project.Text>
                <Project.TechTabContainer>
                  {project.tech.map((tech, i) => {
                    return (
                      <Project.TechTab key={tech.id}>
                        <Project.TechTabImage src={tech.image} alt="Alt text" />
                        <Project.TechTabText>{tech.techName}</Project.TechTabText>
                      </Project.TechTab>
                    );
                  })}
                </Project.TechTabContainer>
                <Project.ButtonContainer>
                  <Project.Button target="_blank" href={project.siteBtn}>
                    View Site
                  </Project.Button>
                  <Project.Button target="_blank" href={project.codeBtn}>
                    View Code
                  </Project.Button>
                </Project.ButtonContainer>
              </Project.Description>
            </Project.Pane>
          </Project>
        );
      })}
    </Projects>
  );
}
