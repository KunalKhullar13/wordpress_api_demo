import { StickyTop, TopStrip } from "@/styles/styled";
import React from "react";
import NavbarNew from "./NavbarNew";

const StickyHeader = ({ postData, showSearchBar, setShowSearchBar }) => {
  return (
    <StickyTop>
      <TopStrip>
        <p>
          Gartner® Research Predicts 2023: Supply Chain Technology |{" "}
          <span className="readMore">Read the report</span>{" "}
        </p>
      </TopStrip>
      <NavbarNew
        showSearchBar={showSearchBar}
        setShowSearchBar={setShowSearchBar}
        postData={postData}
      />
    </StickyTop>
  );
};

export default StickyHeader;
