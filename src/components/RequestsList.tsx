"use client";

import { ServiceRequest } from "@fixhub/types/request";
import { FunctionComponent } from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";
import * as Checkbox from "@radix-ui/react-checkbox";

type RequestsListProps = {
  requests: ServiceRequest[];
};

export const RequestsList: FunctionComponent<RequestsListProps> = ({ requests }) => {
  return (
    <ul className="">
      <div className="border border-zinc-800 rounded-t-lg bg-zinc-800/60 p-4">
        <p className="text-lg font-medium text-font-regular/80">{requests.length} total requests</p>
      </div>
      {requests.map((request, index) => (
        <li
          key={index}
          role="button"
          className="group hover:bg-zinc-800/20 p-4 border border-zinc-800/80 flex items-center gap-8"
        >
          <section>
            <div className="flex items-center justify-center bg-zinc-800/70">
              <Checkbox.Root
                className={`data-[state=checked]:bg-blue-700 w-5 h-5 rounded data-[state=unchecked]:border data-[state=unchecked]:border-zinc-700  flex items-center justify-center`}
              >
                <Checkbox.Indicator>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="m10.586 13.414l-2.829-2.828L6.343 12l4.243 4.243l7.07-7.071l-1.413-1.415l-5.657 5.657Z"
                    ></path>
                  </svg>
                </Checkbox.Indicator>
              </Checkbox.Root>
            </div>
          </section>

          <div className="flex items-start gap-3">
            <Image
              width={500}
              height={500}
              alt={`profile-${request.id}`}
              src={request.requestor.avatar}
              className="mt-1 inline-block h-[2rem] w-[2rem] rounded-full object-cover shrink-0"
            />

            <section>
              <h3 className="text-xl group-hover:text-blue-700 text-font-regular">{request.details}</h3>
              <p className="text-font-muted text-sm">
                #7463 opened on {dayjs(request.createdAt).format("DD MMM YYYY")} by{" "}
                <Link href="#" className="text-font-muted">
                  {request.requestor.fullName}
                </Link>
              </p>
            </section>
          </div>
        </li>
      ))}
    </ul>
  );
};
