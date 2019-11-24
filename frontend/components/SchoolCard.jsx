import React, { useEffect, useState } from 'react';
import classNames from 'classnames'


export const SchoolCard = ({ className, children, school, ...linkProps }) => {

  return (

    <a className={
      classNames('rounded-lg mt-4 bg-white-600 block')}
      {...linkProps}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">

        <img className=" w-full img-card p-1" src="/school.jpg" alt="Sunset in the mountains">

        </img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{school.name}</div>
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
}