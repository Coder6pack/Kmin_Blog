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
        <div className="col-span-12 collapse">
          <input type="checkbox" />
          <div className="flex justify-center collapse-title">
            <button className="flex justify-center items-center  text-black rounded-2xl px-3 py-2">
              View more ...
            </button>
          </div>
          <div className="collapse-content">
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
