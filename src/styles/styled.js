import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: sans-serif;
  box-sizing: border-box;
  padding: 52px;
  h2 {
    font-size: clamp(26px, 2vw, 40px);
    margin: 0px 0px 15px;
    font-weight: 350;
  }

  p,
  ol,
  li {
    margin: 10px 0px;
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.5625em;
    color: #595959;
    letter-spacing: 0.03rem;
  }
  a {
    text-decoration: none;
    color: #29aaa6;
    padding: 0px 5px;
  }
  .wp-block-spacer {
    height: 40px;
  }
  strong {
    font-weight: bolder;
  }
  .wp-block-pullquote p {
    font-size: clamp(16px, 3vw, 26px);
    color: #ff661a;
    font-weight: 800;
    border: 1px solid #ff661a;
    text-align: center;
    border-radius: 20px;
    line-height: 1.5em;
    letter-spacing: -0.04em;
    padding: 40px;
    @media (max-width: 768px) {
      padding: 20px;
    }
  }
  font-family: sans-serif;
  box-sizing: border-box;
  padding: 52px;
  @media (max-width: 768px) {
    padding: 26px 0;
    width: 90%;
    margin: auto;
  }
`;

export const StickyTop = styled.div`
  position: sticky;
  z-index: 10;
  transition: all 0.3s linear;
  top: ${(props) => props.showHeader};
  box-shadow: 1px 1px 12px -8px;
`;

export const TopStrip = styled.div`
  background: #595959;
  font-size: 16px;
  padding: 16px 0;
  .readMore {
    color: #5feae6;
    cursor: pointer;
    font-weight: 600;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px;
      background-color: #5feae6;
      width: 0;
      transition: width 250ms linear;
      height: 2px;
      border-radius: 3px;
    }
    &:hover {
      &:before {
        width: 100%;
      }
    }
  }
  p {
    color: white;
    font-weight: 700;
    text-align: center;
    padding: 0 10px;
  }
`;

export const NavSubMenu = styled.div`
  position: absolute;
  left: -50%;
  top: 36px;
  background: #fff;
  display: none;
  transition: all 200ms linear;
  padding: 16px 20px;
  border-radius: 10px;
  box-shadow: 1px 1px 12px -6px black;
  p {
    font-size: 18px;
    padding: 4px;
    width: max-content;
    position: relative;
    color: rgba(0, 0, 0, 0.7);
    &:before {
      content: "";
      position: absolute;
      left: 2px;
      bottom: 2px;
      background-color: #5feae6;
      width: 0;
      transition: width 250ms linear;
      height: 2px;
      border-radius: 3px;
    }
    &:hover {
      color: #5feae6;
      &:before {
        width: 100%;
      }
    }
  }
`;
export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background: white;
  position: relative;
  .logoImg {
    @media (max-width: 720px) {
      width: 50%;
    }
  }
  .buttonContainer {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  .headerLinks {
    @media (max-width: 720px) {
      display: none;
    }
    display: flex;
    column-gap: 20px;
    a {
      display: flex;
      align-items: center;
      column-gap: 4px;
      font-size: 18px;
      color: rgba(0, 0, 0, 0.7);
      padding-bottom: 8px;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 6px;
        background-color: orange;
        width: 0;
        transition: width 250ms linear;
        height: 3px;
        border-radius: 3px;
      }
      &:hover {
        color: orange;
        ${NavSubMenu} {
          &.gridbox {
            display: grid;
            left: -60%;
            grid-template-columns: repeat(3, 1fr);
            a {
              width: max-content;
            }
            column-gap: 30px;
          }
          display: block;
        }
        &:before {
          width: 100%;
        }
      }
    }
  }
`;

export const HeaderButtons = styled.button`
  font-size: 16px;
  color: ${(props) => (props.contact ? "orange" : "white")};
  background: ${(props) =>
    props.contact
      ? "white"
      : "linear-gradient(to right,#f0a632,#eb7a2e,#e9682c,#ee9330)"};
  border-radius: 30px;
  border: ${(props) => (props.contact ? "1px solid orange" : "none")};
  text-align: center;
  padding: 10px 18px;
  background-size: 200% 100%;
  transition: all 0.3s linear;
  &:hover {
    color: ${(props) => (props.contact ? "black" : "white")};
    border: ${(props) => (props.contact ? "1px solid black" : "none")};
    background-position: 100% 0;
  }
  margin-bottom: 10px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchBarContainer = styled.div`
  position: relative;
  .svgContainer {
    width: 30px;
    img {
      width: 100%;
      cursor: pointer;
      opacity: 0.6;
      @media (max-width: 720px) {
        cursor: default;
      }
    }
  }
