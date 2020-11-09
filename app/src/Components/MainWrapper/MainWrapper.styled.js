import styled from "styled-components";

export const MainStyled = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  padding: 40px 0;
  overflow: hidden;
  transition: all 0.2s ease;
`;

export const MainContainerStyled = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  padding: 20px 0;
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
