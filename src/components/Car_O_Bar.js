import React from "react";
import Car_O_Bar_Transparent from '../img/Car-O-Bar_Transparent.png'
function Car_O_Bar() {
  return (
    <div class="col-sm-6 card-breakpoint">
    <div class="card card-style mb-3">
      <div class="row g-0">
        <div class="col-md-5">
          <div class="card-body">
            <h5 class="card-title">Car-O-Bar</h5>
            <ul class="card-text">
              <li>Used Figma to design UI</li>
              <li></li>
            </ul>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
        <div class="col-md-7">
        <img src={Car_O_Bar_Transparent} class="img-fluid rounded-start" alt="..." />
        </div>
      </div>
    </div>
  </div>
  );
}

export default Car_O_Bar;
