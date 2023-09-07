"use client";

import { FunctionComponent, ReactNode } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";

type SidebarInboxProps = {
  children: ReactNode | ReactNode[];
};

export const SidebarInbox: FunctionComponent<SidebarInboxProps> = ({ children }) => {
  return (
    <div>
      <header className="h-20 w-full p-4 border-b border-b-zinc-800 border-r border-r-zinc-800 flex items-center justify-center">
        <div className="flex items-center h-full w-full relative">
          <div className="absolute h-full flex items-center left-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              className="text-font-muted"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            className="w-full h-full rounded-lg bg-zinc-800/40 pl-11 pr-5 text-lg placeholder:text-zinc-600 border-2 border-transparent focus:border-blue-700 outline-none text-font-regular"
            placeholder="Search user..."
          />
        </div>
      </header>
      <ScrollArea.Root asChild>
        <aside className="h-[calc(100vh-10rem)] w-[28rem] border-r border-r-zinc-800 shrink-0">
          <ScrollArea.Viewport className="h-full w-full">{children}</ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-zinc-800 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
        </aside>
      </ScrollArea.Root>
    </div>
  );
};
