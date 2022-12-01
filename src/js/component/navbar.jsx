import React from "react";

const Navbar = () => {
    return (
    <nav className="paddingLeft navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Start Bootstrap</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="paddingRight collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-auto">
      <a className="nav-item nav-link active ml-auto" href="#">Home <span class="sr-only">(current)</span></a>
      <a className="nav-item nav-link" href="#">About</a>
      <a className="nav-item nav-link" href="#">Service</a>
      <a className="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
</nav>
    )
};
export default Navbar;