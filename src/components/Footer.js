import React from "react";


export default function Header() {
    return (

        <header>
        {/* site title */}
        <h1>Fashion Blog</h1>
        {/* site subtitle */}
        <h2>latest trends & style tips</h2>
  
        {/* navigation bar */}
        <nav aria-label="Main Navigation" role="navigation">
          <ul className="main-nav">
            {/* nav items */}
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
      </header>

    );
}