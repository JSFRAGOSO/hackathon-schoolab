import React from 'react';
import classNames from 'classnames'

export const SchoolCard = ({ className, children, ...linkProps }) => (
    // <a className={classNames('block bg-brand-600 text-white font-semibold py-4 px-12 text-center rounded-lg', className)} {...linkProps}>
    //     {children}
    // </a>
    <div className={
        classNames('rounded-lg mt-4 bg-white-600')}
        {...linkProps}
    >
        {children}
    </div>
)