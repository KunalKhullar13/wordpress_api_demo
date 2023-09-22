import styled from "styled-components";

export const MainContainer = styled.div`
  font-family: sans-serif;
  box-sizing: border-box;
  padding: 52px;
  width: 75%;

  h2 {
    font-size: 40px;
    margin: 0px 0px 15px;
    font-weight: 350;
  }

  p,
  ol,
  li {
    margin: 10px 0px;
    font-size: 20px;
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
    height: 50px;
  }
  strong {
    font-weight: bolder;
  }
  .wp-block-pullquote p {
    font-size: 26px;
    color: #ff661a;
    font-weight: 800;
    border: 1px solid #ff661a;
    text-align: center;
    border-radius: 20px;
    line-height: 1.5em;
    letter-spacing: -0.04em;
    padding: 40px;
  }
  font-family: sans-serif;
  box-sizing: border-box;
  padding: 52px;
`;

export const StickyTop = styled.div`
  position: sticky;
  z-index: 10;
  top: 0;
`;

export const TopStrip = styled.div`
  background: #595959;
  display: flex;
  font-size: 16px;
  align-items: center;
  justify-content: center;
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
    font-weight: 800;
  }
  .partition {
    border-top: 1px solid #eee;
    width: 30px;
    display: block;
    height: 1px;
    rotate: 90deg;
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
  .buttonContainer {
    display: flex;
    align-items: center;
    column-gap: 20px;
  }
  .headerLinks {
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
`;

export const SearchBarContainer = styled.div`
  position: relative;
  .svgContainer {
    width: 30px;
    img {
      width: 100%;
      cursor: pointer;
      opacity: 0.6;
    }
  }

  .searchbarMain {
    position: absolute;
    background: white;
    padding: 10px;
    border-radius: 20px;
    transition: all 0.5s linear;
    top: 100px;
    left: ${(props) => (props.showSearchBar ? "-50%" : "1000%")};
    z-index: 10;
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
    font-size: 70px;
    font-weight: 800;
    color: #fff;
    width: 85%;
    line-height: 6rem;
    margin-top: 30px;
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
  }
  overflow: hidden;
`;

export const NavMenuCol = styled.div`
  padding: 10px;
  .subMenuTitle {
    color: #100849;
    font-weight: bold;
    font-size: 36px;
  }
  .seperator {
    margin: 16px 0px 20px;
    font-size: 36px;
    letter-spacing: 4px;
    color: orange;
  }
  ,
  .menuContainer a {
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
