import { ImageContainer } from "@/styles/styled";
import Image from "next/image";
import React from "react";
import PopularPosts from "./PopularPosts";

const Banner = ({ bannerImg }) => {
  return (
    <>
      <ImageContainer>
        <Image
          src={bannerImg}
          alt=""
          sizes="33vw"
          quality={100}
          layout="fill"
        />
      </ImageContainer>
    </>
  );
};

export default Banner;
