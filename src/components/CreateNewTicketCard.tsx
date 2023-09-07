import { FunctionComponent } from "react";

export const CreateNewTicketCard: FunctionComponent = () => {
  return (
    <div
      role="button"
      className="bg-zinc-900 h-56 rounded-lg border border-zinc-800/50 flex items-center justify-center bg-opacity-50 hover:bg-opacity-100"
    >
      <div className="flex flex-col justify-center items-center gap-2 group">
        <div className="h-20 w-20 bg-zinc-900 border border-zinc-800 group-hover:border rounded-full flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M12 4a1 1 0 0 0-1 1v6H5a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"
            ></path>
          </svg>
        </div>
        <h3 className="text-lg text-font-muted font-medium">Add New Ticket</h3>
      </div>
    </div>
  );
};
