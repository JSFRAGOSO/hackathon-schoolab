import React from 'react';
import classNames from 'classnames'

export const CallToAction = ({className, children, ...linkProps}) => (
    <a className={classNames('block bg-indigo-600 text-white font-bold py-4 px-12 text-center rounded-lg', className)} {...linkProps}>
        {children}
    </a>
)