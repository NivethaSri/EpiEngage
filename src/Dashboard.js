import React from "react";
import Banner from "./Images/EPiLogo.png";
import Engage from "./Images/ENGAGE.png";

import EPiGroups from "./Groups";
import EpiMemberDetail from "./MemberDetails";
import EPiSubGroups from "./SubGroups";

import "./App.css";
function bannerUpdates() {
  return (
    <div className="allGroupContainer">
      <div className="BannerContainer">
        <div className="ProfileContainer">
          <img className="EpiLogo" src={Banner} alt="" />
          <img className="EpiLogoText" src={Engage} alt="" />
        </div>
      </div>

      <div className="AssessmentCOntainer">
        <EPiGroups />
        <EpiMemberDetail />
        <EPiSubGroups />
      </div>
    </div>
  );
}
export default bannerUpdates;
