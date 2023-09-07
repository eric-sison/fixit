"use client";

import { FunctionComponent, ReactNode } from "react";
import { TicketPanelHeader } from "./TicketPanelHeader";
import { useActiveTicketsStore } from "@fixhub/utils/stores/tickets";
import { EmptyTicketCard } from "./EmptyTicketCard";

type ActiveTicketPanelProps = {
  children: ReactNode | ReactNode[];
};

export const ActiveTicketPanel: FunctionComponent<ActiveTicketPanelProps> = ({ children }) => {
  const activeTickets = useActiveTicketsStore((state) => state.activeTickets);

  return (
    <div className="overflow-x-hidden">
      <TicketPanelHeader status="active" />
      {activeTickets.length === 0 ? <EmptyTicketCard status="active" /> : children}
    </div>
  );
};
