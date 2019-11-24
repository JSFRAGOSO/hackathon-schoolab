import React, { useState } from "react";
import Head from "next/head";
import { Formik } from "formik";
import Layout from "../components/MyLayout";
import ArrowRight from "../icons/arrowRight.svg";
import api from "../services/api";

const MAX_SLIDES = 6;

const Questions = ({ questions }) => {
  const [slide, setSlide] = useState(0);

  const onNextSlide = () => {
    setSlide(slide => slide + 1);
  };

  console.log(questions);

  return (
    <Layout>
      <Head>
        <title>Escolha sua escola</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <main className="h-full w-full p-2">
        <h1 className="font-semibold text-brand-600 text-sm">
          Responda as perguntas para descobrir a melhor escola para seu filho
        </h1>
        <Formik>
          {({ values, handleChange, handleBlur, handleSubmit }) => (
            <main className="h-full w-full p-2 flex flex-col">
              <form onSubmit={handleSubmit}>
                <div className="h-full w-full bg-white p-4 rounded-xl">
                  <div></div>
                  <div className="flex flex-col items-center mt-4">
                    <button
                      className="bg-brand-600 text-white flex py-3 px-4 rounded-full items-center"
                      type={slide === MAX_SLIDES ? "submit" : "button"}
                    >
                      <span className="text-sm font-semibold">
                        Próxima pergunta
                      </span>
                      <ArrowRight className="ml-4 text-sm" />
                    </button>
                  </div>
                </div>
              </form>
            </main>
          )}
        </Formik>
      </main>
    </Layout>
  );
};

Questions.getInitialProps = async ctx => {
  const response = await api.get("/questions");
  console.log(response);
  return { questions: response.data };
};

export default Questions;
