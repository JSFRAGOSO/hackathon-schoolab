import React from 'react';
import classNames from 'classnames'

export const CallToAction = ({className, children, ...linkProps}) => (
    <a className={classNames('block bg-brand-600 text-white font-semibold py-4 px-12 text-center rounded-lg', className)} {...linkProps}>
        {children}
    </a>
)