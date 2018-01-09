import React from "react";
//import { Link } from "react-router-dom";


const Navbar = props =>
(
<div>
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a className="navbar-brand" href="/">
          Click Memory Game | {props.message} | Score: {props.score} | Top Score: {props.topScore}
        </a>


      </div>
    </div>
  </nav>
</div>
);

export default Navbar;
