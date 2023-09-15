import { RequestsList } from "@fixhub/components/RequestsList";
import requests from "../../../../mock/requests";
import { RequestListTable } from "@fixhub/components/RequestListTable";

export default function Requests() {
  return (
    <div>
      {/* <RequestsList requests={requests} /> */}
      <RequestListTable requests={requests} />
    </div>
  );
}
