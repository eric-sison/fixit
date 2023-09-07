import { FunctionComponent } from "react";

export const Topbar: FunctionComponent = () => {
  return (
    <nav className="border-b border-b-zinc-800 h-20">
      <section className="flex items-center justify-end h-full px-5">
        {/* <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" className="text-blue-700">
            <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
              <path d="M9 22a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z"></path>
              <path d="M9 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM9 22a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm4 0a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm3 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm7-7a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm0-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm-1-5a1 1 0 1 1 0 2a1 1 0 0 1 0-2ZM2 15a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-4a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm1-3a1 1 0 1 0-2 0a1 1 0 0 0 2 0Zm14-2H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1ZM7 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm7 6h-4v4h4v-4ZM8 8v8h8V8H8Z"></path>
            </g>
          </svg>
          <h1 className="text-4xl font-bold text-font-regular/80">
            fix.<code className="text-blue-700">IT</code>
          </h1>
        </div> */}

        <div className="flex gap-2 items-center">
          <div className="h-12 w-12 rounded-full bg-teal-300 flex items-center justify-center">
            <p className="font-semibold text-gray-800">ES</p>
          </div>
        </div>
      </section>
    </nav>
  );
};
