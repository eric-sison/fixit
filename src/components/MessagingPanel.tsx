"use client";

import { FunctionComponent } from "react";

export const MessagingPanel: FunctionComponent = () => {
  return (
    <main className="bg-zinc-950 w-full overflow-x-auto flex flex-col justify-between">
      <section className="h-full pt-5 px-5">content</section>
      <section className="h-14 px-5 my-4 flex items-center">
        <div className="flex items-center h-full w-full relative">
          <div className="absolute h-full flex items-center left-3">
            <button className="hover:bg-zinc-800 p-1 rounded group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                className="text-font-muted group-hover:text-font-regular"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196c-2.653-2.539-6.954-2.539-9.607 0L3 10.034"
                ></path>
              </svg>
            </button>
          </div>
          <input
            className="w-full h-full rounded-lg bg-zinc-800/40 pl-12 pr-5 text-lg placeholder:text-zinc-600 border-2 border-transparent focus:border-blue-700 outline-none text-font-regular"
            placeholder="Type a message..."
          />
        </div>
      </section>
    </main>
  );
};
