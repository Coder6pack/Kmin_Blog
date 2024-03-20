import Link from "@docusaurus/Link";
import { data } from "autoprefixer";
import React from "react";

const dataTag = [
  { id: 1, name: "DataBase" },
  { id: 2, name: "Server-side caching and rendering" },
  { id: 3, name: "Redis" },
  { id: 4, name: "Memcached" },
];
export default function AsideDetail() {
  return (
    <div className="pr-9">
      <div className="mb-10">
        <div className="border-b border-b-lineGray font-bold pb-3 mb-5 text-2xl">
          Share
        </div>
        <div className="flex mt-4 ">
          <img
            src="https://uploads-ssl.webflow.com/63201db742cb9549003219e4/632ade3a3dbce6d96d2159b1_facebook.png"
            alt="face-book "
            className="bg-white rounded-full"
          />
          <img
            src="https://uploads-ssl.webflow.com/63201db742cb9549003219e4/632ade39ffa8120c3fa9d027_linkedin.png"
            alt=""
            className="bg-white rounded-full ml-4"
          />
        </div>
      </div>
      <div>
        <div className="border-b border-b-lineGray font-bold pb-3 mb-5 text-2xl">
          Recommended topics
        </div>
        <div className="flex flex-wrap">
          {dataTag.map((val) => (
            <div
              key={val.id}
              className="bg-bgGray rounded-md py-2 px-3 mr-2 mb-4 w-auto"
            >
              <Link className="cursor-pointer">{val.name}</Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="border-b border-b-lineGray font-bold pb-3 my-8 text-2xl">
          Related Articles
        </div>
        <div className="mb-4">
          <div>
            <Link className="text-[1.15em] font-bold text-textTitle">
              A Dive into Application Architecture - Part 4 - Microservices
              Architecture
            </Link>
          </div>
          <div className="flex items-center mt-2 pl-1 gap-2">
            <img
              src="https://uploads-ssl.webflow.com/63280aa7978cc401884bca8f/643775b924960406918345e7_Vector.png"
              alt="avatar"
              className="w-10 h10 rounded-full object-cover"
            />
            <div className="">
              <div className="">Hoai Nhon</div>
              <div className="text-sm text-textGray">April 13, 2023</div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <div>
            <Link className="text-[1.15em] font-bold text-textTitle">
              A Dive into Application Architecture - Part 4 - Microservices
              Architecture
            </Link>
          </div>
          <div className="flex items-center mt-2 gap-2 pl-1">
            <img
              src="https://uploads-ssl.webflow.com/63280aa7978cc401884bca8f/643775b924960406918345e7_Vector.png"
              alt="avatar"
              className="w-10 h10 rounded-full object-cover"
            />
            <div className="">
              <div className="">Hoai Nhon</div>
              <div className="text-sm text-textGray">April 13, 2023</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
