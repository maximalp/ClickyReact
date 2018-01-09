import React from "react";
import './components.css';
//import { Link } from "react-router-dom";


const Navbar = props =>
(
<div>
  <nav className="navbar navbar-default navbar-fixed-top align-content-center">

    <div className="container-fluid">
      <div className="navbar-header align-content-center">
        <span class="align-content-center">
          <span class="ml-auto navbar-text"> {props.message} </span>
          <span class="ml-auto navbar-text">Score: {props.score} </span>
          <span class="ml-auto navbar-text">Top Score: {props.topScore} </span>

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

      </span>



      </div>
    </div>
  </nav>
</div>
);

export default Navbar;
