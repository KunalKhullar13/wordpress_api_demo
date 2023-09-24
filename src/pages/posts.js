import Banner from "@/components/Banner";
import MainFooter from "@/components/Footer";
import TopMasthead from "@/components/MastHead";
import MastHead from "@/components/MastHead";
import PopularPosts from "@/components/PopularPosts";
import StickyHeader from "@/components/StickyHeader";
import { MainContainer, PostDataContainer } from "@/styles/styled";
import React, { useEffect, useState } from "react";

const Posts = (props) => {
  const { postData } = props;
  //   console.log(postData);
  const [data, setData] = useState(null);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [bannerImg, setBannerImg] = useState(null);
  useEffect(() => {
    setData(postData);
    setBannerImg(postData?.yoast_head_json?.og_image?.[0]?.url);
  }, [postData]);
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
          <PostDataContainer>
            <div className="leftSection">
              {bannerImg && <Banner bannerImg={bannerImg} />}

              <MainContainer>
                <div
                  dangerouslySetInnerHTML={{
                    __html: postData?.content?.rendered,
                  }}
                />
              </MainContainer>
            </div>

            <div className="rightSection">
              <PopularPosts />
            </div>
          </PostDataContainer>

          <MainFooter />
        </>
      )}
    </>
  );
};

export default Posts;
