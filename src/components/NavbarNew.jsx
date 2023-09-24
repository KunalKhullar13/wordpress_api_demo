import { headerData } from "@/constants/constantData";
import {
  HamBurger,
  HeaderButtons,
  MainHeader,
  MobileNavContainer,
  NavMenuCol,
  NavSubMenu,
} from "@/styles/styled";
import React, { useEffect, useRef, useState } from "react";
import SearchSection from "./SearchSection";
import MobileNav from "./MobileNav";

const NavbarNew = ({ postData, setShowSearchBar, showSearchBar }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  useEffect(() => {
    if (showMobileNav) {
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  }, [showMobileNav]);
  return (
    <MainHeader>
      <img
        src="https://www.greyorange.com/wp-content/uploads/2022/09/greyorange-logo.png"
        alt="logo"
        className="logoImg"
      />

      <div className="headerLinks">
        {headerData?.map((item, index) => {
          return (
            <a key={"link" + index} href={item?.link} className="anchor">
              {item?.heading}{" "}
              <img
                src="https://images.myloapp.in/NestJsUploads/1683006324692-1668773844547-arrowforward_sWR7ZFijx.svg"
                alt=""
              ></img>
              {item?.subMenu?.length > 0 ? (
                <NavSubMenu
                  className={item?.subMenu?.[0]?.title ? "gridbox" : ""}
                >
                  {item?.subMenu?.map((subLink) => {
                    if (subLink?.title) {
                      return (
                        <NavMenuCol key={"innerLink" + index}>
                          <h3 className="subMenuTitle">{subLink?.title}</h3>
                          <span className="seperator">....</span>
                          <div className="menuContainer">
                            {subLink?.data?.map((element) => {
                              return (
                                <a
                                  key={element?.heading}
                                  href={element?.link || "#"}
                                >
                                  {element?.heading}
                                </a>
                              );
                            })}
                          </div>
                        </NavMenuCol>
                      );
                    } else return <p>{subLink?.heading}</p>;
                  })}
                </NavSubMenu>
              ) : null}
            </a>
          );
        })}
      </div>

      <div className="buttonContainer">
        <SearchSection
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
        <HamBurger>
          <img
            src="https://images.myloapp.in/NestJsUploads/1682585270679-hamburger.svg"
            alt=""
            onClick={() => {
              setShowMobileNav((prev) => !prev);
            }}
          />
        </HamBurger>
        <HeaderButtons contact={true}>Contact Us</HeaderButtons>
        <HeaderButtons>Request a demo</HeaderButtons>
      </div>
      {showMobileNav && <MobileNav />}
    </MainHeader>
  );
};

export default NavbarNew;
