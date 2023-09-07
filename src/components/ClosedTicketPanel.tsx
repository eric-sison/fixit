"use client";

import { FunctionComponent, ReactNode } from "react";
import { TicketPanelHeader } from "./TicketPanelHeader";
import { EmptyTicketCard } from "./EmptyTicketCard";
import { useClosedTicketsStore } from "@fixhub/utils/stores/tickets";

type ClosedTicketPanelProps = {
  children: ReactNode | ReactNode[];
};

export const ClosedTicketPanel: FunctionComponent<ClosedTicketPanelProps> = ({ children }) => {
  const closedTickets = useClosedTicketsStore((state) => state.closedTickets);

  return (
    <div className="overflow-x-hidden">
      <TicketPanelHeader status="closed" />
      {closedTickets.length === 0 ? <EmptyTicketCard status="closed" /> : children}
    </div>
  );
};
