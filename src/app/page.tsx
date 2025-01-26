"use client"

import { FilterPanel } from '@/components/filter/filterPanel'
import { FilterSortPanel } from '@/components/filterSortPanel/filterSortPanel'
import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { Roboto } from 'next/font/google'
import { Header } from '../components/header/header'
import { PokemonList } from '../components/pokemonList/pokemonList'
import { SearchPanel } from '../components/searchPanel/searchPanel'
import "./page.module.css"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const Home = observer(() => {
  const rootStore = useStore()

  return (
    <main className={`${roboto.className} ${rootStore.showFilter ? 'showFilter' : ''}`}>
      <Header />
      <SearchPanel />
      <FilterSortPanel />
      {rootStore.showFilter && <FilterPanel />}
      <PokemonList />
      {rootStore.showFilter && <div className='filterBlur' />}
    </main>
  )
})

export default Home