// this is the main app layout
import React from "react";
import "./index.css";

// import components
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="App">
      {/* top of the page */}
      <Header />
      {/* blog posts */}
      <Main />
      {/* bottom of the page */}
      <Footer />
    </div>
  );
}

export default App;
