// this is the header component
import React from "react";

export default function Header() {
  return (
    <header>
      {/* site title */}
      <h1>Sartre's List</h1>
      {/* site subtitle */}
      <h4>Better-Dressed People</h4>

      {/* navigation bar */}
      <nav aria-label="Main Navigation" role="navigation">
        <ul className="main-nav">
          {/* nav items */}
          <li><a href="#">women's</a></li>
          <li><a href="#">men's</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>

        
        </ul>
      </nav>
    </header>
  );
}
