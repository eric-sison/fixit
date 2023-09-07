import { User } from "./users";

export type TicketSummary = {
  id: string;
  ticketNo: number;
  requestor: User;
  category: string;
  subCategory: string;
  supportType: string;
  details: string;
  createdAt: Date;
  status: "active" | "closed" | "cancelled";
};

export type ClosedTicket = {
  ticket: TicketSummary;
  resolution: string;
  attachments?: string[];
};

export type SupportType = {
  type: string;
};

export type Category = {
  name: string;
  subCategories: string[];
};
