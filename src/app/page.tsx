import { Roboto } from 'next/font/google'
import { Header } from '../components/header/header'
import { PokemonList } from '../components/pokemonList/pokemonList'
import { SearchPanel } from '../components/searchPanel/searchPanel'
import { SortPanel } from '../components/sortPanel/sortPanel'
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
      <SortPanel />
      <PokemonList />
    </main>
  )
}
