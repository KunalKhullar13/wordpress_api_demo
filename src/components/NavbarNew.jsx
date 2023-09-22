import { headerData } from "@/constants/constantData";
import {
  HeaderButtons,
  MainHeader,
  NavMenuCol,
  NavSubMenu,
} from "@/styles/styled";
import React from "react";
import SearchSection from "./SearchSection";

const NavbarNew = ({ postData, setShowSearchBar, showSearchBar }) => {
  return (
    <MainHeader>
      <img
        src="https://www.greyorange.com/wp-content/uploads/2022/09/greyorange-logo.png"
        alt="logo"
      />

      <div className="headerLinks">
        {headerData?.map((item) => {
          return (
            <a href={item?.link} className="anchor">
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
                        <NavMenuCol>
                          <h3 className="subMenuTitle">{subLink?.title}</h3>
                          <span className="seperator">....</span>
                          <div className="menuContainer">
                            {subLink?.data?.map((element) => {
                              return (
                                <a href={element?.link || "#"}>
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
        <HeaderButtons contact={true}>Contact Us</HeaderButtons>
        <HeaderButtons>Request a demo</HeaderButtons>
      </div>
    </MainHeader>
  );
};

export default NavbarNew;
