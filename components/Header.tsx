"use client"

import styled from "@emotion/styled";
import Link from "next/link";

import { Logo } from ".";

const StyledHeader = styled.header `
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  border-bottom: 1px solid #e0e0e0;
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  z-index: 20;

  @media (prefers-color-scheme: dark) {
    border-color: #232323;
  }

  & .header-container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: min-content auto;
    padding: 0 30px;
    box-sizing: border-box;
    
      & .header-left, & .header-right {
        display: flex;
        align-items: center;
      }

      & .header-right {
        justify-content: flex-end;
        column-gap: 20px;
      }

      & h3 {
        font-size: 18px;
        font-weight: bold;
      }

      & a {
        text-decoration: none;
        color: black;
      }
      
      @media (prefers-color-scheme: dark) {        
        a {
          color: #ffffff;
        }
    }
`

const Header = () => {
  return (
    <StyledHeader>
        <div className="header-container">
            <div className="header-left">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="header-right">
                <Link href="/students">
                    <h3>
                        재학생
                    </h3>
                </Link>
                <Link href="/prospective_students">
                    <h3>
                        예비 입학생
                    </h3>
                </Link>
            </div>
        </div>
    </StyledHeader>
  )
}

export default Header