import React from "react";
import { NavLink } from 'react-router-dom'

import './style.scss'

const navLinkClassName = ({ isActive, isPending, isTransitioning }: any) => (
                              [
                                "nav-link",
                                isPending ? "pending" : "",
                                isActive ? "active" : "",
                                isTransitioning ? "transitioning" : "",
                              ].join(" "));

export default () => (
    <div className="menu">



        <div className="col-12">
  <div className="col-lg-8 col-md-6 col-xs-12">
    <div  className="nav flex-column nav-pills"
          role="tablist"
          aria-orientation="vertical">

      {/* <NavLink
        className={navLinkClassName}
        to="/">👨🏻‍💻Story</NavLink> */}
        
      <NavLink
        className={navLinkClassName}
        to="/hacks">⚙️Hacks</NavLink>

      <NavLink
        className={navLinkClassName}
        to="/">🔭Experiments</NavLink>

      <NavLink
        className={navLinkClassName}
        to="/notes">📝Notes</NavLink>

      <NavLink
        className={navLinkClassName}
        to="/connect">🧭Connect</NavLink>

    </div>
  </div>

  {/* <div className="col-9">
    <div className="tab-content" id="v-pills-tabContent">
      <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
      <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
      <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
      <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
    </div>
  </div> */}
</div>
    </div>
);