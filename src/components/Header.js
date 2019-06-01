import React, {Component} from "react";
import {Link} from "react-router-dom";
import GoogleAuth from './GoogleAuth';


class Header extends Component {


  render() {
    return (
        <nav className="navbar " role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item" href="_">
              {/*<img alt="" src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>*/}
                <img alt="" src="https://i.ibb.co/Fqj9Fj2/paper.png" width="112" height="28"/>
            </a>

            <a role="button" href="_" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu is-active">
            <div className="navbar-start">


              <Link to="/" className="subtitle has-text-weight-bold navbar-item">
                <strong>Home</strong>
              </Link>





            </div>
            <GoogleAuth/>
          </div>
        </nav>

    );
  }
}

export default Header;
