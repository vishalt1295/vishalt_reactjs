import React from "react";
import Sizzy_SVG from "../img/Sizzy_Icon_Pack_Preview.svg";
function SizzyIconPack() {
  return (
    <div class="col-sm-6">
      <div class="card card-style mb-3">
        <div class="row g-0">
          <div class="col-md-5">
            <div class="card-body">
              <h5 class="card-title">Sizzy Icon Pack</h5>
              <ul class="card-text">
                <li>Created icon pack using Adobe Illustrator</li>
                <li>Contains over 400+ icons</li>
                <li>10+ wallpapers</li>
                <li>Dynamic calendar icons</li>
                <li>Blueprint dashboard app by Jahir Fiquitiva</li>
              </ul>
              <div class="col-md-9 play_button">
              <a target="_blank" rel="noreferrer"  href='https://play.google.com/store/apps/details?id=com.vishalt.sizzy&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' class="img-fluid" src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
              </div>
            </div>
          </div>
          <div class="col-md-7">
            <img
              src={Sizzy_SVG}
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

export default SizzyIconPack;
