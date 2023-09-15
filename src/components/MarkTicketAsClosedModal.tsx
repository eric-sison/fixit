import { TicketSummary } from "@fixhub/types/ticket";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent, MutableRefObject, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { TicketTag } from "./TicketTag";
import dayjs from "dayjs";
import { useActiveTicketsStore, useClosedTicketsStore } from "@fixhub/utils/stores/tickets";

type MarkTicketAsClosedModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  ticket: TicketSummary;
};

export const MarkTicketAsClosedModal: FunctionComponent<MarkTicketAsClosedModalProps> = ({ open, setOpen, ticket }) => {
  const activeTickets = useActiveTicketsStore((state) => state.activeTickets);
  const setActiveTickets = useActiveTicketsStore((state) => state.setActiveTickets);

  const closedTickets = useClosedTicketsStore((state) => state.closedTickets);
  const setClosedTickets = useClosedTicketsStore((state) => state.setClosedTickets);

  const [details, setDetails] = useState("");

  const inputRef = useRef(null) as unknown as MutableRefObject<HTMLInputElement>;
  const textAreaRef = useRef(null) as unknown as MutableRefObject<HTMLTextAreaElement>;

  useEffect(() => {
    textAreaRef?.current?.focus()

  }, [open]);


  const handleAttachment = () => {
    inputRef?.current.click();
  };

  const reset = () => {
    setOpen(false);
    setDetails("");
  };

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={() => setOpen(false)} className="relative z-10">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-70" />
        </Transition.Child>

        <div className="fixed overflow-y-auto inset-0">
          <div className="flex py-10 justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[42rem] space-y-10 transform overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="space-y-5 px-2">
                  <div className="flex items-center gap-5">
                    <Image
                      src={ticket.requestor.avatar}
                      width={500}
                      height={500}
                      alt={"profile"}
                      className="inline-block h-[4rem] w-[4rem] rounded-full object-cover shrink-0 border-4 border-font-regular"
                    />
                    <section>
                      <h3 className="text-2xl font-semibold text-font-regular">{ticket.requestor.fullName}</h3>
                      <p className="text-font-regular/70 font-medium truncate">{ticket.requestor.positionTitle}</p>
                    </section>
                  </div>

                  <section>
                    <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-font-regular">
                      <code className="px-1 rounded text-3xl font-bold">{`#${ticket.ticketNo}`}</code>
                    </Dialog.Title>

                    <div className="mt-2">
                      <p className="text-font-regular/75 font-semibold text-2xl">{ticket.details}</p>
                    </div>

                    <div className="space-x-2 mt-1">
                      <TicketTag tag={ticket.category} />
                      <TicketTag tag={ticket.subCategory} />
                      <TicketTag tag={ticket.supportType} />
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex items-center gap-1 justify-end text-font-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="text-font-muted/75"
                        >
                          <g fill="currentColor">
                            <path d="M15 17a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"></path>
                            <path
                              fillRule="evenodd"
                              d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3H6ZM5 18V7h14v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1Z"
                              clipRule="evenodd"
                            ></path>
                          </g>
                        </svg>
                        <p className="font-medium text-sm text-font-muted/75">
                          {dayjs(ticket.createdAt).format("DD MMM YYYY")}
                        </p>
                      </div>
                      <p className="text-sm text-font-muted/50">|</p>
                      <div className="flex items-center gap-1 justify-end text-font-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          viewBox="0 0 24 24"
                          className="text-font-muted/75"
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
                        <p className="font-medium text-sm text-font-muted/75">
                          {dayjs(ticket.createdAt).format("hh:mm A")}
                        </p>
                      </div>
                    </div>

                    <main className="mt-10">
                      <div className="mb-10">
                        <section className="mb-2">
                          <input ref={inputRef} type="file" className="invisible absolute" />
                          <button
                            onClick={handleAttachment}
                            className="flex items-center gap-2 px-3 py-2 bg-zinc-800/70 rounded-md font-semibold hover:bg-zinc-800/50"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="1.2em"
                              height="1.2em"
                              viewBox="0 0 24 24"
                              className="text-font-regular group-hover:text-font-regular"
                            >
                              <path
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="m7.918 17.807l7.89-7.553a2.253 2.253 0 0 0 0-3.284a2.503 2.503 0 0 0-3.43 0l-7.834 7.498a4.28 4.28 0 0 0 0 6.24c1.8 1.723 4.718 1.723 6.518 0l7.949-7.608c2.652-2.54 2.652-6.656 0-9.196c-2.653-2.539-6.954-2.539-9.607 0L3 10.034"
                              ></path>
                            </svg>
                            <span>Attachments</span>
                          </button>
                        </section>
                      </div>

                      <form onSubmit={(e) => e.preventDefault()}>
                        <section>
                          <label htmlFor="details" className="pl-1 text-lg font-medium text-font-regular/80">
                            Resolution
                          </label>
                          <p className="pl-1 text-font-muted mb-2">
                            Please provide the details on how the request was resolved.
                          </p>
                          <textarea
                            ref={textAreaRef}
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                            id="details"
                            rows={5}
                            placeholder="Enter details here..."
                            className="w-full resize-none outline-none rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                          />
                        </section>

                        <section className="mt-4 mb-8 flex items-center justify-end gap-3">
                          <button
                            onClick={() => reset()}
                            className="px-3 py-2 bg-zinc-800 rounded-md font-semibold hover:bg-zinc-800/50"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => {
                              // update closed tickets state
                              const newClosedTickets = [...closedTickets];
                              newClosedTickets.push({ ...ticket, status: "closed" });
                              setClosedTickets(newClosedTickets);

                              // update active tickets state
                              const newActiveTickets = [...activeTickets];
                              const index = newActiveTickets.findIndex((activeTicket) => activeTicket.id === ticket.id);
                              newActiveTickets.splice(index, 1);

                              setActiveTickets(newActiveTickets);

                              reset();
                            }}
                            className="px-4 py-2 bg-blue-700 rounded-md font-semibold hover:bg-blue-800"
                          >
                            Confirm
                          </button>
                        </section>
                      </form>
                    </main>
                  </section>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
