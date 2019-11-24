import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import { SearchBar } from "../components/SearchBar";
import { CallToAction } from "../components/CallToAction";
import { SchoolCard } from "../components/SchoolCard";
import { Collapsible } from "../components/Collapsible";
import { LabelRow } from "../components/LabelRow";

import ThumbsUp from "../icons/thumbsup.svg";
import Tag from "../icons/tag.svg";
import Explore from "../icons/explore.svg";
import Food from "../icons/food.svg";
import api from "../services/api";

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
          <SearchBar
            placeholder="Pesquisar por escola"
            value={search}
            onChange={onSearch}
          />
          <CallToAction href="#" className="mt-2">
            <span>Responda as perguntas e descubra a escola mais indicada</span>
          </CallToAction>
          <Collapsible className="mt-2" icon={<ThumbsUp />} label="Filtros">
            <LabelRow
              icon={<ThumbsUp />}
              label={<label>Recomendadas</label>}
            ></LabelRow>
            <LabelRow icon={<Tag />} label={<label>Série</label>}></LabelRow>
            <LabelRow
              icon={<Explore />}
              label={<label>Ordene os turnos por preferência</label>}
            ></LabelRow>
            <LabelRow icon={<Food />} label={<label>Merenda</label>}></LabelRow>
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
