import { ServiceRequest } from "@fixhub/types/request";
import { FunctionComponent } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { DropdownRequestCardOptions } from "./DropdownRequestCardOptions";

type RequestCardProps = {
  request: ServiceRequest;
};

export const RequestCard: FunctionComponent<RequestCardProps> = ({ request }) => {
  return (
    <div className="bg-zinc-950/50 max-h-64 p-4 flex items-start gap-5 group last:mb-0 border-x border-x-zinc-800/70 first:border-t first:border-t-zinc-800/70 border-b border-b-zinc-800/70 first:rounded-t-lg last:border-b-zinc-800/70 last:rounded-b-lg">
      <Image
        src={request.requestor.avatar}
        width={500}
        height={500}
        alt={"profile"}
        className="inline-block h-[2.5rem] w-[2.5rem] rounded-full object-cover shrink-0"
      />

      <section className="w-full">
        <header className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">{request.requestor.fullName}</h3>
            <p className="text-sm text-font-regular/50 font-medium line-clamp-1">{request.requestor.positionTitle}</p>
          </div>

          <DropdownRequestCardOptions request={request} />
        </header>

        <main className="mt-4 mb-2 pr-7">
          <p className="text-lg text-font-regular/80 font-medium leading-tight line-clamp-2">{request.details}</p>
        </main>

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
            <p className="font-medium text-sm text-font-muted/75">{dayjs(request.createdAt).format("DD MMM YYYY")}</p>
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
            <p className="font-medium text-sm text-font-muted/75">{dayjs(request.createdAt).format("hh:mm A")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};
