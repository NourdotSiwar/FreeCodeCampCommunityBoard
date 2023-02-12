import React from "react";

const Description = (props) => {
      return (
            <div>
            <h5 className="Description">{props.desc}</h5>
            <a  href={props.link} target="_blank" rel="noreferrer">
            <button className="videoBtn">VIEW VIDEO</button>
            </a>
            </div>
      )
}

export default Description;