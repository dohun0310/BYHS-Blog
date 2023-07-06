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
    padding: 0 30px;
    box-sizing: border-box;
    
    & .page-title {
      margin-bottom: 0;
      font-size: 26px;
      font-weight: bold;
    }

    & .page-content {
      padding: 14px 0 14px;
      font-size: 16px;
      border-bottom: 1px solid #e0e0e0;
    }

    & .post-date {
      padding-top: 24px;
    }

    & .post-title {
      padding-bottom: 0;
      font-size: 26px;
      font-weight: bold;
    }

    & .post-author {
      padding: 12px 0 24px;
      font-size: 16px;
      border-bottom: 1px solid #e0e0e0;
    }

    @media (prefers-color-scheme: dark) {
      & .page-content {
        border-color: #232323;
      }

      & .post-author {
        border-color: #232323;
      }
    }
  }
`