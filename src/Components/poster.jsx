import React from "react";

export default function Poster(props) {
  return (
    <div
      className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300 "
      style={{ maxWidth: "200px" }}
      onClick={() =>
        props.onClick(
          props.image_url,
          props.title,
          props.description,
          props.keywords
        )
      }
    >
      <img
        className="hover:opacity-75"
        src={props.image_url}
        style={{ maxWidth: "400px", height: "200px" }}
        alt="movie"
        height="100px"
        width="100px"
      ></img>
      {/* <h2>{props.title}</h2> */}
    </div>
  );
}