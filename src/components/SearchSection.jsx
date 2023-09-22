import { SearchBarContainer } from "@/styles/styled";
import React, { useState } from "react";

const SearchSection = ({ setShowSearchBar, showSearchBar }) => {
  return (
    <SearchBarContainer showSearchBar={showSearchBar}>
      <div className="svgContainer">
        <img
          src={
            showSearchBar
              ? "https://cdns.iconmonstr.com/wp-content/releases/preview/2018/240/iconmonstr-x-mark-circle-thin.png"
              : "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
          }
          alt=""
          onClick={() => {
            setShowSearchBar((prev) => !prev);
          }}
        />
      </div>
    </SearchBarContainer>
  );
};

export default SearchSection;
