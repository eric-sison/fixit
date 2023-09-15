import { FunctionComponent } from "react";
import { CardIcon } from "./CardIcon";
import { ServiceStatus } from "@fixhub/types/request";

type EmptyTicketCardProps = {
  status: ServiceStatus;
};

export const EmptyTicketCard: FunctionComponent<EmptyTicketCardProps> = ({ status }) => {
  return (
    <div className="w-full p-7 rounded-lg flex bg-zinc-900 border border-zinc-700/50">
      <div className="space-y-3 flex flex-col items-center justify-center">
        <div className="">
          {status === "queue" ? (
            <>
              <CardIcon
                icon={<EmptyRequestTicketCardIcon />}
                title="No requests"
                description="There are no requests on queue at the moment."
              />
            </>
          ) : status === "active" ? (
            <>
              <CardIcon
                icon={<EmptyActiveTicketCardIcon />}
                title="No active tickets"
                description=" You have no currently active tickets at the moment."
              />
            </>
          ) : status === "closed" ? (
            <>
              <CardIcon
                icon={<EmptyClosedTicketCardIcon />}
                title="No closed tickets"
                description="Closed tickets are requests that have been resolved."
              />
            </>
          ) : (
            <>
              <CardIcon
                icon={<EmptyCancelledTicketCardIcon />}
                title="No cancelled tickets"
                description="Cancelled tickets are voided or revoked requests."
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const EmptyRequestTicketCardIcon: FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" className="text-blue-700">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h14Zm1 5.625h-7c-.552 0-1.156-.42-1.348-.938L10.654 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9.625Z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const EmptyActiveTicketCardIcon: FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className="text-amber-700">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="m1.75 13.25l3.5-3.5m0 3v-3h-3"></path>
        <path d="M8.25 13.25h6v-8.5h-6l-1.5-2h-5v4"></path>
      </g>
    </svg>
  );
};

const EmptyClosedTicketCardIcon: FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className="text-green-700">
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
        <path d="m8 1.75l5.25 2v5c0 2.25-2 4.5-5.25 5.5c-3.25-1-5.25-3-5.25-5.5v-5z"></path>
        <path d="m5.75 7.75l1.5 1.5l3-3.5"></path>
      </g>
    </svg>
  );
};

const EmptyCancelledTicketCardIcon: FunctionComponent = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16" className="text-rose-700">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.2 7.75v3.5H1.7v-9.5h6.5M4.75 14.2h6.5M8 11.7v2.5m6.2-12.45l-3.5 3.5m0-3.5l3.5 3.5"
      ></path>
    </svg>
  );
};
