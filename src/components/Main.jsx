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
      date=" 11/11/20" 
        title="summer vibes 2025"
        image={summerImg}
        alt="a woman wearing summer fashion"
        text="Cccc olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.olor sit amet, consectetur adipiscing elit. Suspendisse eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat justo..."
      />

      {/* blog post two */}
      <Article
      date=" 12/11/20" 
        title="Vintage in Vogue"
        image={winterImg}
        alt="a man in cozy winter clothes"
        text="Selfies sunt, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt
S nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet
rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas
aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id
architecto impedit consequatur r" />
    </main>
  );
}
