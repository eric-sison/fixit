"use client";

import { TicketSummary } from "@fixhub/types/ticket";
import { FunctionComponent, ReactNode, createContext, useContext, useEffect, useState } from "react";
import { TicketPanelHeader } from "./TicketPanelHeader";
import { EmptyTicketCard } from "./EmptyTicketCard";
import { ServiceStatus } from "@fixhub/types/request";

type TicketPanelProps = {
  children: ReactNode | ReactNode[];
  tickets: TicketSummary[];
  status: ServiceStatus;
};

type TicketSummaryContextState = Omit<TicketPanelProps, "children" | "status"> & {
  setTickets: (tickets: TicketSummary[]) => void;
};

const TicketSummaryContext = createContext<TicketSummaryContextState>({ tickets: [], setTickets: () => undefined });

export const TicketPanel: FunctionComponent<TicketPanelProps> = ({ children, tickets, status }) => {
  const [myTickets, setMyTickets] = useState(tickets);

  //useEffect(() => console.log(tickets), [tickets]);

  return (
    <div className="overflow-x-hidden">
      <TicketSummaryContext.Provider value={{ tickets: myTickets, setTickets: setMyTickets }}>
        <TicketPanelHeader status={status} />
        {myTickets.length === 0 ? <EmptyTicketCard status={status} /> : children}
      </TicketSummaryContext.Provider>
    </div>
  );
};

export const useTickets = () => {
  const { tickets, setTickets } = useContext(TicketSummaryContext);

  if (tickets === undefined) throw new Error("Tickets should be inside the Provider.");

  return { tickets, setTickets };
};
