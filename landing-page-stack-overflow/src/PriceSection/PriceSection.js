import React from "react";
import "./PriceSection.css";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import StarIcon from "@material-ui/icons/Star";
import AddIcon from "@material-ui/icons/Add";
import TodayIcon from "@material-ui/icons/Today";
import SecurityIcon from "@material-ui/icons/Security";
import ArchiveIcon from "@material-ui/icons/Archive";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import CodeIcon from "@material-ui/icons/Code";
import PersonIcon from "@material-ui/icons/Person";
import MouseIcon from "@material-ui/icons/Mouse";

function PriceSection() {
  return (
    <div className="priceSection">
      <div className="priceSection__info">
        <h1>Unlock siloed knowledge with Stack Overflow for Teams</h1>

        <p className="priceSection__desc">
          Wikis, chat messages, or formal documentation for knowledge management
          aren’t effective. Our question and answer format is a proven approach
          for accessing the right information in less time.
        </p>
        <button>Learn more</button>
      </div>
      <div className="priceSectionCards">
        <button className="priceSectionCard__buttonTopMiddle0">
          Most used <MouseIcon />
        </button>
        <div className="priceSectionCard">
          <button className="priceSectionCard__buttonTopLeft">Business</button>
          <p>Private knowledge base with SSO and premium features</p>
          <h1>$12 USD</h1>
          <h6>per teammate / month</h6>
          <hr />
          <div className="priceSectionCard__lists">
            <div className="priceSectionCard__list">
              <VpnKeyIcon />
              <p>Single sign-on (SSO) with SAML</p>
            </div>
            <div className="priceSectionCard__list">
              <EqualizerIcon />
              <p>Reporting and analytics</p>
            </div>
            <div className="priceSectionCard__list">
              <LocalHospitalIcon />
              <p>Priority customer support</p>
            </div>
            <div className="priceSectionCard__list">
              <StarIcon />
              <p>99.5% uptime</p>
            </div>
            <div className="priceSectionCard__list priceSectionCard__list--gray">
              <AddIcon />
              <p>All the features of Basic tier</p>
            </div>
          </div>
          <button className="priceSectionCard__buttonBottomLeft">
            Get started
          </button>
        </div>
        <div className="priceSectionCard">
          <button className="priceSectionCard__buttonTopMiddle">Basic</button>
          <p>Private knowledge base for teams</p>
          <h1>$6 USD</h1>
          <h6>per teammate / month</h6>
          <hr />
          <div className="priceSectionCard__lists">
            <div className="priceSectionCard__list">
              <TodayIcon />
              <p>Free 30 day trial</p>
            </div>
            <div className="priceSectionCard__list">
              <SecurityIcon />
              <p>Your own private space hosted on stackoverflow.com</p>
            </div>
            <div className="priceSectionCard__list">
              <ArchiveIcon />
              <p>Fully searchable archive</p>
            </div>
          </div>
          <button className="priceSectionCard__buttonBottomMiddle">
            Get started for free
          </button>
        </div>
        <div className="priceSectionCard">
          <button className="priceSectionCard__buttonTopRight">
            Enterprise
          </button>
          <p>
            Standalone knowledge base with enhanced security and flexible
            hosting
          </p>
          <h1>Custom pricing</h1>
          <h6>Let’s talk about what you need</h6>
          <hr />
          <div className="priceSectionCard__lists">
            <div className="priceSectionCard__list">
              <VpnKeyIcon />
              <p>Single sign-on (SSO) with SAML</p>
            </div>
            <div className="priceSectionCard__list">
              <FilterHdrIcon />
              <p>
                Host on your cloud or servers – or our private managed cloud
              </p>
            </div>
            <div className="priceSectionCard__list">
              <CodeIcon />
              <p>Robust read and write API</p>
            </div>
            <div className="priceSectionCard__list">
              <PersonIcon />
              <p>
                Your own customer success and community building representative
              </p>
            </div>
            <div className="priceSectionCard__list">
              <StarIcon />
              <p>99.5% uptime SLA and priority support</p>
            </div>
          </div>
          <button className="priceSectionCard__buttonBottomRight">
            Request a demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default PriceSection;
