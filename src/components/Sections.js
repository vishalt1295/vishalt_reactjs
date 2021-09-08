import React from 'react';
import ReactDOM from 'react-dom';
import AboutMe from './About_Me';
import Projects from './Projects';
import Resume from './Resume';
import ContactForm from './ContactForm';
function Sections() {
  return (
      <>
    <AboutMe />
    <Projects />
    <Resume />
    {/*<ContactForm />*/}
    </>
  );
}

export default Sections;