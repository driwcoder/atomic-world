"use client";
import React, { useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";

const MyLikeButton = () => {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <section>
      <div>
        <button onClick={handleClick}>Likes ({likes})</button>
      </div>
    </section>
  );
};
const LikeButton = () => {
  const [seuLike, setSeuLike] = useState(false);

  function handleClickSeuLike() {
    setSeuLike(!seuLike);
  }

  return (
    <section>
      <div>
        <button
          onClick={handleClickSeuLike}
          className={seuLike ? `text-green-500` : ""}
        >
          {seuLike ? <FaThumbsUp /> : <FaRegThumbsUp />}
        </button>
      </div>
    </section>
  );
};

export { LikeButton, MyLikeButton };
