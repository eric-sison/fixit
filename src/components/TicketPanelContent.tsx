"use client";

import React, { FunctionComponent } from "react";
import { TicketCard } from "./TicketCard";
import { useTickets } from "./TicketPanel";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useActiveTicketsStore } from "@fixhub/utils/stores/tickets";
import { TicketSummary } from "@fixhub/types/ticket";

type TicketPanelContentProps = {
  tickets: TicketSummary[];
};

export const TicketPanelContent: FunctionComponent<TicketPanelContentProps> = ({ tickets }) => {
  // const { tickets } = useTickets();
  // const tickets = useActiveTicketsStore((state) => state.activeTickets);

  return (
    <ScrollArea.Root className="h-[calc(100vh-12.5rem)] overflow-x-hidden overflow-y-auto rounded-lg">
      <ScrollArea.Viewport className="w-full h-full">
        {tickets.map((ticket, index) => (
          <React.Fragment key={index}>
            <TicketCard ticket={ticket} />
          </React.Fragment>
        ))}
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-zinc-800 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
