import { headerData } from "@/constants/constantData";
import { MobileNavContainer } from "@/styles/styled";
import React, { useState } from "react";

const MobileNav = ({ showMobileNav }) => {
  const [triggerDropdown, setTriggerDropdown] = useState(false);
  const [innerDropDown, setInnerDropDown] = useState(false);
  return (
    <MobileNavContainer showMobileNav={showMobileNav}>
      {headerData?.map((item, index) => {
        return (
          <>
            <p key={"mobileNav" + index} className="navLinkMain">
              <a
                className={
                  triggerDropdown == index + 1 ? " text-orange-500" : ""
                }
                href={item?.link}
              >
                {item?.heading}
              </a>
              <div className="arrowImg">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0onXHA0bQtWFaJ__UddOMhmHpmJMDNB6wtNeovFYrjo1sq9P3HNCrMcjZVZDXuRL4WVw&usqp=CAU"
                  alt=""
                  className={
                    triggerDropdown === index + 1 ? " rotate-0" : "rotate-180"
                  }
                  onClick={(e) => {
                    e.stopPropagation();
                    if (triggerDropdown == index + 1) setTriggerDropdown(false);
                    else setTriggerDropdown(index + 1);
                  }}
                />
              </div>
            </p>
            <div
              className={
                triggerDropdown === index + 1 ? "block innerMenu" : "hidden"
              }
            >
              {item?.subMenu?.[0].title
                ? item?.subMenu?.map((innerItems, innerIndex) => {
                    return (
                      <>
                        <p
                          key={"mobileinner" + innerIndex}
                          className="navLinkMain pr-3"
                        >
                          <a
                            className={
                              innerDropDown === "inner" + innerIndex + 1
                                ? "text-blue-600 text-xl"
                                : "text-x1"
                            }
                            href="#"
                          >
                            {innerItems?.title}
                          </a>
                          <div className="arrowImg">
                            <img
                              src="https://images.myloapp.in/NestJsUploads/1695548784702--removebg-preview.webp"
                              alt=""
                              className={
                                innerDropDown === "inner" + innerIndex + 1
                                  ? " rotate-180 mr-3"
                                  : "rotate-0 mr-3"
                              }
                              onClick={(e) => {
                                e.stopPropagation();
                                if (innerDropDown == "inner" + innerIndex + 1)
                                  setInnerDropDown(false);
                                else setInnerDropDown("inner" + innerIndex + 1);
                              }}
                            />
                          </div>
                        </p>
                        <div
                          className={
                            innerDropDown === "inner" + innerIndex + 1
                              ? "block innerSubMenu"
                              : "hidden"
                          }
                        >
                          {innerItems?.data?.map((element) => {
                            return <p key={"nav" + index}>{element.heading}</p>;
                          })}
                        </div>
                      </>
                    );
                  })
                : item?.subMenu?.length > 0 &&
                  item?.subMenu?.map((innerItem) => {
                    return (
                      <p key={"innerNav" + innerIndex}>{innerItem?.heading}</p>
                    );
                  })}
            </div>
          </>
        );
      })}

      <button>Close</button>
    </MobileNavContainer>
  );
};

export default MobileNav;
