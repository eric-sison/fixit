import { Header, flexRender } from "@tanstack/react-table";
import { Fragment, FunctionComponent, useMemo, useState } from "react";
import { Combobox } from "@headlessui/react";
import { ServiceRequest } from "@fixhub/types/request";

type RequestListTableColumnSearchProps = {
  header: Header<ServiceRequest, unknown>;
};

export const RequestListTableColumnSearch: FunctionComponent<RequestListTableColumnSearchProps> = ({ header }) => {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const sortedUniqueValues = useMemo(
    () => Array.from(header.column.getFacetedUniqueValues().keys()).sort(),
    [header.column]
  ) as string[];

  const filtered =
    query === ""
      ? sortedUniqueValues
      : sortedUniqueValues.filter((val) => val.toLowerCase().includes(query.toLowerCase()));

  return (
    <div>
      <Combobox
        as={Fragment}
        value={selected}
        onChange={(val) => {
          setSelected(val);
          header.column.setFilterValue(val);
        }}
      >
        {({ open }) => (
          <>
            <header className="h-16 w-full  flex items-center justify-center p-3 border-b border-b-zinc-800">
              <div className="flex items-center h-full w-full relative">
                <div className="absolute h-full flex items-center left-3">
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
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={`Search by ${flexRender(header.column.columnDef.header, header.getContext())
                    ?.toString()
                    .toLowerCase()}...`}
                  className="w-full h-full rounded-lg bg-zinc-800/40 pl-11 pr-5 text-lg placeholder:text-zinc-600 border-2 border-transparent focus:border-blue-700 outline-none text-font-regular"
                />
              </div>
            </header>

            {open && query === "" ? null : (
              <Combobox.Options static className="max-h-96 overflow-y-auto">
                {filtered.length === 0 ? (
                  <div className="p-4 w-full">
                    <p className="text-font-muted line-clamp-2">Could not find {`"${query}"`}</p>
                  </div>
                ) : (
                  filtered.map((item, index) => (
                    <Combobox.Option key={index} value={item} as={Fragment}>
                      {({ active }) => (
                        <li
                          className={`${
                            active ? "bg-zinc-950/50" : ""
                          } px-4 border-b border-b-zinc-800 last:border-b-transparent py-2 truncate text-font-regular/70 cursor-pointer`}
                        >
                          {item}
                        </li>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            )}
          </>
        )}
      </Combobox>
    </div>
  );
};
