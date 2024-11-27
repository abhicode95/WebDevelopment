/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Page = forwardRef(({ children, number }, ref) => {
  return (
    <div className="demoPage bg-white" ref={ref}>
      <p className="h-full">{children}</p>
      <p className="text-xs text-end text-black pb-4">Page number: {number}</p>
    </div>
  );
});
export default Page;
