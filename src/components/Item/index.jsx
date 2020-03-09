import React from "react";

export default function Item(props) {
  
    return (
      <div className="list-item">
        <span> Category: {props.category}</span>
        <span> Title: {props.title}</span>
      </div>
    );
}
