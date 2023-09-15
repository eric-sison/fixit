import { Combobox, Dialog, Transition } from "@headlessui/react";
import { Fragment, FunctionComponent, useEffect, useState } from "react";
// import users from "../../mock/users";
import supportTypes from "../../mock/support-types";
import categories from "../../mock/categories";
import { User } from "@fixhub/types/users";
import Image from "next/image";
import dayjs from "dayjs";
import { Category, SupportType } from "@fixhub/types/ticket";
import { useActiveTicketsStore } from "@fixhub/utils/stores/tickets";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type ModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

export const CreateTicketModal: FunctionComponent<ModalProps> = ({ open, setOpen }) => {
  const activeTickets = useActiveTicketsStore((state) => state.activeTickets);
  const setActiveTickets = useActiveTicketsStore((state) => state.setActiveTickets);

  const { data: users, error } = useQuery({
    queryKey: ["requestors"],
    queryFn: async () => {
      return (await axios.get<User[]>("http://localhost:3001/employees")).data;
    },
  });

  // states used for requestor
  const [selectedRequestor, setSelectedRequestor] = useState<User>({} as User);
  const [queryRequestor, setQueryRequestor] = useState("");

  // state used for date requested
  const [dateRequested, setDateRequested] = useState(dayjs().format("YYYY-MM-DD"));

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

  // states used for details
  const [details, setDetails] = useState("");

  useEffect(() => {
    setSubCategories(selectedCategory.subCategories);
    setSelectedSubCategory(selectedCategory.subCategories[0]);
  }, [selectedCategory.name, selectedCategory.subCategories]);

  const filteredRequestors =
    queryRequestor === ""
      ? users
      : users?.filter((user) => {
          return user.fullName.toLowerCase().includes(queryRequestor.toLowerCase());
        });

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
    setSelectedRequestor({} as User);
    setDateRequested(dayjs().format("YYYY-MM-DD"));
    setSelectedSupportType(supportTypes[0]);
    setSelectedCategory(categories[0]);
    setSelectedSubCategory(selectedCategory.subCategories[0]);
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
                <header className="leading-4">
                  <Dialog.Title as="h3" className="text-2xl font-semibold leading-6 text-font-regular">
                    Create new ticket
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-font-regular/70">Note that this ticket will be automatically assigned to you.</p>
                  </div>
                </header>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <section className="">
                    <div className="w-full">
                      <label htmlFor="requestor" className="pl-1 font-medium text-sm text-font-regular/80">
                        Requestor
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">
                        Search for the name of the end user who made the request.
                      </p>

                      <div className="relative">
                        <Combobox value={selectedRequestor} onChange={setSelectedRequestor}>
                          <div className="relative">
                            <div className="absolute h-full left-3 top-[0.6rem]">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1.5em"
                                height="1.5em"
                                viewBox="0 0 24 24"
                                className="text-font-muted"
                              >
                                <path
                                  fill="currentColor"
                                  fillRule="evenodd"
                                  d="M18.319 14.433A8.001 8.001 0 0 0 6.343 3.868a8 8 0 0 0 10.564 11.976l.043.045l4.242 4.243a1 1 0 1 0 1.415-1.415l-4.243-4.242a1.116 1.116 0 0 0-.045-.042Zm-2.076-9.15a6 6 0 1 1-8.485 8.485a6 6 0 0 1 8.485-8.485Z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </div>
                            <Combobox.Input
                              id="requestor"
                              onChange={(e) => setQueryRequestor(e.target.value)}
                              displayValue={(requestor: User) => requestor?.fullName}
                              placeholder="Search end user who initiated the request..."
                              className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 pl-11 py-2 border border-zinc-800 focus:border-blue-700"
                            />

                            <Combobox.Options className="absolute z-30 border bg-zinc-900 border-zinc-800 mt-2 rounded-lg max-h-96 overflow-auto w-full">
                              {filteredRequestors?.map((requestor, index) => (
                                <Combobox.Option key={index} value={requestor} as={Fragment}>
                                  {({ active, selected }) => (
                                    <li
                                      role="button"
                                      className={`${
                                        active || selected ? "text-font-regular/90 bg-zinc-700/10" : "text-font-muted"
                                      } px-5 py-3 flex gap-5 items-center border-b bg-zinc-950/70 border-b-zinc-700/40 last:border-b-transparent cursor-pointer`}
                                    >
                                      <Image
                                        src={requestor.avatar}
                                        width={500}
                                        height={500}
                                        alt={`profile-${requestor.id}`}
                                        className="inline-block h-[2.5rem] w-[2.5rem] rounded-full object-cover shrink-0"
                                      />
                                      <section className="flex items-center justify-between w-full">
                                        <div>
                                          <h3 className="text-xl font-medium">{requestor.fullName}</h3>
                                          <p className="">{requestor.positionTitle}</p>
                                        </div>

                                        {selected && (
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="2em"
                                            height="2em"
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
                          </div>
                        </Combobox>
                      </div>
                    </div>
                  </section>

                  <section className="mt-7 flex items-center gap-4 justify-between">
                    <div className="flex flex-col w-full">
                      <label htmlFor="date" className="pl-1 font-medium text-sm text-font-regular/80">
                        Date requested
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">When was this request made?</p>
                      <input
                        id="date"
                        type="date"
                        value={dateRequested}
                        onChange={(e) => setDateRequested(e.target.value)}
                        className="w-full outline-none placeholder:text-font-muted rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                        placeholder="Date requested"
                      />
                    </div>

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
                            <Combobox.Options className="absolute z-20 border border-zinc-800 mt-2 rounded max-h-96 overflow-auto min-w-full">
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
                            <Combobox.Options className="absolute border border-zinc-800 mt-2 rounded max-h-96 overflow-auto min-w-full">
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
                    </div>
                  </section>

                  <section className="mt-7">
                    <div className="flex flex-col w-full">
                      <label htmlFor="details" className="pl-1 font-medium text-sm text-font-regular/80">
                        Ticket details
                      </label>
                      <p className="text-sm pl-1 text-font-muted mb-2">Please elaborate the details of this ticket.</p>
                      <textarea
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        id="details"
                        rows={5}
                        placeholder="Enter details here..."
                        className="w-full resize-none outline-none rounded-md bg-zinc-800/40 px-3 py-2 border border-zinc-800 focus:border-blue-700"
                      />
                    </div>
                  </section>

                  <section className="mt-7 mb-8 flex items-center justify-end gap-3">
                    <button
                      onClick={() => reset()}
                      className="px-3 py-2 bg-zinc-800 rounded-md font-semibold hover:bg-zinc-800/50"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        const ticketId = Math.floor(Math.random() * 100 + 1);
                        const ticketNo = Math.floor(Math.random() * (999 - 100 + 1) + 100);

                        const newActiveTickets = [...activeTickets];

                        newActiveTickets.push({
                          id: ticketId.toString(),
                          ticketNo,
                          requestor: selectedRequestor,
                          createdAt: dayjs(dateRequested).format() as unknown as Date,
                          supportType: selectedSupportType.type,
                          category: selectedCategory.name,
                          subCategory: selectedSubCategory,
                          details,
                          status: "active",
                        });

                        setActiveTickets(newActiveTickets);
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
