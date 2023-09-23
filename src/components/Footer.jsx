import {
  contactUs,
  footerData,
  getDireactionButton,
} from "@/constants/constantData";
import { BottomFooter, Footer, TopFooter } from "@/styles/styled";
import React from "react";

const MainFooter = () => {
  return (
    <Footer>
      <TopFooter>
        <div className="footer">
          <div className="footer-left">
            <img
              className="footer-img"
              src="https://www.greyorange.com/wp-content/uploads/2022/09/footer-logo.png"
              alt=""
            />
            <button className="footer-btn">{contactUs}</button>
          </div>

          <div className="footer-right">
            <div className="about">
              <div>
                <div className="footer-link">
                  <h4>{Object.keys(footerData)[0]}</h4>
                  <p>{Object.values(footerData)[0]}</p>
                  <p className="directionBtn">{getDireactionButton}</p>
                </div>
                <div className="desktop-only">
                  <div>
                    <h4>{Object.keys(footerData)[1]}</h4>
                    <ul>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[1][0]}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[1][1]}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[1][2]}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[1][3]}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[1][4]}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="desktop-only">
                <div>
                  <h4>{Object.keys(footerData)[2]}</h4>
                  <ul>
                    <li>
                      <a href="#" className="footerLinks">
                        {Object.values(footerData)[2][0]}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footerLinks">
                        {Object.values(footerData)[2][1]}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footerLinks">
                        {Object.values(footerData)[2][2]}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footerLinks">
                        {Object.values(footerData)[2][3]}
                      </a>
                    </li>
                    <li>
                      <a href="#" className="footerLinks">
                        {Object.values(footerData)[2][4]}
                      </a>
                    </li>
                  </ul>

                  <div className="desktop-only">
                    <h4>{Object.keys(footerData)[3]}</h4>
                    <ul>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[3][0]}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[3][1]}
                        </a>
                      </li>
                      <li>
                        <a href="#" className="footerLinks">
                          {Object.values(footerData)[3][2]}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TopFooter>
      <hr />
      <BottomFooter>
        <div className="bottom-footer">
          <div class="copyright">
            <div className="links">
              <ul className="bottom-links">
                <li>Sitemap</li>
                <li>Privacy Policy</li>
                <li>CSR Policy</li>
                <li>Site Credits</li>
              </ul>
              <p>Copyright © 2023. All Rights Reserved.</p>
            </div>
            <button
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              class="back-top-btn"
            >
              Back to Top
            </button>
          </div>
        </div>
      </BottomFooter>
    </Footer>
  );
};

export default MainFooter;
