import React, { useState } from "react";
import classNames from "classnames";
import Close from "../icons/close.svg";
import CaretDown from "../icons/carretDown.svg";
import { LabelRow } from "./LabelRow";

export const Collapsible = ({
  initialState = true,
  icon,
  label,
  className,
  children
}) => {
  const [isCollapsed, setCollapsed] = useState(initialState);

  const onToggle = () => setCollapsed(state => !state);

  return (
    <section
      className={classNames(
        "shadow bg-white rounded-xl text-brand-600 text-sm",
        className
      )}
    >
      <div className="flex items-center relative focus-within:shadow-outline">
        <LabelRow icon={icon} label={label}>
          <button
            className="p-4 flex justify-center items-center text-sm rounded-r-xl breakout-button"
            onClick={onToggle}
          >
            {isCollapsed ? <CaretDown /> : <Close />}
          </button>
        </LabelRow>
      </div>
      {!isCollapsed && children}
    </section>
  );
};
