import React from "react";
//import { Link } from "react-router-dom";
import './components.css';

const ImageBlock = props =>
(

<div className="card" onClick={() => props.handleClick(props.id)}>
    <div className="img-container">

    <img alt={props.url} src={props.url} />
    </div>




</div>




);

export default ImageBlock;
