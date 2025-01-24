import { FilterSortPanel } from '@/components/filterSortPanel/filterSortPanel'
import { Roboto } from 'next/font/google'
import { Header } from '../components/header/header'
import { PokemonList } from '../components/pokemonList/pokemonList'
import { SearchPanel } from '../components/searchPanel/searchPanel'
import "./page.module.css"

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export default function Home() {

  return (
    <main className={roboto.className}>
      <Header />
      <SearchPanel />
      <FilterSortPanel />
      <PokemonList />
    </main>
  )
}
