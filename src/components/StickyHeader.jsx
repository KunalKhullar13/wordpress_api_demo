import { StickyTop, TopStrip } from "@/styles/styled";
import React, { useEffect, useRef, useState } from "react";
import NavbarNew from "./NavbarNew";

const StickyHeader = ({ postData, showSearchBar, setShowSearchBar }) => {
  const oldScrollValue = useRef(0);
  const throttleTimeout = useRef(false);
  const [showHeader, setShowHeader] = useState("0px");
  const isDesktopUser = () => {
    return typeof window !== "undefined" && window.innerWidth >= 720;
  };
  useEffect(() => {
    oldScrollValue.current = window.pageYOffset;
    function scrollUpOrDown() {
      if (!throttleTimeout.current) {
        setTimeout(() => {
          let newValue = window.pageYOffset;
          if (oldScrollValue.current < newValue) {
            //for Desktop screen
            if (newValue > 56) {
              setShowHeader(isDesktopUser() ? "-56px" : "-80px"); // for Mweb
            }

            //on scroll down
          } else if (oldScrollValue.current > newValue) {
            // for Desktop screen
            setShowHeader("0px"); // for Mweb
            // on scroll up
          }
          oldScrollValue.current = newValue;
          throttleTimeout.current = false;
        }, 100);
      }
      throttleTimeout.current = true;
    }

    window.addEventListener("scroll", scrollUpOrDown);
  });

  return (
    <StickyTop showHeader={showHeader}>
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
