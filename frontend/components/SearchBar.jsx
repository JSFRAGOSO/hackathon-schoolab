import React from "react";
import classNames from "classnames";

import Search from "../icons/search.svg";

export const SearchBar = ({ className, ...props }) => (
  <div
    className={classNames(
      "flex w-full rounded-lg py-3 px-4 text-sm placeholder-brand-600 bg-white items-center",
      className
    )}
  >
    <input className="flex-1" type="search" {...props} />
    <Search />
  </div>
);
