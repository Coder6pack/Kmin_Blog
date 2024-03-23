import React from "react";
import AsideFilter from "../AsideFilter";
import PostItem from "../PostItem";
import { posts } from "@site/src/data/posts";
import PostItemReverse from "../PostItemReverse";

export default function PostList() {
  return (
    <div className="columns-6xl mx-32 pt-[50px]">
      <div className="font-bold text-3xl mb-6">Document</div>
      <div className="grid grid-cols-12 gap-2 -5">
        <div className="col-span-6">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
        <div className="col-span-6">
          {posts.map((post, index) => (
            <PostItemReverse key={index} post={post} />
          ))}
        </div>
      </div>
      <div className="font-bold text-3xl mb-6">Blog</div>
      <div className="grid grid-cols-12 gap-2 -5">
        <div className="col-span-6">
          {posts.map((post, index) => (
            <PostItem key={index} post={post} />
          ))}
        </div>
        <div className="col-span-6">
          {posts.map((post, index) => (
            <PostItemReverse key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
