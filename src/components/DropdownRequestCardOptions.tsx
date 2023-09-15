import { FunctionComponent, useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ServiceRequest } from "@fixhub/types/request";
import { CreateTicketFromRequestModal } from "./CreateTicketFromRequestModal";
import { RequestDetailsSlideOver } from "./RequestDetailsSlideOver";

type DropdownRequestCardOptionsProps = {
  request: ServiceRequest;
};

export const DropdownRequestCardOptions: FunctionComponent<DropdownRequestCardOptionsProps> = ({ request }) => {
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);

  return (
    <>
      <CreateTicketFromRequestModal open={open} setOpen={setOpen} request={request} />
      <RequestDetailsSlideOver open={openDetails} setOpen={setOpenDetails} request={request} />
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
            <DropdownMenu.Group>
              <DropdownMenu.Item
                onClick={() => setOpenDetails(true)}
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <p className="text-font-regular/70">View details</p>
                  </div>
                </div>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                onClick={() => console.log(request.requestor.fullName)}
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <p className="text-font-regular/70">Transfer request</p>
                  </div>
                </div>
              </DropdownMenu.Item>

              <DropdownMenu.Separator className="h-[1px] bg-zinc-800 m-[5px]" />

              <DropdownMenu.Item
                onClick={() => setOpen(true)}
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <p className="text-amber-600">Create new ticket</p>
                  </div>
                </div>
              </DropdownMenu.Item>

              <DropdownMenu.Item
                onClick={() => console.log(request.requestor.fullName)}
                className="px-3 py-2 hover:bg-zinc-800 cursor-pointer outline-none"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 w-full">
                    <p className="text-rose-600">Cancel request</p>
                  </div>
                </div>
              </DropdownMenu.Item>
            </DropdownMenu.Group>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  );
};