`;

export const MastHeadContainer = styled.div`
  padding: 20px 32px 40px;
  position: relative;
  .patternImg {
    position: absolute;
    inset: 0;
    object-fit: cover;
    height: 100%;
    opacity: 0.78;
    z-index: 2;
  }
  background: linear-gradient(135deg, #ff8400 0%, #e9682c 100%);
  h1 {
    font-size: clamp(26px, 5vw, 70px);
    font-weight: 800;
    color: #fff;
    width: 85%;
    line-height: 6rem;
    margin-top: 30px;
    @media (max-width: 720px) {
      line-height: unset;
      width: 100%;
    }
  }
  .breadcrumbs {
    display: flex;
    align-items: center;
    column-gap: 10px;
    position: absolute;
    left: 32px;
    z-index: 5;
    font-size: 18px;
    top: 20px;
    img {
      width: 14px;
      position: unset;
      rotate: -90deg;
      opacity: 0.47;
    }
    @media (max-width: 720px) {
      left: 10px;
    }
  }
  a,
  p {
    color: #fff;

    display: flex;
    align-items: center;
    column-gap: 4px;
  }
  a {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: 0px;
      background-color: #5feae6;
      width: 0;
      transition: all 450ms linear;
      height: 3px;
      border-radius: 3px;
    }
    &:hover {
      color: #595959;
      &:before {
        width: 100%;
      }
    }
    &.returnTag {
      img {
        rotate: 90deg;
        opacity: 0.7;
      }
    }
  }
  .searchbarMain {
    position: absolute;
    background: white;
    padding: 10px;
    border-radius: 40px;
    transition: all 0.3s linear;
    top: 20px;
    left: ${(props) => (props.showSearchBar ? "48%" : "100%")};
    z-index: 10;
    width: 50%;
    height: 80px;
    box-shadow: 1px 1px 16px -10px;
    form {
      position: relative;
      img {
        right: 10px;
        top: 10px;
        width: 40px;
        height: 40px;
        position: absolute;
        cursor: pointer;
      }
    }
    input {
      display: block;
      width: 100%;
      border: 1px solid #afafaf;
      border-radius: 30px;
      height: 60px;
      color: rgba(0, 0, 0, 0.8);
      padding: 10px 20px;
      &:focus {
        outline: 1px solid #5feae6;
      }
    }
    @media (max-width: 720px) {
      left: ${(props) => (props.showSearchBar ? "3%" : "100%")};
      width: 94%;
    }
  }
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 20px 12px 40px;
  }
`;

export const NavMenuCol = styled.div`
  padding: 10px;
  .subMenuTitle {
    color: #100849;
    font-weight: bold;
    font-size: 36px;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 2px;
      bottom: 2px;
      background-color: #29aaa6;
      width: 0;
      transition: width 250ms linear;
      height: 2px;
      border-radius: 3px;
    }
    &:hover {
      color: #29aaa6;
      &:before {
        width: 200px;
      }
    }
  }
  .seperator {
    margin: 16px 0px 20px;
    font-size: 36px;
    letter-spacing: 4px;
    color: orange;
  }
  .menuContainer a {
    pointer-events: auto;
    &:before {
      content: "";
      position: absolute;
      left: 2px;
      bottom: 2px;
      background-color: #5feae6;
      width: 0;
      transition: width 250ms linear;
      height: 2px;
      border-radius: 3px;
    }
    &:hover {
      color: #5feae6;
      &:before {
        width: 100%;
      }
    }
  }
`;

export const ItemContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 45%;
  width: 90%;
  margin: 40px 0 0 50px;
  @media(max-width:720px){

    position: relative;
    padding-top: 50%;
    width: 90%;
    margin: 30px auto 0px;
  }
  span {
    position: unset !important;
  }
  img {
    object-fit:fill !important;
    height: 100%; !important;
  }
`;

export const Footer = styled.footer`
  background-color: #000;
  color: white;
  padding: 3%;
  font-family: sans-serif;
  line-height: 2;
  letter-spacing: 1px;
`;

