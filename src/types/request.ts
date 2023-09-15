import { User } from "./users";

export type ServiceRequest = {
  id: string;
  requestor: User;
  details: string;
  createdAt: Date;
};

export type ServiceStatus = "queue" | "active" | "closed" | "cancelled";
