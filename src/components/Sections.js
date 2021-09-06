import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './About_Me';
import Projects from './Projects';
import Resume from './Resume';
function Sections() {
  return (
      <>
    <AboutMe />
    <Projects />
    <Resume />
    </>
  );
}

export default Sections;