"use client";

import React, { FunctionComponent } from "react";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { RequestCard } from "./RequestCard";
import { ServiceRequest } from "@fixhub/types/request";

type RequestPanelContentProps = {
  requests: ServiceRequest[];
};

export const RequestPanelContent: FunctionComponent<RequestPanelContentProps> = ({ requests }) => {
  return (
    <ScrollArea.Root className="h-[calc(100vh-12.5rem)] overflow-x-hidden overflow-y-auto rounded-lg">
      <ScrollArea.Viewport className="w-full h-full">
        {requests.map((request, index) => (
          <React.Fragment key={index}>
            <RequestCard request={request} />
          </React.Fragment>
        ))}
      </ScrollArea.Viewport>

      <ScrollArea.Scrollbar
        className="flex outline-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="flex-1 bg-zinc-800 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
};
