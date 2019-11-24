import React from "react";
import Head from "next/head";

import Layout from "../../components/MyLayout";

import api from "../../services/api";

const School = ({ school }) => {
  console.log(school);
  return (
    <Layout>
      <Head>
        <title>{school.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <main></main>
    </Layout>
  );
};

School.getInitialProps = async ctx => {
  const response = await api.get("/schools", {
    params: {
      id: ctx.query.schoolId
    }
  });
  console.log(response);
  return { school: response.data };
};

export default School;