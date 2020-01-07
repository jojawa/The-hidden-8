import React from "react";
import "./Searchbar.scss";

const Searchbar = props => {
  return (
    <div className="searchBar">
      <input onChange={props.onSearch} type="text" placeholder="Search" />
    </div>
  );
};

export default Searchbar;
