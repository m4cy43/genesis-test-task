import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link className="react-link" to="/">
      <header>Courses</header>
    </Link>
  );
}

export default Header;
