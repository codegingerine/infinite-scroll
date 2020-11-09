import React, { useState, useEffect } from "react";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";
// import {  } from "./Feed.styled";

const Feed = () => {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    fetch(`https://pastebin.pl/view/raw/e1658aa0`)
      .then((res) => res.json())
      .then((data) => {
        setPostsList(data.posts.filter((_, i) => i < 12));
        console.log("posts:", data);
      });
  }, []);

  return (
    <MainWrapper title="Feed">
      <List listMapped={postsList} />
    </MainWrapper>
  );
};

export default Feed;
