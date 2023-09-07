import { FunctionComponent } from "react";

type TicketTagProps = {
  tag: string;
};

export const TicketTag: FunctionComponent<TicketTagProps> = ({ tag }) => {
  return (
    <span className="px-2 py-1 bg-zinc-700/50 text-xs rounded-md font-semibold tracking-wider text-font-regular/90">
      {tag}
    </span>
  );
};
