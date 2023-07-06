"use client"

import styled from "@emotion/styled";

export const StyledPost = styled.article `
  position: relative;
  width: 100%;
  padding-top: 16px;

  &. posts-container {
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    max-height: 100%;
    height: 100%;

    & .post-title {
      font-size: 16px;
    }
  }
`