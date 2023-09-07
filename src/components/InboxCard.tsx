import { FunctionComponent } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { InboxSummary } from "@fixhub/types/inbox";

type InboxCardProps = {
  inboxSummary: InboxSummary;
};

export const InboxCard: FunctionComponent<InboxCardProps> = ({ inboxSummary }) => {
  return (
    <div
      role="button"
      className="border-b border-b-zinc-800 last:border-b-transparent h-36 p-6 flex gap-4 hover:bg-zinc-800/30 border-l-4 border-l-transparent hover:border-l-blue-800"
    >
      <Image
        src={inboxSummary.avatar}
        width={500}
        height={500}
        alt={"profile"}
        className="inline-block h-[4rem] w-[4rem] rounded-full object-cover shrink-0"
      />

      <div className="flex flex-col justify-between">
        <section className="w-80">
          <div className="flex items-center justify-between">
            <h3
              className={`${
                inboxSummary.status === "read" ? "text-font-regular/80" : "text-blue-700 font-bold"
              } text-xl truncate`}
            >
              {inboxSummary.fullName}
            </h3>

            {inboxSummary.status === "unread" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.8em"
                height="0.8em"
                viewBox="0 0 24 24"
                className="text-blue-700"
              >
                <path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2z"></path>
              </svg>
            )}
          </div>
          <p
            className={`${
              inboxSummary.status === "read" ? "text-font-muted/70" : "text-font-regular/80 font-medium"
            } truncate text-lg`}
          >
            {inboxSummary.lastMessage}
          </p>
        </section>

        <section className="flex items-center gap-3">
          <div className="flex items-center gap-1 justify-end text-font-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-muted/75"
            >
              <g fill="currentColor">
                <path d="M15 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></path>
                <path
                  fillRule="evenodd"
                  d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM5 18V7h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <p className="font-medium text-sm text-font-muted/75">{dayjs(inboxSummary.date).format("DD MMM YYYY")}</p>
          </div>
          <p className="text-sm text-font-muted/50">|</p>
          <div className="flex items-center gap-1 justify-end text-font-muted">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-muted/75"
            >
              <g fill="currentColor">
                <path d="M9 7h2v5h5v2H9V7Z"></path>
                <path
                  fillRule="evenodd"
                  d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                  clipRule="evenodd"
                ></path>
              </g>
            </svg>
            <p className="font-medium text-sm text-font-muted/75">{dayjs(inboxSummary.date).format("hh:mm A")}</p>
          </div>
        </section>
      </div>
    </div>
  );
};
