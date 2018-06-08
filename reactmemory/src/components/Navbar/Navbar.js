import React from "react";
import "./Navbar.css";

const Navbar = props => (
    <div>
        <ul className="navbar">
            <li>Clicky Game</li>
            <li
                className={props.message.indexOf('incorrectly') !== -1 ? 
                "desc-incorrect" : 
                    props.message.indexOf('correctly') !== -1 ?
                        "desc-correct" :
                        "desc-normal"}
            >
            {props.message}
            </li>
            <li>Score: <span style={{color: "yellow"}}>{props.score}</span> | Top Score: {props.topScore}</li>
        </ul>
    </div>
)
export default Navbar;