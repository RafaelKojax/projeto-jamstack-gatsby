import React from "react";
import { Link } from "gatsby";

export const Header = () => (
  <header className="header">
    <div className="container header-nav">
      <Link to="/" style={{ color: "#38bdf8", fontWeight: 700, textDecoration: "none", fontSize: "1.2rem" }}>
        DevJamstack
      </Link>
      <nav className="header-links">
        <Link to="/">Início</Link>
        <Link to="/contato">Contato</Link>
      </nav>
    </div>
  </header>
);