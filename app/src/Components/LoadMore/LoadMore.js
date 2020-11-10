import React from "react";
import { LoadMoreWrapperStyled, LoadMoreTxtStyled } from "./LoadMore.styled";

const LoadMore = React.forwardRef(({ loadingTxt }, ref) => {
  return (
    <LoadMoreWrapperStyled ref={ref}>
      <LoadMoreTxtStyled>{loadingTxt}</LoadMoreTxtStyled>
    </LoadMoreWrapperStyled>
  );
});

export default LoadMore;
