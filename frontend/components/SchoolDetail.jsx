import React, { useEffect, useState } from "react";
import Pin from "../icons/pin.svg";
import Phone from "../icons/phone.svg";
import Thumbsup from "../icons/thumbsup.svg";
import classNames from "classnames";
import { DescriptionRow } from "../components/DescriptionRow";
import { CallToAction } from "../components/CallToAction";

export const SchoolDetail = ({ className, children, school, ...linkProps }) => {
  return (
    <a
      href={`/escolas/${school._id}`}
      className={classNames("rounded-xl mt-4 bg-white block p-2 shadow-lg")}
      {...linkProps}
    >
      <article className="rounded overflow-hidden">
        <img
          className="img-card rounded-xl"
          src="/img/school.jpg"
          alt="Sunset in the mountains"
        ></img>
        <div className="mt-4">
          <h1 className="font-bold text-xl mx-2 text-brand-600">
            {school.name}
          </h1>
          <div className="border-b flex text-brand-600 items-center py-2 text-sm mx-2 font-semibold">
            <span className="capitalize font-normal">
              Escola {school.type}
            </span>
          </div>
          <DescriptionRow
            hasBorder={true}
            icon={<Thumbsup />}
            label={
              <label className="flex-1" htmlFor="recomendações">
                {school.likes.lenght ? school.likes : "0"} Recomendações
              </label>
            }
          ></DescriptionRow>
          <DescriptionRow
            hasBorder={false}
            icon={<Pin />}
            label={
              <span className="font-normal">
                {school.district}, {school.city}, {school.state}
              </span>
            }
          ></DescriptionRow>
          <DescriptionRow
            hasBorder={false}
            icon={<Phone />}
            label={
              <span className="font-normal">
                {school.telefone ? school.telefone : "não informado"}
              </span>
            }
          ></DescriptionRow>
          <CallToAction href="#" className="mt-2">
            Deseja Avaliar a escola ?
          </CallToAction>

        </div>
      </article>
    </a>
  );
};