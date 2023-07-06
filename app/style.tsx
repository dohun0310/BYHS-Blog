"use client"

import styled from "@emotion/styled";

export const StyledContents = styled.article `
  position: relative;
  width: 100%;
  padding-top: 16px;

  & .contents-container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    max-height: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 30px 64px;
    box-sizing: border-box;
        
    & .page-title {
      margin-bottom: 0;
      font-size: 26px;
      font-weight: bold;
    }

    & .page-content {
      margin-top: 14px;
      font-size: 16px;
    }
  }
`