// app/not-found.tsx
import * as m from "@/paraglide/messages.js";
export default function NotFound() {
  return (
    <div className="text-white flex flex-col h-full w-full items-center justify-center min-h-screen -mb-[13.986rem] -mt-[4.549rem] ">
      <div className="flex text-uui-text-tertiary-600 space-x-uui-xl items-center">
        <h2 className=" text-uui-display-md font-bold ">404</h2>
        <div>
          <span className="mr-1">{m.not_found_message()}</span>
          <a href="/" className="underline underline-offset-2">
            {m.not_found_home()}
          </a>
        </div>
      </div>
    </div>
  );
}
