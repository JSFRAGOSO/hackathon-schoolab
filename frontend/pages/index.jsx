import React from 'react'
import Head from 'next/head'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-blue-200 m-4 rounded">
      <h1 className="text-xl font-bold text-center p-4">
        Tailwind configurado :)
      </h1>
    </div>
  </div>
)

export default Home
