import React, { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import { SearchBar } from '../components/SearchBar'
import { CallToAction } from '../components/CallToAction'
import { SchoolCard } from '../components/SchoolCard'
import api from '../services/api'

const Home = () => {
  const [search, setSearch] = useState();
  const onSearch = useCallback((e) => {
    setSearch(e.target.value)
  })

  const [schools, setSchool] = useState([]);

  useEffect(() => {


    async function getSchools() {
      const response = await api.get('/schools', {});
      setSchool(response.data);
    }
    getSchools();

    console.log('RESPONSE >>>>', setSchool);
  }, [])
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="/styles.css" rel="stylesheet" />
      </Head>
      <div className="bg-gray-200 p-2 min-h-screen">
        <SearchBar placeholder="Pesquisar por escola" value={search} onChange={onSearch} />
        <CallToAction href="#" className="mt-2">
          <span>Responda as perguntas e descubra a escola mais indicada</span>
        </CallToAction>
        { schools.map( school => (
          <SchoolCard school={school}/>
        ))}      
      </div>

    </div>
  )
}
export default Home