export const TopFooter = styled.div`
  padding: 3%;
  .footer {
    display: flex;
  }
  .footer-left {
    width: 45%;
    display: flex;
    flex-direction: column;
  }
  .footer-img {
    width: 300px;
  }
  .footer-btn {
    width: 42%;
    color: #ff8400;
    background-color: white;
    padding: 15px;
    font-size: 20px;
    font-weight: 500;
    border-radius: 30px;
    text-align: center;
    margin-top: 2rem;
  }
  .about {
    display: flex;
    justify-content: space-between;
  }
  h4 {
    color: #ff8400;
    font-size: 19px;
  }
  .footer-link {
    width: 45%;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  .Social-links {
    display: flex;
  }

  @media (max-width: 400px) {
    .desktop-only {
      display: none;
    }
    .footer {
      display: flex;
      flex-direction: column;
    }
    .footer-left {
      width: 100%;
      align-items: center;
    }
    .footer-right {
      width: 100% !important;
      align-items: center;
    }
    .footer-btn {
      width: 100%;
      color: #ff8400;
      background-color: white;
      padding: 15px;
      font-size: 20px;
      font-weight: 500;
      border-radius: 30px;
      text-align: center;
      margin-top: 2rem;
    }
    .footer-link {
      width: 45%;
      align-items: center;
    }
    .about {
      width: 100%;
    }
  }
  .directionBtn {
    position: relative;
    cursor: pointer;
    &:before {
      content: "";
      position: absolute;
      left: 2px;
      bottom: 2px;
      background-color: #5feae6;
      width: 0;
      transition: width 250ms linear;
      height: 2px;
      border-radius: 3px;
    }
    &:hover {
      color: #5feae6;
      &:before {
        width: 80%;
      }
    }
  }
  .footerLinks {
    position: relative;
    &:before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -2px;
      background-color: orange;
      width: 0;
      transition: width 250ms linear;
      height: 2px;
      border-radius: 3px;
    }
    &:hover {
      color: orange;
      &:before {
        width: 100%;
      }
    }
  }
`;

export const BottomFooter = styled.div`
  .links {
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  .bottom-links {
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  .copyright {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
  }
  li,
  p {
    padding: 0px 10px;
    color: rgba(255, 255, 255, 0.6);
  }
  .back-top-btn {
    width: 16%;
    background-color: white;
    border-radius: 3rem;
    font-size: 18px;
    color: #ff8400;
    transition: all 0.4s linear;
    &:hover {
      border: black;
      color: black;
    }
  }
  @media (max-width: 720px) {
    .bottom-links {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .links {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .copyright {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .back-top-btn {
      padding: 10px;
      width: 50%;
      background-color: transparent;
      border-radius: 3rem;
      font-size: 18px;
      color: #ff8400;
      border: 1px solid orange;
      cursor: default;
    }
  }
`;

export const HamBurger = styled.div`
  @media (min-width: 720px) {
    display: none;
  }
`;
export const MobileNavContainer = styled.div`
    height: 90vh;
    position: absolute;
    top: 68px;
    background: white;
    padding: 10px 0px;
    z-index: 100;
    width: 100%;
    left: 0;
    transition: all 0.3s  linear;
    overflow: auto;
    padding-bottom:200px;
}
  button {
    width: 100%;
    background: #ff8400;
    text-align: center;
    color: white;
    padding: 16px;
    position: fixed;
    top: 92vh;
    font-size: 16px;
  }
  img {
    width: 16px;
    transition: all 0.3s linear;
  }
  .navLinkMain {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    justify-content: space-between;
    a {
        opacity: 0.7;
        font-size: 22px;
    }
  }
  .innerMenu {
    border-top: 2px solid #ff8400;
    width: 90%;
    margin: auto;
    background: #eee;
    padding: 8px 0px 10px 10px;
    font-size: 18px;
    color: rgba(0,0,0,0.7);
    p {
        padding: 8px 0;
    }
    
  }
  .innerSubMenu {
    p {
        color: rgba(0,0,0,0.46);
        font-size: 18px;
        padding-left: 10px;
    }
    border-top: 2px solid #0000ff7d;
  }
  .innerMenu a {
    font-size: 20px;
}
`;

export const PopularPostSection = styled.div`
  margin-top: 60px;
  .container {
    width: 90%;
  }
  input {
    padding: 15px;
    border-radius: 70px;
    width: 90%;
    border: 1px solid #595959;
    font-size: 16px;
  }
  select {
    margin: 30px 0px;
    padding: 15px;
    border-radius: 70px;
    width: 100%;
    border: 1px solid #595959;
    font-size: 16px;
  }
  option {
    padding: 25px;
    border-radius: 70px;
    width: 100%;
    border: 1px solid #595959;
    font-size: 16px;
  }
  h3 {
    font-size: 26px;
    font-weight: 700;
  }
  li {
    line-height: 32px;
  }
  li a {
    font-size: 18px;
    text-decoration: none;
    margin-bottom: 8px;
  }
  ul {
    list-style: disc;
    padding: 20px 0px 20px 45px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
  }
  .posts {
    padding: 0px 20px;
  }
  button {
    padding: 10px 30px;
    font-size: 20px;
    background-color: #ff8400;
    border-radius: 30px;
    color: white;
    border: none;
    margin-top: 20px;
  }
`;

export const PostDataContainer = styled.div`
  display: flex;
  align-items: flex-start;
  .leftSection {
    flex-basis: 70%;
    @media (max-width: 720px) {
      flex-basis: 100%;
    }
  }
  .rightSection {
    flex-basis: 25%;
    @media (max-width: 720px) {
      display: none;
    }
  }
`;
