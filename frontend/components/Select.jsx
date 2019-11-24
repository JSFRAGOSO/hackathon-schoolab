import React from "react";
import classNames from "classnames";
import CaretDown from "../icons/carretDown.svg";

export const Select = ({ className, children, ...props }) => (
  <div className={classNames("inline-block relative", className)}>
    <select
      className="block appearance-none w-full h-full bg-white border border-blue-400 hover:border-gray-500 px-4 py-2 pr-8 rounded- leading-tight focus:outline-none focus:shadow-outline rounded relative"
      {...props}
    >
      {children}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-brand-600 flex items-center justify-center">
      <CaretDown />
    </div>
  </div>
);
