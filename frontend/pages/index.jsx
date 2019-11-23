import React, { useState, useCallback } from 'react'
import Head from 'next/head'
import { SearchBar } from '../components/SearchBar'
import { CallToAction } from '../components/CallToAction'

const Home = () => {
  const [ search, setSearch ] = useState();
  const onSearch = useCallback((e) => {
    setSearch(e.target.value)
  })
  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="bg-gray-200 p-2 min-h-screen">
      <SearchBar placeholder="Pesquisar por escola" value={search} onChange={onSearch} />
      <CallToAction href="#" className="mt-4">
        <span>Responda as perguntas e descubra a escola mais indicada</span>
      </CallToAction>
    </div>
  </div>
)
  }
export default Home
