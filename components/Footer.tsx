"use client"

import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  width: 100%;
  z-index: 0;
  bottom: 0;
  background-color: #e0e0e0;
  padding: 0;

  & .footer-container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    height: 100px;
    display: flex;
    padding: 0 30px;
    box-sizing: border-box;
    align-items: center;
  }

  & h5 {
    color: #464646;
    margin: 0;
    font-size: 17px;
    padding-left: 0;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #232323;

    & h5 {
      color: #909090;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="footer-container">
      <h5>created by d3h1</h5>
    </div>
  </StyledFooter>
)

export default Footer;