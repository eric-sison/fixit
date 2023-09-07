import { FunctionComponent } from "react";
import { CardIcon } from "./CardIcon";

type EmptyTicketCardProps = {
  status: "request" | "active" | "closed" | "cancelled";
};

export const EmptyTicketCard: FunctionComponent<EmptyTicketCardProps> = ({ status }) => {
  return (
    <div className="w-full p-7 rounded-lg flex bg-zinc-900 border border-zinc-700/50">
      <div className="space-y-3 flex flex-col items-center justify-center">
        <div className="">
          {status === "request" ? (
            <>
              <CardIcon
                icon={<EmptyRequestTicketCardIcon />}
                title="No requests"
                description="There are no service requests at the moment."
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
                description="Closed tickets are those that have been resolved requests."
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
      <g fill="currentColor">
        <path d="M10 18v-2H8v-2h2v-2h2v2h2v2h-2v2h-2Z"></path>
        <path
          fillRule="evenodd"
          d="M6 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V9a7 7 0 0 0-7-7H6Zm0 2h7v5h6v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm9 .1A5.009 5.009 0 0 1 18.584 7H15V4.1Z"
          clipRule="evenodd"
        ></path>
      </g>
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
