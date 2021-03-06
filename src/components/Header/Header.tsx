import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../contexts/AppContext.js';
import "./Header.css";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Home from "../Home/Home";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderButton from './HeaderButton/HeaderButton';

const Header = () => {

  const { state } = useContext(AppContext);

  const [homeColor, setHomeColor] = useState("#00A8CC");
  const [worksColor, setWorksColor] = useState("#ED9542");
  const [contactColor, setContactColor] = useState("#E64343");
  const [logoColor, setLogoColor] = useState("#00A8CC");


  useEffect(() => {
    if (state[0] === true) {
      setHomeColor("#00A8CC");
      setWorksColor("#5A5A5A");
      setContactColor("#5A5A5A");

      setLogoColor(homeColor);
    }
    else if (state[1] === true) {
      setHomeColor("#5A5A5A");
      setWorksColor("#ED9542");
      setContactColor("#5A5A5A");

      setLogoColor(worksColor);
    }
    else {
      setHomeColor("#5A5A5A");
      setWorksColor("#5A5A5A");
      setContactColor("#E64343");

      setLogoColor(contactColor);
    }
    // eslint-disable-next-line
  }, [state])

  return (
    <Router>
      <header style={{ borderBottomColor: logoColor }}>
        <div className="header-left">
          <HeaderLogo logoColor={logoColor} />
        </div>

        <div className="header-right">

          <Link exact="true" to="/" style={{ textDecoration: 'none' }}>
            <HeaderButton
              contentTextColor={homeColor}
              contentText={"Home"}
              fontInfo={
                {
                  info: "fas",
                  fontName: "home"
                }
              }
            />
          </Link>

          <Link exact="true" to="/works" style={{ textDecoration: 'none' }}>
            <HeaderButton
              contentTextColor={worksColor}
              contentText={"Works"}
              fontInfo={
                {
                  info: "fas",
                  fontName: "laptop-code"
                }
              }
            />
          </Link>
          {/* 
          <Link exact="true" to="/contact" style={{ textDecoration: 'none' }}>
            <HeaderButton
              contentTextColor={contactColor}
              contentText={"Contact"}
              fontInfo={
                {
                  info: "fab",
                  fontName: "Contact"
                }
              }
            />
          </Link>
          */}
        </div>

      </header>

      <Switch>
        <Route path="/works">
          <Works />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>

    </Router>

  );
}

export default Header;
