import React from "react";
import { Link } from "gatsby"

const Navigation = () => (
    <nav className="c-main-nav">
        <Link to="/" activeClassName="is-active">Home</Link>
        <Link to="/contact" activeClassName="is-active">Contact</Link>
        <Link to="/resume" activeClassName="is-active">Resume</Link>
    </nav>
)

export default Navigation