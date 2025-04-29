// this is the main area with blog posts
import React from "react";
import Article from "./Article";

// import your images (make sure they're inside public or src folder)
import summerImg from "../assets/summer.jpg";
import winterImg from "../assets/winter.jpg";

export default function Main() {
  return (
    <main>
      {/* blog post one */}
      <Article
        title="summer vibes 2025"
        image={summerImg}
        alt="a woman wearing summer fashion"
        text="Cccc olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat justo..."
      />

      {/* blog post two */}
      <Article
        title="cozy winter layers"
        image={winterImg}
        alt="a man in cozy winter clothes"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget..."
      />
    </main>
  );
}
