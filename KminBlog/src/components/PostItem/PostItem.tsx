import Link from "@docusaurus/Link";
import { postType } from "@site/src/types/post.type";
import React from "react";

interface Props {
  post: postType;
}

export default function PostItem({ post }: Props) {
  return (
    <div className="flex p-4 border border-lineGray rounded-xl mb-6">
      <div className="w-2/3">
        <div className="uppercase font-bold text-lg py-4 pr-8 text-wrap">
          <Link to="/Detail">{post.title}</Link>
        </div>
        <div className="mb-6">
          <Link className="bg-bgBlue px-2 py-1 rounded-md text-white mr-2 cursor-pointer hover:text-white">
            {post.tag}
          </Link>
          <span className="border-l border-l-lineGray pl-2 text-textGray">
            {post.createdAt}
          </span>
        </div>
        <div className="pr-8 truncate">{post.description}</div>
        <div className="flex items-center mt-6 gap-2">
          <img
            src={post.avatar}
            alt="avatar"
            className="w-10 h10 rounded-full object-cover"
          />
          <div className="">
            <div className="">{post.author}</div>
            <div className="text-sm text-textGray">{post.date}</div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={post.img}
          className="w-[256.66px] h-[189.9xpx] object-cover rounded-md"
        />
      </div>
    </div>
  );
}
