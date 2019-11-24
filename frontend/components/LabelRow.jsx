import React from "react";
import classNames from "classnames";

export const LabelRow = ({ icon, label, className, children }) => (
  <div className={classNames("flex flex-1 items-center", className)}>
    <div className="flex flex-1 text-brand-600 items-center px-2 py-4 text-sm font-semibold">
      <div className="ml-2">{icon}</div>
      <span className="ml-4 flex flex-1">{label}</span>
    </div>
    {children}
  </div>
);
