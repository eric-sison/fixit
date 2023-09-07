"use client";

import { FunctionComponent, ReactNode } from "react";
import { TicketPanelHeader } from "./TicketPanelHeader";
import { useRequestTicketStore } from "@fixhub/utils/stores/tickets";
import { EmptyTicketCard } from "./EmptyTicketCard";

type RequestTicketPanelProps = {
  children: ReactNode | ReactNode[];
};

export const RequestTicketPanel: FunctionComponent<RequestTicketPanelProps> = ({ children }) => {
  const requests = useRequestTicketStore((state) => state.requests);

  return (
    <div className="overflow-x-hidden">
      <TicketPanelHeader status="request" />
      {requests.length === 0 ? <EmptyTicketCard status="request" /> : children}
    </div>
  );
};
