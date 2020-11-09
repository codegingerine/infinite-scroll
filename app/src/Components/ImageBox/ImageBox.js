import React from "react";
import PropTypes from "prop-types";
import { ImageBoxStyled, ImageStyled } from "./ImageBox.styled";

const ImageBox = ({ href, imgSrc, alt, className }) => {
  return (
    <ImageBoxStyled className={className} href={href} >
      <ImageStyled src={imgSrc} alt={alt} />
    </ImageBoxStyled>
  );
};

ImageBox.propTypes = {
  href: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageBox;
