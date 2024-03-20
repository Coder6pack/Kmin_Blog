import React from "react";
import AsideDetail from "../AsideDetail";
import Link from "@docusaurus/Link";
interface PropsImg {
  src: string;
}

function ImgWrapper({ src }: PropsImg) {
  return (
    <div className="flex justify-center mb-[20px]">
      <img
        src={src}
        alt="img"
        className="w-[463.5px] h-[463.5px] object-cover"
      />
    </div>
  );
}

export default function PostDetail() {
  return (
    <div className="columns-6xl mx-32 pt-8 mb-20">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3">
          <AsideDetail />
        </div>

        <div className="col-span-8 pl-5">
          <div className="mb-6">
            <div className="mb-9">
              <h3 className="text-3xl mb-6 text-textTitle font-normal">
                Introduction
              </h3>
              <p className="text-lg mb-9">
                If you are finding a solution for server-side caching, it is
                likely that you have seen some suggestions like Redis or
                Memcached.
              </p>
              <p className="text-lg mb-9">
                Redis and Memcached are both open-source in-memory databases
                that use key-value format to store data. They are utilized to
                accelerate systems and are supported by major programming
                languages like Java, Python, JavaScript, and C, and are widely
                used by large tech companies.
              </p>
              <p className="text-lg">
                This article aims to differentiate Redis and Memcached and
                identify which one is best suited for a specific system.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="text-3xl mb-6 text-textTitle font-normal">
                Get to know Redis
              </h3>
              <ImgWrapper src="https://uploads-ssl.webflow.com/63280aa7978cc401884bca8f/64ddcf530c11d2786bfd94af_Beige%20Clean%20Illustration%20Infographics%20Instagram%20Post.png" />
              <p className="text-lg mb-9">Here are some benefits of Redis:</p>
              <ul className="mb-8 pl-10 list-disc">
                <li className="text-lg mb-2">
                  Extremely fast: Redis is very fast and is able to perform
                  around 110000 SETs and 81000 GETs per second.
                </li>
                <li className="text-lg mb-2">
                  Support various data types: Redis supports most of the
                  commonly-used data types such as list, set, sorted set, and
                  hashes.
                </li>
                <li className="text-lg mb-2">
                  Atomic Operations: All Redis operations are atomic, which
                  ensures that if two clients access concurrently, the Redis
                  server will receive the updated value.
                </li>
                <li className="text-lg mb-2">
                  Comprehensive and well-documented support: Redis is updated
                  frequently and has an easy-to-read official documentation
                  guide.
                </li>
              </ul>
              <p className="mb-9 text-lg">And here are its drawbacks:</p>
              <ul className="mb-8 pl-10 list-disc">
                <li className="text-lg mb-2">
                  Extremely fast: Memcached is exceptionally fast thanks to the
                  in-memory key-value store
                </li>
                <li className="text-lg mb-2">
                  Multi-threaded support: Memcached supports Multi-threaded
                  architecture that enables vertical scaling for your system.
                </li>
                <li className="text-lg">
                  Easy to use: Memcached is simple but quite powerful in terms
                  of development.
                </li>
              </ul>
            </div>
            <div className="mb-9">
              <h3 className="text-3xl mb-6 text-textTitle font-normal">
                Get to know Memcached
              </h3>
              <ImgWrapper src="https://uploads-ssl.webflow.com/63280aa7978cc401884bca8f/64ddcf69d350520213d31a69_Beige%20Clean%20Illustration%20Infographics%20Instagram%20Post%20(2).png" />
              <p className="text-lg mb-9">Here are what Memcached offers:</p>
              <ul className="mb-8 pl-10 list-disc">
                <li className="text-lg mb-2">
                  Extremely fast: Redis is very fast and is able to perform
                  around 110000 SETs and 81000 GETs per second.
                </li>
                <li className="text-lg mb-2">
                  Support various data types: Redis supports most of the
                  commonly-used data types such as list, set, sorted set, and
                  hashes.
                </li>
                <li className="text-lg mb-2">
                  Atomic Operations: All Redis operations are atomic, which
                  ensures that if two clients access concurrently, the Redis
                  server will receive the updated value.
                </li>
              </ul>
              <p className="mb-9 text-lg">And here are its drawbacks:</p>
              <ul className="mb-8 pl-10 list-disc">
                <li className="text-lg mb-2">
                  Extremely fast: Memcached is exceptionally fast thanks to the
                  in-memory key-value store
                </li>
                <li className="text-lg mb-2">
                  Multi-threaded support: Memcached supports Multi-threaded
                  architecture that enables vertical scaling for your system.
                </li>
                <li className="text-lg">
                  Easy to use: Memcached is simple but quite powerful in terms
                  of development.
                </li>
              </ul>
            </div>
            <div className="mb-9">
              <h3 className="text-3xl mb-6 text-textTitle font-normal">
                Use cases for Redis and Memcached
              </h3>
              <p className="text-lg mb-9">Here are what Memcached offers:</p>
              <ul className="mb-8 pl-10 list-disc">
                <li className="text-lg mb-2">
                  Extremely fast: Redis is very fast and is able to perform
                  around 110000 SETs and 81000 GETs per second.
                </li>
                <li className="text-lg mb-2">
                  Atomic Operations: All Redis operations are atomic, which
                  ensures that if two clients access concurrently, the Redis
                  server will receive the updated value.
                </li>
              </ul>
              <p className="mb-9 text-lg">And here are its drawbacks:</p>
              <ul className="mb-8 pl-10 list-disc">
                <li className="text-lg mb-2">
                  Extremely fast: Memcached is exceptionally fast thanks to the
                  in-memory key-value store
                </li>
                <li className="text-lg mb-2">
                  Multi-threaded support: Memcached supports Multi-threaded
                  architecture that enables vertical scaling for your system.
                </li>
                <li className="text-lg">
                  Easy to use: Memcached is simple but quite powerful in terms
                  of development.
                </li>
              </ul>
            </div>
            <div className="mb-9">
              <h3 className="text-3xl mb-6 text-textTitle font-normal">
                Conclusion
              </h3>
              <p className="text-lg my-6">
                In conclusion, Redis is a better choice for data structures,
                atomic operations, and transaction processing. Meanwhile,
                Memcached is an excellent choice for simple string data,
                multithreading support, and easy-to-use development.
                Additionally, Redis is suitable for systems that require data
                persistence, while Memcached is suitable for systems that do
                not.
              </p>
            </div>
            <div className="mb-9">
              <h3 className="text-3xl mb-6 text-textTitle font-normal">
                References
              </h3>
              <ul className="list-disc mb-6 pl-10">
                <li className="mb-2 text-textTitle">
                  <Link
                    to="https://redis.io/"
                    className="cursor-pointer hover:no-underline hover:text-textTitle"
                  >
                    https://redis.io/
                  </Link>
                </li>
                <li className="mb-2 text-textTitle">
                  <Link
                    to="https://memcached.org/"
                    className="cursor-pointer hover:no-underline hover:text-textTitle"
                  >
                    https://memcached.org/
                  </Link>
                </li>
                <li className="mb-2 text-textTitle">
                  <Link
                    to="https://scalegrid.io/blog/redis-vs-memcached-2021-comparison/"
                    className="cursor-pointer hover:no-underline hover:text-textTitle"
                  >
                    https://scalegrid.io/blog/redis-vs-memcached-2021-comparison/
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
