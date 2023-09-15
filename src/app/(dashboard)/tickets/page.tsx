import { TicketOverviewPagePanel } from "@fixhub/components/TicketOverviewPagePanel";
import { TicketPanel } from "@fixhub/components/TicketPanel";
import { TicketPanelContent } from "@fixhub/components/TicketPanelContent";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Overview" };

export default async function Overview() {

  return (
    <>
      <main className="p-5">
        <TicketOverviewPagePanel />
      </main>
    </>
  );
}
