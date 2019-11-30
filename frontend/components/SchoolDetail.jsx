import React, { useEffect, useState } from "react";
import Pin from "../icons/pin.svg";
import Phone from "../icons/phone.svg";
import Thumbsup from "../icons/thumbsup.svg";
import Explore from "../icons/explore.svg";
import classNames from "classnames";
import { DescriptionRow } from "../components/DescriptionRow";
import { CallToAction } from "../components/CallToAction";

const Tag = ({ children }) => (
  <span className="bg-brand-600 text-white font-semibold uppercase tracking-wide rounded-full px-3 py-1 block text-xs m-1">
    {children}
  </span>
);

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
            <span className="capitalize font-normal">Escola {school.type}</span>
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
          <DescriptionRow
            hasBorder={false}
            icon={<Explore />}
            label={<span className="font-normal">Turnos:</span>}
          >
            <div className="flex text-brand-600 items-center py-2 text-sm font-semibold">
              <span className="font-normal mr-1">Manhã </span>
              <input
                type="checkbox"
                id="recommended"
                name="recommended"
                checked={school.morning}
                className="checked ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400"
              />
              <span className="font-normal mr-1">Tarde </span>
              <input
                type="checkbox"
                id="recommended"
                name="recommended"
                checked={school.evening}
                className="checked ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400"
              />
              <span className="font-normal mr-1">Noite </span>
              <input
                type="checkbox"
                id="recommended"
                name="recommended"
                checked={school.night}
                className="checked ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400"
              />
            </div>
          </DescriptionRow>
          <DescriptionRow
            hasBorder={false}
            label={<span className="font-normal">Nº Vagas não informado</span>}
          ></DescriptionRow>
          <h1 className="font-bold text-md mx-2 text-brand-600">Ensino</h1>

          <DescriptionRow
            hasBorder={false}
            label={<span className="font-normal">Nota do IDEB</span>}
          >
            <div className="flex text-brand-600 items-center py-2 text-sm font-semibold">
              <span className="font-normal text-right">Não Informado</span>
            </div>
          </DescriptionRow>

          <DescriptionRow
            hasBorder={false}
            label={<span className="font-normal">Nota do ENEM</span>}
          >
            <div className="flex text-brand-600 items-center py-2 text-sm font-semibold">
              <span className="font-normal text-right">Não Informado</span>
            </div>
          </DescriptionRow>
          <div className="flex flex-wrap py-2">
            {school.quadra_esportes && <Tag>Quadras</Tag>}
            {school.lab_informatica && <Tag>Informática</Tag>}
            {school.biblioteca && <Tag>Biblioteca</Tag>}
            {school.lab_ciencia && <Tag>Laboratório</Tag>}
            {school.refeitorio && <Tag>Refeitório</Tag>}
            {school.auditorio && <Tag>Auditório</Tag>}
            {school.atividade_complementar && <Tag>Ativ. Complementar</Tag>}
          </div>
          <CallToAction href="#" className="mt-2">
            Deseja Avaliar a escola ?
          </CallToAction>
        </div>
      </article>
    </a>
  );
};
