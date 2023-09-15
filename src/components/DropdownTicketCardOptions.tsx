"use client";

import { FunctionComponent, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { TicketSummary } from "@fixhub/types/ticket";
import { MarkTicketAsClosedModal } from "./MarkTicketAsClosedModal";
import { ActiveTicketDetailsSlideOver } from "./ActiveTicketDetailsSlideOver";

type DropdownTicketCardOptionsProps = {
  ticket: TicketSummary;
};

export const DropdownTicketCardOptions: FunctionComponent<DropdownTicketCardOptionsProps> = ({ ticket }) => {
  const [open, setOpen] = useState(false);
  const [openDetailsSlideOver, setOpenDetailsSlideOver] = useState(false);

  return (
    <>
      <ActiveTicketDetailsSlideOver open={openDetailsSlideOver} setOpen={setOpenDetailsSlideOver} ticket={ticket} />

      <MarkTicketAsClosedModal open={open} setOpen={setOpen} ticket={ticket} />
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="h-8 w-8 bg-zinc-900/70 hover:bg-zinc-900 flex items-center justify-center rounded-full group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.3em"
            height="1.3em"
            viewBox="0 0 24 24"
            className="text-lg text-font-muted"
          >
            <path
              fill="currentColor"
              d="M14 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"
            ></path>
          </svg>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content
            align="end"
            className="bg-zinc-900 w-44 rounded-md overflow-clip border border-zinc-800"
          >
            {/* <DropdownMenu.Label className="px-3 py-2 font-medium text-font-muted/60 flex items-center gap-4">
              <p>Actions</p>
            </DropdownMenu.Label> */}

            <DropdownMenu.Group>
              <DropdownMenu.Item
                onClick={() => setOpenDetailsSlideOver(true)}
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.2em"
                      height="1.2em"
                      viewBox="0 0 24 24"
                      className="text-font-regular/70"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485Z"
                        clipRule="evenodd"
                      ></path>
                    </svg> */}

                    <p className="text-font-regular/70">View details</p>
                  </div>
                </div>
              </DropdownMenu.Item>

              {ticket.status === "active" && (
                <DropdownMenu.Item
                  onClick={() => console.log("update details")}
                  className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 w-full">
                      <p className="text-font-regular/70">Update details</p>
                    </div>
                  </div>
                </DropdownMenu.Item>
              )}

              {ticket.status === "active" && <DropdownMenu.Separator className="h-[1px] bg-zinc-800 m-[5px]" />}

              {ticket.status === "active" && (
                <DropdownMenu.Item
                  onClick={() => setOpen(true)}
                  className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 w-full">
                      <p className="text-green-600">Mark as closed</p>
                    </div>
                  </div>
                </DropdownMenu.Item>
              )}

              {ticket.status === "active" && (
                <DropdownMenu.Item className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 w-full">
                      <p className="text-rose-600">Cancel ticket</p>
                    </div>
                  </div>
                </DropdownMenu.Item>
              )}
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};
