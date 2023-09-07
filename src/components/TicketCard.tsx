import { TicketSummary } from "@fixhub/types/ticket";
import { FunctionComponent } from "react";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import { TicketTag } from "./TicketTag";
import { DropdownTicketCardOptions } from "./DropdownTicketCardOptions";

type TicketCardProps = {
  ticket: TicketSummary;
};

export const TicketCard: FunctionComponent<TicketCardProps> = ({ ticket }) => {
  return (
    <div className="bg-zinc-950/50 max-h-64 p-4 flex items-start gap-3 group last:mb-0 border-x border-x-zinc-800/70 first:border-t first:border-t-zinc-800/70 border-b border-b-zinc-800/70 first:rounded-t-lg last:border-b-zinc-800/70 last:rounded-b-lg">
      <Image
        src={ticket.requestor.avatar}
        width={500}
        height={500}
        alt={"profile"}
        className="inline-block h-[3rem] w-[3rem] rounded-full object-cover shrink-0"
      />

      <div className="space-y-5 w-full h-full">
        <section className="space-y-1">
          <h2 className="flex justify-between">
            <div className="text-2xl font-extrabold text-font-regular/90">
              <Link
                href=""
                className="border-b-2 border-b-transparent hover:border-b-font-regular"
              >{`#${ticket.ticketNo}`}</Link>
              <p className="text-blue-500 font-medium text-sm cursor-pointer border-b border-b-transparent hover:border-b-blue-700">
                {ticket.requestor.fullName}
              </p>
            </div>

            <DropdownTicketCardOptions ticket={ticket} />
          </h2>
          <div className="w-[17.5rem] mb-5">
            <p className="text-xl text-font-regular/70 font-medium leading-tight line-clamp-2 mt-4">{ticket.details}</p>

            <section className="space-x-2 mt-2">
              <TicketTag tag={ticket.category} />
              <TicketTag tag={ticket.subCategory} />
              <TicketTag tag={ticket.supportType} />
            </section>
          </div>
        </section>

        <div className="flex items-center gap-3">
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
            <p className="font-medium text-sm text-font-muted/75">{dayjs(ticket.createdAt).format("DD MMM YYYY")}</p>
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
            <p className="font-medium text-sm text-font-muted/75">{dayjs(ticket.createdAt).format("hh:mm A")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
