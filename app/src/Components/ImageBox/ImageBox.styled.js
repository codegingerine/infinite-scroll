import styled from "styled-components";
import logo from "Assets/png/bg.png";

export const ImageBoxStyled = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 190px;
  margin-bottom: 10px;
  overflow: hidden;
  background: url(${logo}) no-repeat center;
  background-size: 100px auto;
`;

export const ImageStyled = styled.img`
  width: auto;
  max-width: 350px;
  min-height: 190px;
`;
