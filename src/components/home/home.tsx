"use client"

import { FilterPanel } from '@/components/filter/filterPanel'
import { FilterSortPanel } from '@/components/filterSortPanel/filterSortPanel'
import { Header } from '@/components/header/header'
import { PokemonList } from '@/components/pokemonList/pokemonList'
import { SearchPanel } from '@/components/searchPanel/searchPanel'
import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'

import Link from 'next/link'



const Home = observer(() => {
  const rootStore = useStore()

  return (
    <div className={`${rootStore.showFilter ? 'showFilter' : ''}`}>
      <Header />
      <SearchPanel />
      <FilterSortPanel />
      <Link href="/pikachu">Open Pikachu</Link>
      <Link href="/bulbasaur">Open Bulbasaur</Link>
      {rootStore.showFilter && <FilterPanel />}
      <PokemonList />
      {rootStore.showFilter && <div className='filterBlur' />}
    </div>
  )
})

export default Home
