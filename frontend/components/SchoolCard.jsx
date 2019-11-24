import React from 'react';
import classNames from 'classnames'

export const SchoolCard = ({ className, children, ...linkProps }) => (
  // <a className={classNames('block bg-brand-600 text-white font-semibold py-4 px-12 text-center rounded-lg', className)} {...linkProps}>
  //     {children}
  // </a>
    <a className={
        classNames('rounded-lg mt-4 bg-white-600 block')}
        {...linkProps}
    >
    <div className="max-w-sm rounded overflow-hidden shadow-lg">

      <img className=" w-full img-card p-1" src="/school.jpg" alt="Sunset in the mountains">

      </img>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
      </div>
    </div>
    {children}
  </a>
)