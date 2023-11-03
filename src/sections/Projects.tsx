import prod1 from "../assets/prod1.png";
import prod2 from "../assets/prod2.png";
import prod3 from "../assets/prod3.png";

const Products = () => {
  return (
    <div className="bg-zinc-950 pb-16 pt-8 lg:pt-16">
      <h1 className="text-white text-2xl lg:text-9xl text-center duration-500">
        Some of my work:
      </h1>
      <div className="w-full lg:pb-12 lg:pt-24 px-8 py-8 flex flex-col gap-16 lg:gap-32">
        <div className="lg:h-[33%] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:mr-44 lg:gap-24 gap-4">
          <div className="lg:w-[50%] lg:h-[75%]">
            <img
              src={prod3}
              className="object-cover rounded-xl border-2 lg:border-8 border-solid border-violet-700"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col lg:items-stretch items-center gap-2 lg:gap-8">
            <h1 className="lg:text-6xl text-3xl text-center text-white lg:text-end font-bold">
              <a
                href="https://github.com/gregorkaw/streamer-app"
                target="blank"
                className="lg:text-6xl text-center hover:text-violet-700 duration-500 text-white lg:text-end font-bold"
              >
                streamer-app
              </a>
            </h1>
            <p className="text-gray-500 lg:max-w-none lg:text-start max-w-[75%] text-center">
              This is a fullstack CRUD Streamer App that allows users to check,
              add and upvote or downvote streamers. The app is built using
              SQLite3, Node.js and Express for backend, and React with Tailwind
              for frontend.
            </p>
            <div className="lg:flex-row flex flex-col gap-2 justify-between">
              <a
                href="https://github.com/gregorkaw/streamer-app"
                target="blank"
                className="lg:text-6xl text-center hover:text-violet-700 duration-500 text-white lg:text-end font-bold"
              >
                link
              </a>
              <div className="lg:flex lg:gap-4 grid gap-2 grid-cols-2 justify-center md:gap-2 lg:justify-end">
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  Node
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  React
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  Express
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  SQLite3
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:h-[33%] flex flex-col-reverse lg:flex-row justify-between items-center lg:ml-44 lg:gap-24 gap-4">
          <div className="lg:w-[50%] flex flex-col gap-2 lg:items-stretch items-center lg:gap-8">
            <h1 className="text-3xl lg:text-6xl text-center lg:text-start font-bold text-white">
              <a
                href="https://github.com/gregorkaw/Anime-Weather-App"
                target="blank"
                className="lg:text-6xl text-center hover:text-violet-700 duration-500 text-white lg:text-end font-bold"
              >
                weather-app
              </a>
            </h1>
            <p className="text-gray-500 text-center lg:text-start lg:max-w-none max-w-[75%]">
              Weather application created using openweathermapAPI with
              backgrounds changing according to the weather. Utylizing RWD,
              plain css with jsx and React, you can check weather anywhere!
            </p>
            <div className="lg:flex-row flex flex-col-reverse gap-2 justify-between">
              <div className="lg:flex lg:gap-4 grid gap-2 grid-cols-2 justify-center md:gap-2 lg:justify-end">
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  Fetch
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  React
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  JS
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  CSS
                </p>
              </div>
              <a
                href="https://github.com/gregorkaw/Anime-Weather-App"
                target="blank"
                className="lg:text-6xl text-center hover:text-violet-700 duration-500 text-white lg:text-end font-bold"
              >
                link
              </a>
            </div>
          </div>
          <div className="lg:w-[50%] lg:h-[75%]">
            <img
              src={prod2}
              className="object-contain rounded-xl border-2 lg:border-8 border-solid border-violet-700"
            />
          </div>
        </div>
        <div className="lg:h-[33%] flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:mr-44 lg:gap-24 gap-4">
          <div className="lg:w-[50%] lg:h-[75%]">
            <img
              src={prod1}
              className="object-cover rounded-xl border-2 lg:border-8 border-solid border-violet-700"
            />
          </div>
          <div className="lg:w-[50%] flex flex-col gap-2 lg:items-stretch items-center lg:gap-8">
            <h1 className="text-3xl lg:text-6xl text-center text-white lg:text-end font-bold">
              <a
                href="https://github.com/gregorkaw/blog-app"
                target="blank"
                className="lg:text-6xl hover:text-violet-700 duration-500 text-center text-white lg:text-end font-bold"
              >
                personal-blog
              </a>
            </h1>
            <p className="text-gray-500 text-center lg:text-start lg:max-w-none max-w-[75%]">
              Sample blog app. Created with Next.js functionality and routing,
              backend with graphql and hygraph, RWD, and modern principles in
              mind. Each post have its own schema, and you can even add comments
              to posts!
            </p>
            <div className="lg:flex-row gap-2 flex flex-col justify-between">
              <a
                href="https://github.com/gregorkaw/blog-app"
                target="blank"
                className="lg:text-6xl hover:text-violet-700 duration-500 text-center text-white lg:text-end font-bold"
              >
                link
              </a>
              <div className="lg:flex lg:gap-4 grid gap-2 grid-cols-2 justify-center md:gap-2 lg:justify-end">
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  Next.js
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  React
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  Graphql
                </p>
                <p className="text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  HyGraph
                </p>
                <p className="lg:block hidden text-white border-2 border-solid border-violet-700 p-4 w-24 text-center rounded-xl">
                  SCSS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-white text-center lg:text-5xl pt-12">
        There is much more! Check{" "}
        <a
          target="blank"
          className="text-white duration-500 decoration-violet-700 hover:text-violet-700 underline"
          href="https://github.com/gregorkaw"
        >
          here
        </a>
      </p>
    </div>
  );
};

export default Products;
