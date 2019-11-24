import React, { useState, useCallback } from 'react'
import Head from 'next/head'
import { SearchBar } from '../components/SearchBar'
import { CallToAction } from '../components/CallToAction'
import { SchoolCard } from '../components/SchoolCard'

const Home = () => {
  const [search, setSearch] = useState();
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
        <CallToAction href="#" className="mt-2">
          <span>Responda as perguntas e descubra a escola mais indicada</span>
        </CallToAction>
        <SchoolCard>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">

            <img class="w-full" src="/school.jpg" alt="Sunset in the mountains">
             
            </img>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p class="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 py-4">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
            </div>
          </div>
        </SchoolCard>
      </div>

    </div>
  )
}
export default Home
