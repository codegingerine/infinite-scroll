import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { DEVELOPMENT, PRODUCTION } from "Utils/helpers";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";
import LoadMore from "Components/LoadMore";

const API_URL = DEVELOPMENT ? "http://localhost:3000/base" : PRODUCTION && "https://pastebin.pl/view/raw/e1658aa0";

const Feed = () => {
  const [postsList, setPostsList] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setPostsList((prevState) => [
          ...prevState,
          ...data.posts.filter(
            (_, i) =>
              i > prevState.length && i <= prevState.length + itemsPerPage
          ),
        ]);
      });
      console.log("env: ", process.env.NODE_ENV)
  };

  useEffect(() => {
    const postsListEnd = (postsList.length + itemsPerPage) % itemsPerPage !== 0;
    postsListEnd && setHasMorePosts(false);
  });

  return (
    <MainWrapper title="Feed">
      <InfiniteScroll
        dataLength={postsList.length}
        next={fetchData}
        hasMore={hasMorePosts}
        loader={<LoadMore loadingTxt="Wczytuję artykuły..." />}
      >
        <List listMapped={postsList} />
      </InfiniteScroll>
    </MainWrapper>
  );
};

export default Feed;
