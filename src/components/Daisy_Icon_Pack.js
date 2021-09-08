import React from "react";
import DaisyIconPackSVG from '../img/Daisy_Icon_Pack_Preview.svg'
function DaisyIconPack() {
  return (
    <div class="col-sm-6 card-breakpoint">
      <div class="card card-style mb-3">
        <div class="row g-0">
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">Daisy Icon Pack</h5>
              <ul class="card-text">
                <li>Created icon pack using Adobe Illustrator</li>
                <li>Contains over 150+ icons</li>
                <li>Cloud based wallpapers</li>
                <li>Dynamic calendar icons</li>
                <li>Icon request tool</li>
                <li>Blueprint dashboard app by Jahir Fiquitiva</li>
              </ul>
              <div class="col-md-9 daisy_play_button">
              <a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=com.vishalt.daisy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' class="img-fluid" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <img
              src={DaisyIconPackSVG}
              class="img-fluid rounded-start"
              alt="..."
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaisyIconPack;
