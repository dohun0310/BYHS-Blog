"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.article `
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  max-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 30px 64px;
  box-sizing: border-box;

  & h1, h2, h3, h4, h5 {
    font-weight: bold;
  }

  & h1 {
    font-size: 26px;
  }

  & a {
    color: #3081f7;
    text-decoration: solid underline;
  }

  & .post-title {
    margin-bottom: 0;
    font-size: 26px;
    font-weight: bold; 
  }

  & .post-author {
    font-size: 18px;
    border-bottom: 1px solid #e0e0e0;

    @media (prefers-color-scheme: dark) {
      border-color: #232323;
    }
  }

  & Mdx {
    & h1 {
      font-size: 26px;
      font-weight: bold;
    }
  }
`