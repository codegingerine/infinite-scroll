import React from "react";
import PropTypes from "prop-types";
import {
  MainStyled,
  MainContainerStyled,
  TitleStyled,
  TitleWrapperStyled,
} from "./MainWrapper.styled";

const MainWrapper = ({ children, title }) => {
  return (
    <MainStyled>
      <MainContainerStyled>
        <TitleWrapperStyled>
          <TitleStyled>{title}</TitleStyled>
        </TitleWrapperStyled>
        {children}
      </MainContainerStyled>
    </MainStyled>
  );
};

MainWrapper.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
};

export default MainWrapper;
