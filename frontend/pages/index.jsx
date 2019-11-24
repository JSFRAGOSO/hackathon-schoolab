import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import { SearchBar } from "../components/SearchBar";
import { CallToAction } from "../components/CallToAction";
import { SchoolCard } from "../components/SchoolCard";
import { Collapsible } from "../components/Collapsible";
import { DescriptionRow } from "../components/DescriptionRow";

import Pin from "../icons/pin.svg";
import ThumbsUp from "../icons/thumbsup.svg";
import Tag from "../icons/tag.svg";
import Explore from "../icons/explore.svg";
import Food from "../icons/food.svg";
import api from "../services/api";
import { Select } from "../components/Select";

const Home = () => {
  const [search, setSearch] = useState();
  const onSearch = useCallback(e => {
    setSearch(e.target.value);
  });

  const [schools, setSchool] = useState([]);

  useEffect(() => {
    async function getSchools() {
      const response = await api.get("/schools", {});
      setSchool(response.data);
    }
    getSchools();

    console.log("RESPONSE >>>>", setSchool);
  }, []);
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <main className="bg-gray-200 p-2 min-h-screen">
        <section>
          <CallToAction href="#" className="mt-2">
            <span>Responda as perguntas e descubra a escola mais indicada</span>
          </CallToAction>
        </section>
        <section className="mt-4">
          <SearchBar
            placeholder="Pesquisar por escola"
            value={search}
            onChange={onSearch}
          />
          <Collapsible className="mt-2" icon={<ThumbsUp />} label="Filtros">
            <DescriptionRow
              icon={<Pin />}
              className="flex-col items-start"
              label="Distância da minha localização"
            ></DescriptionRow>
            <DescriptionRow
              icon={<ThumbsUp />}
              label={
                <label className="flex-1" htmlFor="recommended">
                  Recomendadas
                </label>
              }
            >
              <input
                type="checkbox"
                id="recommended"
                name="recommended"
                className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 "
              />
            </DescriptionRow>
            <DescriptionRow icon={<Tag />} label={<label>Série</label>}>
              <select
                name="series"
                id="series"
                className="form-select ml-auto border-brand-400 text-brand-600"
              >
                <option>Primeira Série</option>
                <option>Segunda Série</option>
                <option>Terceira Série</option>
              </select>
            </DescriptionRow>
            <DescriptionRow
              icon={<Explore />}
              label={<label>Ordene os turnos por preferência</label>}
            ></DescriptionRow>
            <DescriptionRow icon={<Food />} label={<label>Merenda</label>}>
              <input
                type="checkbox"
                id="recommended"
                name="recommended"
                className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 "
              />
            </DescriptionRow>
          </Collapsible>
          {schools.map(school => (
            <SchoolCard school={school} />
          ))}
        </section>
      </main>
    </>
  );
};
export default Home;
