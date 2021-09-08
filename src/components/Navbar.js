import React from "react";
import ReactDOM from "react-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Portfolio</a>
        <button
          class="navbar-toggler" type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#about_me">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#projects">
                Projects
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link active" href="#resume">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
