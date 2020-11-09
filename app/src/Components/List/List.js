import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import Teaser from "Components/Teaser";
import { ListWrapper } from "./List.styled";

const List = ({ listMapped }) => {
  return (
    <ListWrapper>
      {listMapped.map(({ title, url, thumb, date }) => {
        return (
          <Teaser
            key={uuidv4()}
            imgSrc={thumb}
            alt={title}
            postUrl={url}
            postTitle={title}
            postDate={date}
          />
        );
      })}
    </ListWrapper>
  );
};

List.propTypes = {
  listMapped: PropTypes.array.isRequired
};

export default List;
