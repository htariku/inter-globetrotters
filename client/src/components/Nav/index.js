import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul class="nabar" className="flex-row">
          <li class="nabar" className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li class="nabar" className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul class="navbar" className="flex-row">
          <li class="navbar" className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
          <li class="navbar" className="mx-1">
            <Link to="/quiz">
              Quiz
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1  >
        <Link to="/">
          <span role="img" aria-label="shopping bag"></span>
        </Link>
      </h1>v

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
