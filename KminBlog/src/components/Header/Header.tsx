import Link from "@docusaurus/Link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-[url(https://uploads-ssl.webflow.com/63201db742cb9549003219e4/633689fe5bf8c228c472986d_Case%20study%20-%201%20\(1\).svg)] bg-repeat bg-cover">
      <div className="columns-6xl mx-32">
        <div className="py-5">
          <Link to="/">
            <img
              src="https://uploads-ssl.webflow.com/63201db742cb9549003219e4/63468662026df00053eb9492_white_logo.svg"
              alt="faba-img"
              className="object-cover w-32"
            />
          </Link>
        </div>
        <div className="w-[638px] pb-[115px]">
          <h1 className="pt-16 pb-4 font-bold text-white text-7xl leading-[72px]">
            From Our Experts
          </h1>
          <div className="text-white text-2xl">
            A developer's place to uncover new knowledge, cultivated by the tech
            team at FABA Technology
          </div>
        </div>
      </div>
    </header>
  );
}
