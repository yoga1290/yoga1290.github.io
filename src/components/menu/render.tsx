import React from "react";
import { NavLink } from 'react-router-dom'

import './style.scss'

export default () => (
    <div className="menu">



        <div className="col-12">
  <div className="col-lg-8 col-md-6 col-xs-12">
    <div  className="nav flex-column nav-pills"
          role="tablist"
          aria-orientation="vertical">

      <NavLink
        className="nav-link"
        activeClassName="active"
        to="/"
        exact={true}>👨🏻‍💻Story</NavLink>
        
      <NavLink
        className="nav-link"
        activeClassName="active"
        to="/hacks">⚙️Hacks</NavLink>

      <NavLink
        className="nav-link"
        activeClassName="active"
        to="/experiments">🔭Experiments</NavLink>

      <NavLink
        className="nav-link"
        activeClassName="active"
        to="/notes">📝Notes</NavLink>

      <NavLink
        className="nav-link"
        activeClassName="active"
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