import styled from "styled-components";
import { media } from "Utils/media";

export const MainStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 40px 20px;
  overflow: hidden;
  transition: all 0.2s ease;

  ${media.tablet `
    padding: 40px 0;
  `}
`;

export const MainContainerStyled = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;

  ${media.tablet `
    width: 952px;
    max-width: none;
  `}

  ${media.desktop `
    width: 1000px;
  `}
`;

export const TitleWrapperStyled = styled.div`
  padding-bottom: 40px;
`;

export const TitleStyled = styled.h1`
  display: inline-block;
  font-size: 23px;
  font-weight: 700;
  text-transform: uppercase;
  border-bottom: 8px solid #9e1c1c;
  padding-bottom: 4px;
`;
