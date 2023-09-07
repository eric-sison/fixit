import { User } from "./users";

export type ServiceRequest = {
  requestor: User;
  details: string;
  createdAt: Date;
};
