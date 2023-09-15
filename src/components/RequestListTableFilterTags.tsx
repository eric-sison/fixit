import { ServiceRequest } from "@fixhub/types/request";
import { ColumnFilter, Table } from "@tanstack/react-table";
import { FunctionComponent, useState } from "react";

type RequestListTableFilterTagsProps = {
  table: Table<ServiceRequest>;
  setColumnFilters: (columnFilters: ColumnFilter[]) => void;
};

export const RequestListTableFilterTags: FunctionComponent<RequestListTableFilterTagsProps> = ({
  table,
  setColumnFilters,
}) => {
  const [filterTagColorIndicator] = useState(["text-amber-600", "text-blue-600", "text-green-600", "text-rose-600"]);

  return (
    <>
      <section className="flex items-center gap-2">
        {table.getState().columnFilters.length === 0 ? (
          <div className="group pl-2 pr-4 py-2 rounded-md">
            <span className="text-sm text-font-regular/70 font-medium line-clamp-1">
              <span className={`${filterTagColorIndicator[3]} font-bold px-2`}>|</span>
              Apply filter to narrow down search
            </span>
          </div>
        ) : (
          <>
            {table.getState().columnFilters.map((filter, index) => {
              return (
                <div
                  role="button"
                  key={index}
                  className="bg-zinc-900 hover:bg-zinc-800 group pl-2 pr-4 py-2 rounded-md max-w-[16rem]"
                  onClick={() => {
                    const updatedFilters = [...table.getState().columnFilters];
                    updatedFilters.splice(index, 1);
                    setColumnFilters(updatedFilters);
                  }}
                >
                  <span className="text-sm text-font-muted group-hover:text-font-regular font-medium line-clamp-1">
                    <span className={`${filterTagColorIndicator[index]} font-bold px-2`}>|</span>
                    {filter.value as string}
                  </span>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};
