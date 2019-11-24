import React from "react";
import classNames from "classnames";
import Search from "../icons/search.svg";

export const SearchBar = ({ className, ...props }) => (
  <div
    className={classNames(
      "flex rounded-xl text-sm placeholder-brand-600 bg-white items-center",
      className
    )}
  >
    <input
      className="focus:shadow-outline rounded-l-xl flex-1 min-w-0 px-4 py-3"
      type="search"
      {...props}
    />
    <button
      type="submit"
      className="focus:shadow-outline flex items-center px-4 py-3 rounded-r-xl"
    >
      <Search />
    </button>
  </div>
);
