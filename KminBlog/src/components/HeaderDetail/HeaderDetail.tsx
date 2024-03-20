import Link from "@docusaurus/Link";
import React from "react";

interface Props {
  content?: string;
}
export default function HeaderDetail({ content }: Props) {
  return (
    <header>
      <div className="columns-6xl mx-32">
        <div className="py-5">
          <Link>
            <img
              src="https://uploads-ssl.webflow.com/63201db742cb9549003219e4/634526f8250bc661c07f1654_Light%3DFalse.svg"
              alt="faba-img"
              className="object-cover w-32"
            />
          </Link>
        </div>
        <div className="py-10">
          <div className="mb-6">
            <Link className="bg-bgBlue px-2 py-1 text-sm rounded-md text-white mr-2 cursor-pointer hover:text-white">
              Insights
            </Link>
            <span className="border-l border-l-lineGray pl-2 text-textGray">
              10 minutes read
            </span>
          </div>
          <div className="w-[80%] text-wrap text-textTitle text-5xl font-bold">
            {content}
          </div>
          <div className="flex items-center mt-6 gap-2">
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
    </header>
  );
}
