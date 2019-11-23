import React from 'react'
import classNames from 'classnames'

export const SearchBar = ({className, ...props}) => (
    <input className={classNames("w-full rounded-lg p-3 placeholder-indigo-700", className)} type="search" {...props} />
)