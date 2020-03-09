import React, { useContext } from "react";
import { AppContext } from "../appStore";
import "./style.css";
import Item from "../Item";

export function ListItems() {
  const { media, filter } = useContext(AppContext);
  let ListItems = [];

  if (filter) {
    ListItems = media.filter(x => x.category === filter);
  } else ListItems = media;

  return (
    <div className="list-container">
      {ListItems.map((item, index) => (
       <Item key={`${item.id}-${index}`} {...item} /> 
      ))}
    </div>
  );
}
