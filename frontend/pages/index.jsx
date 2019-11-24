import React, { useState, useCallback, useEffect } from "react";
import Head from "next/head";
import { Formik } from "formik";
// import { SearchBar } from "../components/SearchBar";
import { CallToAction } from "../components/CallToAction";
import { SchoolCard } from "../components/SchoolCard";
import { Collapsible } from "../components/Collapsible";
import { DescriptionRow } from "../components/DescriptionRow";
import Layout from "../components/MyLayout";
import Tag from "../icons/tag.svg";
import Accessibility from "../icons/accessibility.svg";
import Explore from "../icons/explore.svg";
import Food from "../icons/food.svg";
import api from "../services/api";
import series from "../_data/series.json";

const Home = ({ initialSchools = [] }) => {
  const [schools, setSchools] = useState(initialSchools);

  const onSubmitForm = (values, { setSubmitting }) => {
    setSubmitting(true);
    async function fetchSchools() {
      const response = await api.get("/schools", { params: {} });
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
            Descubra a escola certa
          </CallToAction>
        </section>

        <section className="mt-4">
          <Formik
            initialValues={{
              search: "",
              recommended: false,
              morning: true,
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
                <Collapsible className="mt-2" label="Filtros">
                  <DescriptionRow
                    className="flex-col"
                    icon={<Tag />}
                    label={
                      <label className="flex-1" htmlFor="recommended">
                        Séries
                      </label>
                    }
                  >
                    <select
                      name="serie"
                      value={values.serie}
                      onChange={handleChange}
                      className="w-full focus:shadow-outline form-select my-auto border-brand-400 text-brand-600"
                    >
                      {series.map(s => (
                        <option value={s.value}>{s.name}</option>
                      ))}
                    </select>
                  </DescriptionRow>
                  <DescriptionRow
                    className="flex-col"
                    icon={<Explore />}
                    label="Tipo de escola"
                  >
                    <div className="flex px-2">
                      <label>
                        <input
                          type="radio"
                          name="type"
                          value="publica"
                          className="ml-auto mr-2 focus:shadow-outline form-radio my-auto border-brand-400 text-brand-600"
                          checked={values.type === "publica"}
                          onChange={handleChange}
                        />
                        <span>Pública</span>
                      </label>
                      <label className="ml-4">
                        <input
                          type="radio"
                          name="type"
                          value="privada"
                          className="ml-auto mr-2 focus:shadow-outline form-radio my-auto border-brand-400 text-brand-600"
                          checked={values.type === "privada"}
                          onChange={handleChange}
                        />
                        <span>Privada</span>
                      </label>
                    </div>
                  </DescriptionRow>
                  <DescriptionRow
                    icon={<Accessibility />}
                    label="Acessibilidade"
                  >
                    <input
                      type="checkbox"
                      name="dependencia_pne"
                      className="ml-auto mr-2 focus:shadow-outline form-checkbox my-auto border-brand-400 text-brand-600"
                      value={values["dependencia_pne"]}
                      onChange={handleChange}
                    />
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
                  <div className="m-2">
                    <button
                      type="submit"
                      className="block w-full bg-highlight-600 text-brand-600 text-sm font-semibold py-3 px-4 text-center rounded-lg shadow focus:shadow-outline"
                    >
                      Pesquisar
                    </button>
                  </div>
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
