import React from "react";
import "./index.scss";

const Nav = props => (
  <nav className="container">
    <ul className="nav">
      {props.navItems.map(item => (
        <li className="nav-item" key={item}>
          <a className="nav-link active" href="https://google.com">
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Nav;
