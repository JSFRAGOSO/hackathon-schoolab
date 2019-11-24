import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import { Formik } from "formik";
import { SearchBar } from "../components/SearchBar";
import { CallToAction } from "../components/CallToAction";
import { SchoolCard } from "../components/SchoolCard";
import { Collapsible } from "../components/Collapsible";
import { DescriptionRow } from "../components/DescriptionRow";
import Layout from "../components/MyLayout";
import ThumbsUp from "../icons/thumbsup.svg";
import Explore from "../icons/explore.svg";
import Food from "../icons/food.svg";
import api from "../services/api";

const Home = ({ initialSchools = [] }) => {
  const [schools, setSchools] = useState(initialSchools);

  const onSubmitForm = (values, { setSubmitting }) => {
    setSubmitting(true);
    async function fetchSchools() {
      const response = await api.get("/schools", { params: {} });
      console.log(response.data);
      setSchools(response.data || []);
    }

    fetchSchools();
  };

  return (
    <Layout>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <main>
        <section>
          <img src="/img/illustration.svg" alt="" role="presentation" />
          <h1 className="text-brand-600 px-10 font-semibold text-center  my-4">
            Responda as perguntas e descubra a escola mais indicada
          </h1>
          <CallToAction href="/guia" className="mt-2">
            Encontre a melhor escola para o seu filho
          </CallToAction>
        </section>
        <section className="mt-4">
          <Formik
            initialValues={{
              search: "",
              recommended: false,
              morning: false,
              evening: false,
              night: false
            }}
            onSubmit={onSubmitForm}
          >
            {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
            }) => (
              <form onSubmit={handleSubmit}>
                <SearchBar
                  name="search"
                  placeholder="Pesquisar por escola"
                  value={values.search}
                  onChange={handleChange}
                />
                <Collapsible
                  className="mt-2"
                  icon={<ThumbsUp />}
                  label="Filtros"
                >
                  {/* <DescriptionRow
                    icon={<Pin />}
                    className="flex-col items-start"
                    label="Distância da minha localização"
                  ></DescriptionRow> */}
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
                      value={values.recommended}
                      onChange={handleChange}
                      className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                    />
                  </DescriptionRow>
                  {/* <DescriptionRow icon={<Tag />} label={<label>Série</label>}>
                    <select
                      value={values.years}
                      onChange={handleChange}
                      name="years"
                      id="years"
                      className="form-select ml-auto border-brand-400 text-brand-600"
                    >
                      <option>Primeira Série</option>
                      <option>Segunda Série</option>
                      <option>Terceira Série</option>
                    </select>
                  </DescriptionRow> */}
                  <DescriptionRow
                    className="flex-col"
                    icon={<Explore />}
                    label="Tipo de escola"
                  >
                    <div className="flex px-2">
                      <label>
                        <input
                          type="checkbox"
                          name="type"
                          className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                          onChange={handleChange}
                        />
                        <span>Pública</span>
                      </label>
                      <label className="ml-4">
                        <input
                          type="checkbox"
                          name="lunch"
                          className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                          value={values.private}
                          onChange={handleChange}
                        />
                        <span>Privada</span>
                      </label>
                      <label className="ml-4">
                        <input
                          type="checkbox"
                          name="lunch"
                          className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                          value={values.scholarship}
                          onChange={handleChange}
                        />
                        <span>Com bolsa</span>
                      </label>
                    </div>
                  </DescriptionRow>
                  <DescriptionRow
                    className="flex-col"
                    icon={<Explore />}
                    label="Turnos"
                  >
                    <div className="flex px-2">
                      <label>
                        <input
                          type="checkbox"
                          name="morning"
                          className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                          value={values.morning}
                          onChange={handleChange}
                        />
                        <span>Manhã</span>
                      </label>
                      <label className="ml-4">
                        <input
                          type="checkbox"
                          name="evening"
                          className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                          value={values.evening}
                          onChange={handleChange}
                        />
                        <span>Tarde</span>
                      </label>
                      <label className="ml-4">
                        <input
                          type="checkbox"
                          name="night"
                          className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                          value={values.night}
                          onChange={handleChange}
                        />
                        <span>Noite</span>
                      </label>
                    </div>
                  </DescriptionRow>
                  <DescriptionRow
                    icon={<Food />}
                    label={<label htmlFor="lunch">Refeitório</label>}
                  >
                    <input
                      type="checkbox"
                      id="refeitorio"
                      name="refeitorio"
                      className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                      value={values.lunch}
                      onChange={handleChange}
                    />
                  </DescriptionRow>
                </Collapsible>
              </form>
            )}
          </Formik>
          {schools.map(school => (
            <SchoolCard
              key={school._id}
              school={school}
              className="sm:max-w-sm"
            />
          ))}
        </section>
      </main>
    </Layout>
  );
};

Home.getInitialProps = async ctx => {
  const response = await api.get("/schools", {});

  return { initialSchools: response.data || [] };
};

export default Home;
