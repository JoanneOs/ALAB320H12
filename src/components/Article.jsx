// this is a single blog article component
import React from "react";

export default function Article({date, title, image, alt, text }) {
  return (
    <article>

<p className="article-date">{date}</p>
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
