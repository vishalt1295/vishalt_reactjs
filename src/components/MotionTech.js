import React from "react";
import MotionTech_Alt from "../img/MotionTech_Alt.png";
import MotionTech_SVG from "../img/MotionTech_SVG.svg";
function MotionTech() {
  return (
    <div class="col-sm-6">
      <div class="card card-style mb-3">
        <div class="row g-0">
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">MotionTech</h5>
              <ul class="card-text">
                <li>Used Bootstrap 4 to develop user friendly website</li>
                <li>Compare Android and iOS phone features</li>
                <li>Multiple pages with two tier navigation</li>
              </ul>
              <a href="https://vishalt1295.github.io/motiontech/" type="button" class="btn btn-primary visit-button" target="_blank"
               rel="noreferrer">Visit <i class="bi bi-arrow-right-short"></i></a>
            </div>
          </div>
          <div class="col-md-7">
            <img src={MotionTech_SVG} class="img-fluid rounded-start" alt="..." loading="lazy" />
          </div> 
        </div>
        
      </div>
    </div>
  );
}

export default MotionTech;
