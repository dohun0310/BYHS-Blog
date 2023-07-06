"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.article `
  position: relative;
  width: 100%;
  padding-top: 16px;

  &. post-container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px 64px;
    box-sizing: border-box;

    & .post-title {
      margin-bottom: 0;
      font-size: 26px;
      font-weight: bold;
    }
  }
`