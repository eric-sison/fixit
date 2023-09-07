import { Sidebar } from "@fixhub/components/Sidebar";
import { Topbar } from "@fixhub/components/Topbar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Topbar />
      <div className="flex h-full">
        <Sidebar />
        <main className="w-full overflow-y-auto overflow-x-hidden">{children}</main>
      </div>
    </>
  );
}
