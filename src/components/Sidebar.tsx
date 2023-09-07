"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FunctionComponent } from "react";

export const Sidebar: FunctionComponent = () => {
  const pathName = usePathname();

  return (
    <aside className="w-64 bg-zinc-950/40 shrink-0 h-full border-r border-r-zinc-800 px-3 py-7">
      <ul className="space-y-2">
        <div className="group">
          <Link
            href="/insights"
            role="button"
            className={`${
              pathName === "/insights" && "bg-zinc-500 bg-opacity-10 text-font-regular"
            } flex items-center gap-4 group-hover:bg-zinc-500 group-hover:bg-opacity-10 text-font-muted group-hover:text-font-regular px-3 py-2 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className={`${
                pathName === "/insights" ? "text-fuchsia-700" : "text-font-muted"
              } group-hover:text-fuchsia-700`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15 8h4v12H5V10h4V4h6v4Zm-2-2h-2v12h2V6Zm2 4v8h2v-8h-2Zm-6 2v6H7v-6h2Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium text-lg">Insights</span>
          </Link>
        </div>

        <div className="group">
          <Link
            href="/tickets"
            role="button"
            className={`${
              pathName === "/tickets" && "bg-zinc-500 bg-opacity-10 text-font-regular"
            } flex items-center gap-4 group-hover:bg-zinc-500 group-hover:bg-opacity-10 text-font-muted group-hover:text-font-regular px-3 py-2 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className={`${pathName === "/tickets" ? "text-blue-700" : "text-font-muted"} group-hover:text-blue-700`}
            >
              <g fill="currentColor">
                <path d="M6 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Zm7 0a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V7Z"></path>
                <path
                  fillRule="evenodd"
                  d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2 0h16v16H4V4Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <span className="font-medium text-lg">Tickets</span>
          </Link>
        </div>

        <div className="group">
          <Link
            href="/messages"
            role="button"
            className={`${
              pathName === "/messages" && "bg-zinc-500 bg-opacity-10 text-font-regular"
            } flex items-center gap-4 group-hover:bg-zinc-500 group-hover:bg-opacity-10 text-font-muted group-hover:text-font-regular px-3 py-2 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className={`${pathName === "/messages" ? "text-rose-700" : "text-font-muted"} group-hover:text-rose-700`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3.01 5.838a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v11.324a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11c0-.048.003-.094.01-.14v-.184ZM5 8.062v9.1h14v-9.1l-4.879 4.879a3 3 0 0 1-4.242 0L5 8.06Zm1.572-1.256h10.856l-4.72 4.72a1 1 0 0 1-1.415 0l-4.72-4.72Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium text-lg">Messages</span>
          </Link>
        </div>

        <div className="group">
          <Link
            href="/tasks"
            role="button"
            className={`${
              pathName === "/tasks" && "bg-zinc-500 bg-opacity-10 text-font-regular"
            } flex items-center gap-4 group-hover:bg-zinc-500 group-hover:bg-opacity-10 text-font-muted group-hover:text-font-regular px-3 py-2 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className={`${pathName === "/tasks" ? "text-amber-700" : "text-font-muted"} group-hover:text-amber-700`}
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M3 5a3 3 0 0 1 3-3h8a7 7 0 0 1 7 7v10a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5Zm10-1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9h-6V4Zm5.584 3A5.009 5.009 0 0 0 15 4.1V7h3.584Z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="font-medium text-lg">Daily Logs</span>
          </Link>
        </div>

        <div className="group">
          <Link
            href="/reports"
            role="button"
            className={`${
              pathName === "/reports" && "bg-zinc-500 bg-opacity-10 text-font-regular"
            } flex items-center gap-4 group-hover:bg-zinc-500 group-hover:bg-opacity-10 text-font-muted group-hover:text-font-regular px-3 py-2 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className={`${
                pathName === "/reports" ? "text-indigo-700" : "text-font-muted"
              } group-hover:text-indigo-700`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4H16V6H8V4ZM18 6H22V18H18V22H6V18H2V6H6V2H18V6ZM20 16H18V14H6V16H4V8H20V16ZM8 16H16V20H8V16ZM8 10H6V12H8V10Z"
                fill="currentColor"
              />
            </svg>
            <span className="font-medium text-lg">Reports</span>
          </Link>
        </div>

        <div className="group">
          <Link
            href="/settings"
            role="button"
            className={`${
              pathName === "/settings" && "bg-zinc-500 bg-opacity-10 text-font-regular"
            } flex items-center gap-4 group-hover:bg-zinc-500 group-hover:bg-opacity-10 text-font-muted group-hover:text-font-regular px-3 py-2 rounded`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              className={`${
                pathName === "/settings" ? "text-green-700" : "text-font-muted"
              } group-hover:text-green-700`}
            >
              <g fill="currentColor">
                <path d="M17 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></path>
                <path
                  fillRule="evenodd"
                  d="M0 12a7 7 0 0 1 7-7h10a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7Zm7-5h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <span className="font-medium text-lg">Settings</span>
          </Link>
        </div>
      </ul>
    </aside>
  );
};
