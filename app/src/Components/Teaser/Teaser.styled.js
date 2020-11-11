import styled from "styled-components";
import ImageBox from "Components/ImageBox";

export const ImageBoxStyled = styled(ImageBox)`
  opacity: .9;
  transition: opacity .2s ease;
`;

export const TeaserStyled = styled.div`
  width: 30%;
  margin-bottom: 30px;

  &:nth-of-type(3n+2) {
    margin: 0 50px;
  }

  &:hover {
    ${ImageBoxStyled} {
      opacity: 1;
    }
  }
`;

export const TitleStyled = styled.h4`
  color: #111;
  font-weight: 700;
`;

export const LinkStyled = styled.a``;

export const DateStyled = styled.span`
  display: block;
  color: #8a8a8a;
  text-transform: uppercase;
  margin-top: 3px;
`;
