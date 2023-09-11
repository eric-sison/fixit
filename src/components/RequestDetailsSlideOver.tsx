import { ServiceRequest } from "@fixhub/types/request";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { CreateTicketFromRequestModal } from "./CreateTicketFromRequestModal";

type RequestDetailsSlideOverProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  request: ServiceRequest;
};

export const RequestDetailsSlideOver: FunctionComponent<RequestDetailsSlideOverProps> = ({
  open,
  setOpen,
  request,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <CreateTicketFromRequestModal open={openModal} setOpen={setOpenModal} request={request} />

      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-70" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel>
                    <div className="flex h-full w-[40rem] flex-col bg-zinc-900 border-l border-l-zinc-800 ">
                      <header className="mb-2 border-b border-b-zinc-700 py-7 px-10">
                        <div className="flex items-center gap-4">
                          <Image
                            src={request.requestor.avatar}
                            width={500}
                            height={500}
                            alt={"profile"}
                            className="inline-block h-[4rem] w-[4rem] rounded-full object-cover shrink-0 border-4 border-font-regular"
                          />

                          <section>
                            <h3 className="text-3xl font-bold text-font-regular/90">{request.requestor.fullName}</h3>
                            <p className="font-semibold text-xl text-font-muted">{request.requestor.positionTitle}</p>
                          </section>
                        </div>
                      </header>

                      <section className="flex flex-col gap-10 px-10">
                        <main className="mt-5">
                          <h2 className="text-2xl text-font-regular/80">{request.details}</h2>

                          <div className="flex items-center gap-3 mt-2">
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
                                {dayjs(request.createdAt).format("DD MMM YYYY")}
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
                                {dayjs(request.createdAt).format("hh:mm A")}
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mt-5 z-[100]">
                            <button
                              onClick={() => {
                                setOpen(false);
                                setOpenModal(true);
                              }}
                              className="px-10 py-2 bg-zinc-800 rounded-md font-semibold hover:bg-zinc-800/50"
                            >
                              Creat ticket
                            </button>
                            <button
                              onClick={() => console.log("2")}
                              className="px-10 py-2 bg-zinc-800 rounded-md font-semibold hover:bg-zinc-800/50"
                            >
                              Transfer
                            </button>
                            <button
                              onClick={() => console.log("3")}
                              className="px-10 py-2 bg-zinc-800 rounded-md font-semibold hover:bg-zinc-800/50"
                            >
                              Cancel
                            </button>
                          </div>
                        </main>

                        <section className="space-y-2">
                          <div className="border-l-4 pb-10 px-2 border-l-blue-700">
                            <h3 className="text-lg inline text-font-regular/90">Requested by</h3>{" "}
                            <h3 className="text-lg inline font-bold text-font-regular">{request.requestor.fullName}</h3>
                            <p className="text-font-muted">{dayjs(request.createdAt).format("MMM DD, YYYY")}</p>
                          </div>

                          <div className="border-l-4 pb-10 px-2 border-l-blue-700">
                            <h3 className="text-lg inline text-font-regular/90">Assigned to</h3>{" "}
                            <h3 className="text-lg inline font-bold text-font-regular">Eric Sison</h3>
                            <p className="text-font-muted">{dayjs(request.createdAt).format("MMM DD, YYYY")}</p>
                          </div>
                        </section>
                      </section>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
