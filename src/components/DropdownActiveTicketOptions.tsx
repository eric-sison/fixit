"use client";

import { FunctionComponent, useEffect, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CreateTicketModal } from "./CreateTicketModal";
import { useActiveTicketsStore } from "@fixhub/utils/stores/tickets";

export const DropdownActiveTicketOptions: FunctionComponent = () => {
  const [sortValue, setSortValue] = useState<string>("ticket_no");
  const [open, setOpen] = useState(false);

  const tickets = useActiveTicketsStore((state) => state.activeTickets);
  const setTickets = useActiveTicketsStore((state) => state.setActiveTickets);

  const sortFn = () => {
    let newTickets = [...tickets];
    let sorted = [];

    if (sortValue === "requestor") {
      sorted = newTickets.sort((a, b) => a.requestor.fullName.localeCompare(b.requestor.fullName));
    } else if (sortValue === "ticket_no") {
      sorted = newTickets.sort((a, b) => (a.ticketNo < b.ticketNo ? -1 : a.ticketNo > b.ticketNo ? 1 : 0));
    } else {
      sorted = newTickets.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    }

    setTickets(sorted);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(sortFn, [sortValue]);

  return (
    <>
      <CreateTicketModal open={open} setOpen={setOpen} />

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <button className="h-7 w-7 hover:bg-zinc-900 flex items-center justify-center rounded-md outline-none focus:ring focus:ring-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="text-font-regular"
            >
              <path
                fill="currentColor"
                d="M6.343 7.757L4.93 9.172l7.07 7.07l7.071-7.07l-1.414-1.415L12 13.414L6.343 7.757Z"
              ></path>
            </svg>
          </button>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            className="bg-zinc-900 w-64 rounded-md overflow-clip border border-zinc-800"
          >
            <DropdownMenu.Label className="px-3 py-2 font-medium text-font-muted/60 flex items-center gap-4">
              <p>Actions</p>
            </DropdownMenu.Label>
            <DropdownMenu.Group>
              <DropdownMenu.Item
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
                onClick={() => setOpen(true)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <path
                        fill="currentColor"
                        d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"
                      ></path>
                    </svg>
                    <p className="text-font-regular/70 text-lg">Create new ticket</p>
                  </div>
                </div>
              </DropdownMenu.Item>

              {/* <DropdownMenu.Item className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <path
                        fill="currentColor"
                        d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                      ></path>
                    </svg>
                    <p className="text-font-regular/70 text-lg">Mark as closed</p>
                  </div>
                </div>
              </DropdownMenu.Item>

              <DropdownMenu.Item className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <path
                        fill="currentColor"
                        d="M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586L6.225 4.81Z"
                      ></path>
                    </svg>
                    <p className="text-font-regular/70 text-lg">Cancel this ticket</p>
                  </div>
                </div>
              </DropdownMenu.Item> */}
            </DropdownMenu.Group>

            <DropdownMenu.Separator className="h-[1px] bg-zinc-800 m-[5px]" />

            <DropdownMenu.Label className="px-3 py-2 font-medium text-font-muted/60 flex items-center gap-4">
              <p>Sort tickets by:</p>
            </DropdownMenu.Label>

            <DropdownMenu.RadioGroup value={sortValue} onValueChange={setSortValue}>
              <DropdownMenu.RadioItem
                value="requestor"
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <g fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M16 7a4 4 0 1 1-8 0a4 4 0 0 1 8 0Zm-2 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M16 15a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6H6v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6h-2v-6Z"></path>
                      </g>
                    </svg>
                    <p className="text-font-regular/70 text-lg">Requestor</p>
                  </div>

                  <DropdownMenu.ItemIndicator>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.7em"
                      height="1.7em"
                      viewBox="0 0 24 24"
                      className="text-green-700"
                    >
                      <path
                        fill="currentColor"
                        d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                      ></path>
                    </svg>
                  </DropdownMenu.ItemIndicator>
                </div>
              </DropdownMenu.RadioItem>

              <DropdownMenu.RadioItem
                value="ticket_no"
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M8 4v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4h4V8h-4V4h-2v4h-4V4H8Zm6 10v-4h-4v4h4Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-font-regular/70 text-lg">Ticket Number</p>
                  </div>

                  <DropdownMenu.ItemIndicator>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.7em"
                      height="1.7em"
                      viewBox="0 0 24 24"
                      className="text-green-700"
                    >
                      <path
                        fill="currentColor"
                        d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                      ></path>
                    </svg>
                  </DropdownMenu.ItemIndicator>
                </div>
              </DropdownMenu.RadioItem>

              <DropdownMenu.RadioItem
                value="request_time"
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <g fill="currentColor">
                        <path d="M9 7h2v5h5v2H9V7Z"></path>
                        <path
                          fillRule="evenodd"
                          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10Zm-2 0a8 8 0 1 1-16 0a8 8 0 0 1 16 0Z"
                          clipRule="evenodd"
                        ></path>
                      </g>
                    </svg>
                    <p className="text-font-regular/70 text-lg">Time Requested</p>
                  </div>

                  <DropdownMenu.ItemIndicator>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.7em"
                      height="1.7em"
                      viewBox="0 0 24 24"
                      className="text-green-700"
                    >
                      <path
                        fill="currentColor"
                        d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                      ></path>
                    </svg>
                  </DropdownMenu.ItemIndicator>
                </div>
              </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};
