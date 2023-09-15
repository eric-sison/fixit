"use client";

import { ServiceRequest } from "@fixhub/types/request";
import React, { FunctionComponent, useState } from "react";
import {
  ColumnFiltersState,
  RowSelectionState,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { RequestListTableFilterTags } from "./RequestListTableFilterTags";
import { DropdownRequestTableListColumnSearch } from "./DropdownRequestTableListColumnSearch";

type RequestListTableProps = {
  requests: ServiceRequest[];
};

export const RequestListTable: FunctionComponent<RequestListTableProps> = ({ requests }) => {
  const [rowSelection, setRowSelection] = useState<RowSelectionState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState("");
  // const [filterTagColorIndicator] = useState(["text-amber-600", "text-blue-600", "text-green-600", "text-rose-600"]);

  const columnHelper = createColumnHelper<ServiceRequest>();
  const columns = [
    columnHelper.accessor("requestor.fullName", {
      header: () => <></>,
      enableColumnFilter: true,
      cell: ({ row }) => {
        return (
          <div className="flex items-center gap-5">
            <section className="flex items-center justify-center pl-10">
              <div className="flex items-center justify-center w-6 h-6">
                {row.getIsSelected() ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    className="text-green-600"
                  >
                    <g fill="currentColor">
                      <path d="M10.243 16.314L6 12.07l1.414-1.414l2.829 2.828l5.656-5.657l1.415 1.415l-7.071 7.07Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12Zm11 9a9 9 0 1 1 0-18a9 9 0 0 1 0 18Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                    className="text-zinc-700"
                  >
                    <g fill="currentColor">
                      <path d="M8 11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z"></path>
                      <path
                        fillRule="evenodd"
                        d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11Zm-2 0a9 9 0 1 1-18 0a9 9 0 0 1 18 0Z"
                        clipRule="evenodd"
                      ></path>
                    </g>
                  </svg>
                )}
              </div>
            </section>
            <div className="flex items-start gap-5 p-4 w-full">
              <Image
                width={500}
                height={500}
                alt={`profile-${row.original.id}`}
                src={row.original.requestor.avatar}
                className="mt-1 inline-block h-[2.5rem] w-[2.5rem] rounded-full object-cover shrink-0"
              />

              <section>
                <h3 className="text-lg group-hover:text-font-regular text-font-regular">{row.original.details}</h3>
                <p className="text-font-muted text-sm">
                  {" "}
                  Request no.{" "}
                  <span className="bg-zinc-800 text-font-regular/70 px-1 rounded text-xs font-medium">#7463</span>{" "}
                  opened on {dayjs(row.original.createdAt).format("DD MMM YYYY")} by{" "}
                  <Link href="#" className="text-blue-700">
                    {row.original.requestor.fullName}
                  </Link>
                </p>
              </section>
            </div>
          </div>
        );
      },
    }),

    columnHelper.accessor("requestor.office", {
      enableColumnFilter: true,
      header: "Offices",
      cell: () => <></>,
    }),

    columnHelper.accessor("requestor.department", {
      enableColumnFilter: true,
      header: "Departments",
      cell: () => <></>,
    }),

    columnHelper.accessor("requestor.division", {
      enableColumnFilter: true,
      header: "Divisions",
      cell: () => <></>,
    }),
  ];

  const table = useReactTable({
    data: requests,
    columns,
    state: {
      rowSelection,
      columnFilters,
      globalFilter,
    },
    enableRowSelection: true,
    getCoreRowModel: getCoreRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    onRowSelectionChange: setRowSelection,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <>
      <div className="border-b border-zinc-800/80">
        <div className="w-full h-36 p-4 space-y-3 flex flex-col justify-center items-stretch">
          <div className="flex items-center justify-between pr-5">
            <RequestListTableFilterTags table={table} setColumnFilters={setColumnFilters} />
            {/* <DropdownRequestTableListColumnSearch table={table} /> */}
          </div>

          <div className="flex items-center h-14 w-full relative">
            <div className="absolute h-full flex items-center justify-between left-[9.2rem]">
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

            <div className="absolute flex right-10 space-x-5">
              {/* <button className="outline-none border px-4 border-zinc-800">Add to queue</button> */}
              <DropdownRequestTableListColumnSearch table={table} />
            </div>

            <div className="w-full h-full flex items-center">
              <button
                className="whitespace-nowrap h-full px-4 bg-blue-700 rounded-l-md font-medium"
                onClick={() => {
                  if (table.getSelectedRowModel().rows.length === 0) {
                    alert("You did not select a request to add to queue");
                  } else {
                    alert("Requests added to queue");
                  }
                }}
              >
                Add to queue
              </button>
              <input
                value={globalFilter ?? ""}
                onChange={(e) => setGlobalFilter(e.target.value)}
                className="w-full h-full rounded-r-lg bg-zinc-800/40 pl-11 pr-5 text-lg placeholder:text-zinc-600 border-2 border-transparent focus:border-blue-700 outline-none text-font-regular"
                placeholder={`Search requestor by applied filter...`}
              />
            </div>
          </div>
        </div>

        {/* <DropdownRequestTableListColumnSearch table={table} /> */}

        {/* <div className="h-16 w-full px-5 flex justify-between">
          <section className="space-x-3">
            <button className="bg-blue-800 text-font-regular px-4 py-2 font-medium rounded">Add to queue</button>
          </section>
        </div> */}
      </div>

      <ScrollArea.Root className="h-[calc(100vh-14.5rem)] overflow-x-hidden overflow-y-auto border-b border-b-zinc-700/50 last:border-b-transparent overflow-clip">
        <ScrollArea.Viewport className="w-full h-full">
          <div className="overflow-clip">
            <table className="w-full">
              {table.getCoreRowModel().rows.length === 0 ? (
                <tbody>
                  <tr className="flex items-center justify-center pt-20">
                    <td className="flex flex-col items-center space-y-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6em"
                        height="6em"
                        viewBox="0 0 24 24"
                        className="text-zinc-800"
                      >
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5">
                          <path d="M12 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"></path>
                          <path
                            strokeLinejoin="round"
                            d="M2 7h20M5 5.01l.01-.011M8 5.01l.01-.011M11 5.01l.01-.011M21 16.05a3.5 3.5 0 1 0-5 4.9m4.998-4.9A3.5 3.5 0 1 1 16 20.95m5-4.9l-5 4.9"
                          ></path>
                        </g>
                      </svg>
                      <div className="text-center">
                        <p className="text-3xl font-medium text-zinc-600">There are no open requests at the moment.</p>
                      </div>
                    </td>
                  </tr>
                </tbody>
              ) : (
                <>
                  {table.getFilteredRowModel().rows.length === 0 ? (
                    <tbody>
                      <tr className="flex items-center justify-center pt-20">
                        <td className="flex flex-col items-center space-y-4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="6em"
                            height="6em"
                            viewBox="0 0 24 24"
                            className="text-zinc-800"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.5"
                            >
                              <path d="M20.5 20.5L22 22m-7-4a3 3 0 1 0 6 0a3 3 0 0 0-6 0Z"></path>
                              <path d="M20 12V5.749a.6.6 0 0 0-.176-.425l-3.148-3.148A.6.6 0 0 0 16.252 2H4.6a.6.6 0 0 0-.6.6v18.8a.6.6 0 0 0 .6.6H11"></path>
                              <path d="M16 2v3.4a.6.6 0 0 0 .6.6H20"></path>
                            </g>
                          </svg>
                          <div className="text-center">
                            <p className="text-3xl font-medium text-zinc-600">
                              Your search keyword, <span className="text-blue-700">`{globalFilter}`</span> did not
                              return any result.
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <>
                      <tbody>
                        {table.getRowModel().rows.map((row) => (
                          <tr
                            onClick={() => row.toggleSelected()}
                            key={row.id}
                            className="group border-b border-zinc-700/50"
                            role="button"
                          >
                            {row.getVisibleCells().map((cell) => {
                              return (
                                <td
                                  key={cell.id}
                                  className={`${
                                    row.getIsSelected() ? "bg-zinc-700/20" : ""
                                  } group-hover:bg-zinc-800/20 bg-zinc-950/50`}
                                >
                                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </>
                  )}
                </>
              )}
            </table>
          </div>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-transparent transition-colors duration-[160ms] ease-out data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-zinc-800 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </>
  );
};
