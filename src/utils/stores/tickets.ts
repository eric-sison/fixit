import { ServiceRequest } from "@fixhub/types/request";
import { TicketSummary } from "@fixhub/types/ticket";
import { create } from "zustand";

type RequestTicketStore = {
  requests: ServiceRequest[];
  setRequests: (request: ServiceRequest[]) => void;
};

type ActiveTicketStore = {
  activeTickets: TicketSummary[];
  setActiveTickets: (tickets: TicketSummary[]) => void;
};

type ClosedTicketStore = {
  closedTickets: TicketSummary[];
  setClosedTickets: (closedTickets: TicketSummary[]) => void;
};

export const useRequestTicketStore = create<RequestTicketStore>()((set) => ({
  requests: [],
  setRequests: (requests) => set({ requests }),
}));

export const useActiveTicketsStore = create<ActiveTicketStore>()((set) => ({
  activeTickets: [],
  setActiveTickets: (activeTickets) => set({ activeTickets }),
}));

export const useClosedTicketsStore = create<ClosedTicketStore>()((set) => ({
  closedTickets: [],
  setClosedTickets: (closedTickets) => set({ closedTickets }),
}));
