import React from "react";
import "./Skills.css";
import { Button } from "@material-ui/core";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <div className="skills__list">
        <Button variant="outlined">Web Development </Button>
        <Button variant="outlined">React </Button>
        <Button variant="outlined">Firebase </Button>
        <Button variant="outlined">Project Management </Button>
        <Button variant="outlined">Artificial Intelligence </Button>
        <Button variant="outlined">Data Science </Button>
        <Button variant="outlined">Cybersecurity</Button>
        <Button variant="outlined">Business Development </Button>
        <Button variant="outlined">Marketing </Button>
        <Button variant="outlined">Digital Business Model </Button>
        <Button variant="outlined">Social Science </Button>

        <Button variant="outlined">Python</Button>
        <Button variant="outlined">Javascript </Button>
        <Button variant="outlined">Tensorflow </Button>
        <Button variant="outlined">Sci-kit learn </Button>
        <Button variant="outlined">Data Analytics </Button>
        <Button variant="outlined">Strategic Planning </Button>
      </div>
    </div>
  );
}

export default Skills;
