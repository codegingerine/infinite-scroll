import React, { useState, useEffect, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import MainWrapper from "Components/MainWrapper";
import List from "Components/List";
import LoadMore from "Components/LoadMore";

const Feed = () => {
  const [postsList, setPostsList] = useState([]);
  const [hasMorePosts, setHasMorePosts] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(50);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://pastebin.pl/view/raw/e1658aa0`)
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
        hasMore={true}
        loader={hasMorePosts && <LoadMore loadingTxt="Wczytuję artykuły..." />}
      >
        <List listMapped={postsList} />
      </InfiniteScroll>
    </MainWrapper>
  );
};

export default Feed;
