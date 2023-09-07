import { SidebarInbox } from "@fixhub/components/SidebarInbox";
import { Metadata } from "next";
import inbox from "../../../../mock/inbox-summary";
import { InboxCard } from "@fixhub/components/InboxCard";
import React from "react";
import { MessagingPanel } from "@fixhub/components/MessagingPanel";

export const metadata: Metadata = { title: "Messages" };

export default function Messages() {
  return (
    <div className="flex">
      <SidebarInbox>
        {inbox.map((summary, index) => (
          <React.Fragment key={index}>
            <InboxCard inboxSummary={summary} />
          </React.Fragment>
        ))}
      </SidebarInbox>

      <MessagingPanel />
    </div>
  );
}
