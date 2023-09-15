import { ServiceRequest } from "@fixhub/types/request";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent, useEffect, useState } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import { Category, SupportType } from "@fixhub/types/ticket";
import supportTypes from "../../mock/support-types";
import categories from "../../mock/categories";
import { useActiveTicketsStore, useRequestTicketStore } from "@fixhub/utils/stores/tickets";
import requests from "../../mock/requests";

type CreateTicketFromRequestModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  request: ServiceRequest;
};

export const CreateTicketFromRequestModal: FunctionComponent<CreateTicketFromRequestModalProps> = ({
  open,
  setOpen,
  request,
}) => {
  const myRequests = useRequestTicketStore((state) => state.requests);
  const setMyRequests = useRequestTicketStore((state) => state.setRequests);

  const activeTickets = useActiveTicketsStore((state) => state.activeTickets);
  const setActiveTickets = useActiveTicketsStore((state) => state.setActiveTickets);

  // states used for support type
  const [selectedSupportType, setSelectedSupportType] = useState<SupportType>(supportTypes[0]);
  const [querySupportType, setQuerySupportType] = useState("");

  // states used for categories
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);
  const [queryCategory, setQueryCategory] = useState("");

  // states used for sub-categories
  const [subCategories, setSubCategories] = useState<string[]>(selectedCategory.subCategories);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>(selectedCategory.subCategories[0]);
  const [querySubCategory, setQuerySubCategory] = useState("");

  useEffect(() => {
    setSubCategories(selectedCategory.subCategories);
    setSelectedSubCategory(selectedCategory.subCategories[0]);
  }, [selectedCategory.name, selectedCategory.subCategories]);

  const filteredSupportTypes =
    querySupportType === ""
      ? supportTypes
      : supportTypes.filter(({ type }) => {
          return type.toLowerCase().includes(querySupportType.toLowerCase());
        });

  const filteredCategories =
    queryCategory === ""
      ? categories
      : categories.filter((category) => {
          return category.name.toLowerCase().includes(queryCategory.toLowerCase());
        });

  const filteredSubCategories =
    querySubCategory === ""
      ? subCategories
      : subCategories.filter((subCategory) => {
          return subCategory.toLowerCase().includes(querySubCategory.toLowerCase());
        });

  const reset = () => {
    setOpen(false);
    setSelectedSupportType(supportTypes[0]);
    setSelectedCategory(categories[0]);
    setSelectedSubCategory(selectedCategory.subCategories[0]);
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
              <Dialog.Panel className="w-[42rem] transform overflow-hidden rounded-lg bg-zinc-900 border border-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                <header className="flex items-center gap-5">
                  <Image
                    src={request.requestor.avatar}
                    width={500}
                    height={500}
                    alt={"profile"}
                    className="inline-block h-[4rem] w-[4rem] rounded-full object-cover shrink-0 border-4 border-font-regular"
                  />

                  <div>
                    <h3 className="text-2xl font-semibold text-font-regular">{request.requestor.fullName}</h3>
                    <p className="text-font-regular/70 font-medium truncate">{request.requestor.positionTitle}</p>
                  </div>
                </header>

                <main className="mt-5">
                  <p className="text-2xl text-font-regular/90">{request.details}</p>

                  <div className="flex items-center gap-3 mt-1">
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
                </main>

                <form
                  className="mt-12"
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >

                  <section className="flex items-center gap-4 justify-between">
                    <div className="flex flex-col w-full">
                      <label htmlFor="support-type" className="pl-1 font-medium text-sm text-font-regular/80">
                        Support type
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">The type of support for this request.</p>

                      <Combobox value={selectedSupportType} onChange={setSelectedSupportType}>
                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <Combobox.Input
                              id="support-type"
                              onChange={(e) => setQuerySupportType(e.target.value)}
                              displayValue={(supportType: SupportType) => supportType?.type}
                              className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                            />
                            <Combobox.Button className="absolute z-10 h-full w-full flex items-center justify-end pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M6.343 7.757L4.93 9.172l7.07 7.07l7.071-7.07l-1.414-1.415L12 13.414L6.343 7.757Z"
                                ></path>
                              </svg>
                            </Combobox.Button>
                          </div>

                          {filteredSupportTypes.length === 0 ? null : (
                            <Combobox.Options className="absolute z-20 border border-zinc-800 mt-2 rounded max-h-96 overflow-auto min-w-[10rem]">
                              {filteredSupportTypes.map((supportType, index) => (
                                <Combobox.Option key={index} value={supportType} as={Fragment}>
                                  {({ active, selected }) => (
                                    <li
                                      role="button"
                                      className={`${
                                        active ? "text-font-regular" : "text-font-muted"
                                      } px-3 py-2 flex gap-3 items-center bg-zinc-950 border-b border-b-zinc-800/40 last:border-b-transparent cursor-pointer`}
                                    >
                                      <section className="flex items-center justify-between w-full">
                                        <h3 className="font-medium">{supportType.type}</h3>
                                        {selected && (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 24 24"
                                            className="text-green-700"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                                            ></path>
                                          </svg>
                                        )}
                                      </section>
                                    </li>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}
                        </div>
                      </Combobox>

                      {/* <input
                        id="support-type"
                        className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 pl-11 py-2 border border-zinc-800 focus:border-blue-700"
                      /> */}
                    </div>
                  </section>

                  <section className="mt-7 flex items-center gap-4 justify-between">
                    <div className="flex flex-col w-full">
                      <label htmlFor="category" className="pl-1 font-medium text-sm text-font-regular/80">
                        Category
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">Select category for this request.</p>

                      <Combobox value={selectedCategory} onChange={setSelectedCategory}>
                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <Combobox.Input
                              id="category"
                              onChange={(e) => setQueryCategory(e.target.value)}
                              displayValue={(supportType: Category) => supportType?.name}
                              className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                            />
                            <Combobox.Button className="absolute z-10 h-full w-full flex items-center justify-end pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M6.343 7.757L4.93 9.172l7.07 7.07l7.071-7.07l-1.414-1.415L12 13.414L6.343 7.757Z"
                                ></path>
                              </svg>
                            </Combobox.Button>
                          </div>

                          {filteredCategories.length === 0 ? null : (
                            <Combobox.Options className="absolute z-[100] border border-zinc-800 mt-2 rounded max-h-96 overflow-auto min-w-full">
                              {filteredCategories.map((category, index) => (
                                <Combobox.Option key={index} value={category} as={Fragment}>
                                  {({ active, selected }) => (
                                    <li
                                      role="button"
                                      className={`${
                                        active ? "text-font-regular" : "text-font-muted"
                                      } px-3 py-2 flex gap-3 items-center bg-zinc-950 border-b border-b-zinc-800/40 last:border-b-transparent cursor-pointer`}
                                    >
                                      <section className="flex items-center justify-between w-full">
                                        <h3 className="font-medium">{category.name}</h3>
                                        {selected && (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 24 24"
                                            className="text-green-700"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                                            ></path>
                                          </svg>
                                        )}
                                      </section>
                                    </li>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}
                        </div>
                      </Combobox>

                      {/* <input
                        id="category"
                        className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 pl-11 py-2 border border-zinc-800 focus:border-blue-700"
                      /> */}
                    </div>

                    <div className="flex flex-col w-full">
                      <label htmlFor="sub-category" className="pl-1 font-medium text-sm text-font-regular/80">
                        Sub-category
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">Select sub-category for this request.</p>

                      <Combobox value={selectedSubCategory} onChange={setSelectedSubCategory}>
                        <div className="relative">
                          <div className="flex items-center justify-between">
                            <Combobox.Input
                              id="sub-category"
                              onChange={(e) => setQuerySubCategory(e.target.value)}
                              displayValue={(subCategory: string) => subCategory}
                              className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                            />
                            <Combobox.Button className="absolute z-10 h-full w-full flex items-center justify-end pr-2">
                              <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M6.343 7.757L4.93 9.172l7.07 7.07l7.071-7.07l-1.414-1.415L12 13.414L6.343 7.757Z"
                                ></path>
                              </svg>
                            </Combobox.Button>
                          </div>

                          {filteredSubCategories.length === 0 ? null : (
                            <Combobox.Options className="absolute border border-zinc-800 mt-2 rounded max-h-48 overflow-auto min-w-full">
                              {filteredSubCategories.map((subCategory, index) => (
                                <Combobox.Option key={index} value={subCategory} as={Fragment}>
                                  {({ active, selected }) => (
                                    <li
                                      role="button"
                                      className={`${
                                        active ? "text-font-regular" : "text-font-muted"
                                      } px-3 py-2 flex gap-3 items-center bg-zinc-950 border-b border-b-zinc-800/40 last:border-b-transparent cursor-pointer`}
                                    >
                                      <section className="flex items-center justify-between w-full">
                                        <h3 className="font-medium">{subCategory}</h3>
                                        {selected && (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1.2em"
                                            height="1.2em"
                                            viewBox="0 0 24 24"
                                            className="text-green-700"
                                          >
                                            <path
                                              fill="currentColor"
                                              d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                                            ></path>
                                          </svg>
                                        )}
                                      </section>
                                    </li>
                                  )}
                                </Combobox.Option>
                              ))}
                            </Combobox.Options>
                          )}
                        </div>
                      </Combobox>

                      {/* <input
                        id="sub-category"
                        className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 pl-11 py-2 border border-zinc-800 focus:border-blue-700"
                      /> */}
                    </div>
                  </section>

                  <section className="mt-8">
                    <div className="flex flex-col w-full">
                      <label htmlFor="remarks" className="pl-1 font-medium text-sm text-font-regular/80">
                        Remarks
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">
                        You may provide some additional details for this request.
                      </p>
                      <textarea
                        // value={details}
                        // onChange={(e) => setDetails(e.target.value)}
                        id="remarks"
                        rows={5}
                        className="w-full resize-none outline-none rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                      />
                    </div>
                  </section>

                  <section className="mb-8 flex items-center justify-end gap-3 mt-7">
                    <button
                      onClick={() => reset()}
                      className="px-3 py-2 bg-zinc-800 rounded-md font-semibold hover:bg-zinc-800/50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        // update active tickets
                        const ticketId = Math.floor(Math.random() * 100 + 1);
                        const ticketNo = Math.floor(Math.random() * (999 - 100 + 1) + 100);
                        const newActiveTickets = [...activeTickets];
                        newActiveTickets.push({
                          id: ticketId.toString(),
                          ticketNo,
                          requestor: request.requestor,
                          createdAt: dayjs(request.createdAt).format() as unknown as Date,
                          supportType: selectedSupportType.type,
                          category: selectedCategory.name,
                          subCategory: selectedSubCategory,
                          details: request.details,
                          status: "active",
                        });
                        setActiveTickets(newActiveTickets);

                        // update requests
                        const newRequests = [...myRequests];
                        const index = newRequests.findIndex((request) => request.id === request.id);
                        newRequests.splice(index, 1);
                        setMyRequests(newRequests);

                        reset();
                      }}
                      className="px-4 py-2 bg-blue-700 rounded-md font-semibold hover:bg-blue-800"
                    >
                      Confirm
                    </button>
                  </section>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
