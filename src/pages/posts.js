import Banner from "@/components/Banner";
import MainFooter from "@/components/Footer";
import TopMasthead from "@/components/MastHead";
import MastHead from "@/components/MastHead";
import StickyHeader from "@/components/StickyHeader";
import { MainContainer } from "@/styles/styled";
import React, { useEffect, useState } from "react";

const Posts = (props) => {
  const { postData } = props;
  //   console.log(postData);
  const [data, setData] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  useEffect(() => {
    setData(postData);
  }, [postData]);
  const bannerImg = postData?.yoast_head_json?.og_image?.url;
  return (
    <>
      {data && (
        <>
          <StickyHeader
            showSearchBar={showSearchBar}
            setShowSearchBar={setShowSearchBar}
            postData={postData}
          />
          <TopMasthead showSearchBar={showSearchBar} postData={postData} />
          {bannerImg && <Banner bannerImg={bannerImg} />}

          <MainContainer>
            <div
              dangerouslySetInnerHTML={{ __html: postData?.content?.rendered }}
            />
          </MainContainer>
          <MainFooter />
        </>
      )}
    </>
  );
};

export default Posts;
