import React, { useEffect, useState } from "react";
import "./styles.scss";

interface Props {}


export const Header = (props: Props) => {
  const [route, setRoute] = useState("business")

  useEffect(() => {
    const path = window.location.pathname
    const splited = path.split('/').filter( x => x);
    setRoute(splited[0])
  }, [])
  return (
    <nav className="navbar-mini">
      <div className="container">
        <div className="navbar-nav-mini">
          <li className="nav-mini-item">
            <a className={`nav-mini-link ${route==='business'? "active": ""}`} href="#">
              Business
            </a>
          </li>
          <li className="nav-mini-item">
            <a className="nav-mini-link" href="#">
              Private Banking
            </a>
          </li>
          <li className="nav-mini-item">
            <a className="nav-mini-link" href="#">
              Personal
            </a>
          </li>
          <li className="nav-mini-item">
            <a className={`nav-mini-link ${route==='about_us'? "active": ""}`} href="#">
              About Us
            </a>
          </li>
          <li className="nav-mini-item">
            <a className="nav-mini-link" href="#">
              Help & FAQs
            </a>
          </li>
        </div>

        <div className="navbar-nav-mini-action">
          <a href="#">
            <i className="icon icon-search"></i>
          </a>
          <a href="#" className="btn btn-sm btn-primary">
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
};
