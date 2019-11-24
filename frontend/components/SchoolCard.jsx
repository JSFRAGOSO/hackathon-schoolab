import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { DescriptionRow } from '../components/DescriptionRow';
import Pin from '../icons/pin.svg';
import Phone from '../icons/phone.svg';
import Thumbsup from '../icons/thumbsup.svg';

export const SchoolCard = ({ className, children, school, ...linkProps }) => {

  return (

    <a className={
      classNames('rounded-lg mt-4 bg-white-600 block')}
      {...linkProps}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">

        <img className=" w-full img-card p-1" src="/school.jpg" alt="Sunset in the mountains">

        </img>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-brand-600">{school.name}</div>
          
          <DescriptionRow hasBorder={false} 
            icon={<Pin />} 
            label={
              <label className="flex-1" htmlFor="location">
                {school.district}, {school.city}, {school.state}
              </label>
            }
          >
          </DescriptionRow>            
          <DescriptionRow
            icon={<Phone />} 
            label={
              <label className="flex-1" htmlFor="phone">
                {school.telefone ? school.telefone : 'não informado'}
              </label>
            }    
          >
          </DescriptionRow>
          
          <DescriptionRow hasBorder={false}
            icon={<Thumbsup />} 
            label={
              <label className="flex-1" htmlFor="recomendações">
                {school.likes.lenght ? school.likes : '0'} Recomendações
              </label>
            }    
          >
          </DescriptionRow>

        </div>
            
      </div>
      {children}
    </a>

  )
}