"use client"

import { FilterPanel } from '@/components/filter/filterPanel'
import { FilterSortPanel } from '@/components/filterSortPanel/filterSortPanel'
import { Header } from '@/components/header/header'
import { PokemonList } from '@/components/pokemonList/pokemonList'
import { SearchPanel } from '@/components/searchPanel/searchPanel'
import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

const Home = observer(() => {
  const rootStore = useStore()

  useEffect(() => {
    let scrollPosition = 0
    if (rootStore.blockScroll) {
      scrollPosition = window.scrollY
      document.body.classList.add('blockScroll')
      document.body.style.top = `-${scrollPosition}px`
    } else {
      document.body.classList.remove('blockScroll')
      document.body.style.top = ''
      window.scrollTo(0, scrollPosition)
    }

  }, [rootStore.blockScroll])

  return (
    <div>
      <Header />
      <SearchPanel />
      <FilterSortPanel />
      {rootStore.showFilter && <FilterPanel />}
      <PokemonList />
    </div>
  )
})

export default Home
