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
  const response = await api.get(`/schools/`, {
    params: { _id: ctx.query.schoolId }
  });

  return { school: response.data[0] };
};

export default School;
