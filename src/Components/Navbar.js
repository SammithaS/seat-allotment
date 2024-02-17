import "./NavbarStyles.css";
import React, { Component } from "react";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Nitte</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href="/">
                  <i className="fa-solid fa-right-from-bracket"></i>
                  {item.title}
                </a>
              </li>
            );
          })}
          <button>Logout</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
