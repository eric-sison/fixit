import { FunctionComponent } from "react";

export const Topbar: FunctionComponent = () => {
  return (
    <nav className="border-b border-b-zinc-800 h-20">
      <section className="flex items-center justify-end h-full px-5">
        {/* <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
            className="text-green-700"
          >
            <g fill="currentColor">
              <path d="M10 11a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Z"></path>
              <path
                fillRule="evenodd"
                d="M9.094 4.75A3.986 3.986 0 0 1 8 2h2a2 2 0 1 0 4 0h2a3.986 3.986 0 0 1-1.095 2.75A6.02 6.02 0 0 1 17.66 8H19a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1v2h1a1 1 0 1 1 0 2h-1.341A6.003 6.003 0 0 1 6.34 18H5a1 1 0 1 1 0-2h1v-2H5a1 1 0 1 1 0-2h1v-2H5a1 1 0 1 1 0-2h1.341a6.02 6.02 0 0 1 2.753-3.25ZM8 16v-6a4 4 0 1 1 8 0v6a4 4 0 0 1-8 0Z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
          <h1 className="text-4xl font-bold text-font-regular/80">
            fix.<code className="text-font-muted">IT</code>
          </h1>
        </div> */}

        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 rounded-full bg-teal-300 flex items-center justify-center">
            <p className="font-semibold text-gray-800">ES</p>
          </div>
        </div>
      </section>
    </nav>
  );
};
