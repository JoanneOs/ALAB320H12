// this is a single blog article component
import React from "react";

export default function Article({ title, image, alt, text }) {
  return (
    <article>
      {/* blog post title */}
      <h2>{title}</h2>
      {/* blog image */}
      <img src={image} alt={alt} />
      {/* blog content */}
      <p>{text}</p>
      {/* read more link */}
      <a className="continue" href="#">continues...</a>
    </article>
  );
}
