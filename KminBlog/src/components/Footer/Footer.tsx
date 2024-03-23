import Link from "@docusaurus/Link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#10172e] pt-10 pb-5">
      <div className="columns-6xl mx-32">
        <div className="flex justify-between">
          <div className="basis-1/4">
            <Link to="/">
              <img
                src="https://uploads-ssl.webflow.com/63201db742cb9549003219e4/63468662026df00053eb9492_white_logo.svg"
                alt="faba-img"
                className="object-cover w-28"
              />
            </Link>
            <div className="mt-4 mb-3 pb-6 text-[#9497af]">
              Collaborative, secure and transparent offshore softwase
              development.
            </div>
          </div>
          <div className="basis-1/4">
            <div className="text-white font-bold">Join Our Team</div>
            <div className="text-white mt-4 mb-3 pb-6">
              <Link to="/">Careers</Link>
            </div>
          </div>
          <div className="basis-1/4">
            <div className="text-white font-bold">Connect with us</div>
            <div className="flex mt-4 ">
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg"
                alt="face-book "
                className="bg-white rounded-full"
              />
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg"
                alt=""
                className="bg-white rounded-full ml-4"
              />
            </div>
          </div>
        </div>
        <div className="border border-t-lineFooter/70 mb-4" />

        <div className="text-white">
          Copyright © 2024 Faba Technology. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
