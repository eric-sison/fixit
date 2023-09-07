"use client";

import { FunctionComponent, useEffect } from "react";
import { TicketPanel } from "./TicketPanel";
import { TicketPanelContent } from "./TicketPanelContent";
import { useActiveTicketsStore, useClosedTicketsStore, useRequestTicketStore } from "@fixhub/utils/stores/tickets";
import { ActiveTicketPanel } from "./ActiveTicketPanel";
import { ClosedTicketPanel } from "./ClosedTicketPanel";
import { RequestTicketPanel } from "./RequestTicketPanel";
import { RequestPanelContent } from "./RequestPanelContent";
import requests from "../../mock/requests";

export const TicketOverviewPagePanel: FunctionComponent = () => {
  //const { tickets: activeTickets } = useTickets();
  const activeTickets = useActiveTicketsStore((state) => state.activeTickets);
  const closedTickets = useClosedTicketsStore((state) => state.closedTickets);

  /**
   *  Temporary solution -> this is for mock data only
   */
  const myRequests = useRequestTicketStore((state) => state.requests);
  const setRequests = useRequestTicketStore((state) => state.setRequests);

  useEffect(() => {
    setRequests(requests);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="grid grid-cols-4 gap-3">
      <RequestTicketPanel>
        <RequestPanelContent requests={myRequests} />
      </RequestTicketPanel>

      <ActiveTicketPanel>
        <TicketPanelContent tickets={activeTickets} />
      </ActiveTicketPanel>

      <ClosedTicketPanel>
        <TicketPanelContent tickets={closedTickets} />
      </ClosedTicketPanel>

      <TicketPanel tickets={[]} status="cancelled">
        <TicketPanelContent tickets={[]} />
      </TicketPanel>
    </div>
  );
};
