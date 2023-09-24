import { popularPosts } from "@/constants/constantData";
import { PopularPostSection } from "@/styles/styled";
import React from "react";

const PopularPosts = () => {
  return (
    <PopularPostSection>
      <div className="container">
        <input className="search" type="text" placeholder="Search..." />
        <select>
          <option value="Select Category">Select Category</option>
          <option value="Blog Posts">Blog Posts</option>
        </select>
        <div class="posts">
          <h3>Popular Posts</h3>
          <ul>
            {popularPosts?.map((item, index) => {
              return (
                <li key={"post" + index}>
                  <a href="#">{item}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <input type="email" placeholder="Email *" />
        </div>
        <button>Subscribe!</button>
      </div>
    </PopularPostSection>
  );
};

export default PopularPosts;
