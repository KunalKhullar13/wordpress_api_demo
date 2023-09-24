import { breadCrumbsData } from "@/constants/constantData";
import { MastHeadContainer } from "@/styles/styled";
import React from "react";

const TopMasthead = (props) => {
  const { postData, showSearchBar } = props;
  let breadcrumbs = [...breadCrumbsData];
  const isDesktopUser = () => {
    return typeof window !== "undefined" && window.innerWidth >= 720;
  };
  breadcrumbs.push({
    crumb: postData?.title?.rendered,
    link: postData?.link,
  });
  return (
    <MastHeadContainer showSearchBar={showSearchBar}>
      <img
        className="patternImg"
        src="https://www.greyorange.com/wp-content/uploads/2022/09/masthead-bg.png"
        alt=""
      />
      <div className="inner">
        <div className="breadcrumbs">
          {isDesktopUser() ? (
            breadcrumbs?.map((item, index) => {
              return (
                <>
                  {item.link ? (
                    <a key={"breadcrumb" + index} href={item?.link}>
                      {item?.crumb}
                    </a>
                  ) : (
                    <p key={"breadcrumb" + index}>{item?.crumb}</p>
                  )}
                  {index < breadcrumbs?.length - 1 && (
                    <img
                      src="https://images.myloapp.in/NestJsUploads/1683006324692-1668773844547-arrowforward_sWR7ZFijx.svg"
                      alt=""
                    />
                  )}
                </>
              );
            })
          ) : (
            <a className="returnTag" href="#">
              <img
                src="https://images.myloapp.in/NestJsUploads/1683006324692-1668773844547-arrowforward_sWR7ZFijx.svg"
                alt=""
              />{" "}
              Return to
            </a>
          )}
        </div>
        <h1>{postData?.title?.rendered}</h1>
      </div>
      <div className="searchbarMain">
        <form className="inputForm" action="">
          <input type="text" placeholder="Search..." />
          <img
            src="https://icones.pro/wp-content/uploads/2021/02/loupe-et-icone-de-recherche-de-couleur-orange.png"
            alt=""
          />
        </form>
      </div>
    </MastHeadContainer>
  );
};

export default TopMasthead;
