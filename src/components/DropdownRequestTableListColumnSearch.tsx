import React from "react";
import { FunctionComponent } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Table, flexRender } from "@tanstack/react-table";
import { ServiceRequest } from "@fixhub/types/request";
import { RequestListTableColumnSearch } from "./RequestListTableColumnSearch";

type DropdownRequestTableListColumnSearchProps = {
  table: Table<ServiceRequest>;
};

export const DropdownRequestTableListColumnSearch: FunctionComponent<DropdownRequestTableListColumnSearchProps> = ({
  table,
}) => {
  return (
    <>
      <section>
        <div className="flex items-center gap-10">
          {table.getHeaderGroups().map((group, index) => (
            <React.Fragment key={index}>
              {group.headers.map((header, index) => {
                return (
                  <DropdownMenu.Root key={index}>
                    <DropdownMenu.Trigger className="outline-none flex items-center gap-1 group">
                      <p className="text-font-regular/70 group-hover:text-font-regular text-lg">
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </p>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        align="end"
                        sideOffset={5}
                        className="bg-zinc-900 w-96 rounded-md overflow-clip border border-zinc-800"
                      >
                        <div className="border-b border-b-zinc-800 py-3 px-4 bg-zinc-950/20">
                          <p className="font-medium text-font-regular/80">
                            Filter by{" "}
                            {flexRender(header.column.columnDef.header, header.getContext())?.toString().toLowerCase()}
                          </p>
                        </div>
                        <RequestListTableColumnSearch header={header} />
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  );
};
