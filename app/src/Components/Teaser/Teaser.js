import React from "react";
import PropTypes from "prop-types";
import {
  TeaserStyled,
  TitleStyled,
  LinkStyled,
  DateStyled,
  ImageBoxStyled
} from "./Teaser.styled";

const Teaser = ({ imgSrc, alt, postUrl, postTitle, postDate }, ...rest) => {
  return (
    <TeaserStyled {...rest}>
      <ImageBoxStyled imgSrc={imgSrc} href={postUrl} alt={alt} />
      <LinkStyled href={postUrl}>
        <TitleStyled>{postTitle}</TitleStyled>
      </LinkStyled>
      <DateStyled>{postDate}</DateStyled>
    </TeaserStyled>
  );
};

Teaser.propTypes = {
  postUrl: PropTypes.string.isRequired,
  postTitle: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
};

export default Teaser;
