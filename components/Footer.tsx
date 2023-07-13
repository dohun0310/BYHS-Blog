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
    gap: 5px;
  }

  & h5 {
    color: #464646;
    margin: 0;
    font-size: 17px;
    padding-left: 0;
  }

  & svg {
    fill: #464646;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #232323;

    & h5 {
      color: #909090;
    }

    & svg {
      fill: #909090;
    }
  }

  @media (max-width: 520px) {
    background-color: #ffffff;
    border-top: 1px solid #e0e0e0;

    & .footer-container {
      justify-content: center;
      align-items: center;
    }

    @media (prefers-color-scheme: dark) {
      background-color: #111111;
      border-top: 1px solid #232323;
    }
  }
`;

const Footer = () => (
  <StyledFooter>
    <div className="footer-container">
      <h5>created by</h5>
      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="18" viewBox="0 0 10 18">
        <path d="M0 0.0134888L9.90627 2.57038H0V0.0134888Z" />
        <path d="M4.09839 17.858L3.67165e-05 -2.67029e-05L3.67165e-05 17.858H4.09839Z" />
        <path d="M6.94788 2.57031L9.8796 15.3681L9.8796 2.57031L6.94788 2.57031Z" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99998 15.5352L4.3832 17.8581H0V15.5352H9.99998Z" />
      </svg>
    </div>
  </StyledFooter>
)

export default Footer;