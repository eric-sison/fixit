import { TicketOverviewPagePanel } from "@fixhub/components/TicketOverviewPagePanel";
import { TicketPanel } from "@fixhub/components/TicketPanel";
import { TicketPanelContent } from "@fixhub/components/TicketPanelContent";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Overview" };

export default async function Overview() {
  return (
    <>
      {/* <header className="border-b border-b-zinc-800 flex items-center justify-between py-4 px-6">
        <div className="space-y-1">
          <h3 className="text-3xl font-semibold">Overview</h3>
          <p className="text-font-muted text-lg">
            List of all tickets and their corresponding status for today, {dayjs().format("DD MMM YYYY")}.
          </p>
        </div>

        <button className="bg-blue-700 px-4 py-3 rounded-md font-medium text-font-regular">Create Ticket</button>
      </header> */}

      <main className="p-5">
        <TicketOverviewPagePanel />
      </main>
    </>
  );
}
