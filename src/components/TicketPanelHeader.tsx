"use client";

import { FunctionComponent } from "react";
import { DropdownActiveTicketOptions } from "./DropdownActiveTicketOptions";

type TicketPanelHeaderProps = {
  status: "request" | "active" | "closed" | "cancelled";
};

export const TicketPanelHeader: FunctionComponent<TicketPanelHeaderProps> = ({ status }) => {
  return (
    <>
      <h3 className="mb-[0.6rem] text-xl bg-zinc-950 py-3 px-4 rounded-lg flex justify-between items-center">
        <div className="flex items-center gap-2">
          {status === "request" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-muted"
            >
              <path
                fill="currentColor"
                d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"
              ></path>
            </svg>
          ) : status === "active" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-muted"
            >
              <g fill="currentColor">
                <path d="M12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z"></path>
                <path
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          ) : status === "closed" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-muted"
            >
              <g fill="currentColor">
                <path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415l-7.071 7.07Z"></path>
                <path
                  fillRule="evenodd"
                  d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-muted"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M18.364 5.636A9 9 0 1 1 5.636 18.364A9 9 0 0 1 18.364 5.636Zm-2.172 11.97L6.393 7.808a7.001 7.001 0 0 0 9.8 9.8ZM16.95 7.05a7.002 7.002 0 0 1 .657 9.142l-9.8-9.799a7.001 7.001 0 0 1 9.143.657Z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          <span className="font-medium text-font-regular/70 tracking-wide">
            {status === "request"
              ? "Requests"
              : status === "active"
              ? "Active"
              : status === "closed"
              ? "Closed"
              : "Cancelled"}
          </span>
        </div>

        {status === "active" && <DropdownActiveTicketOptions />}
        {status === "closed" && "CL"}
        {status === "cancelled" && "CA"}
      </h3>
    </>
  );
};
