"use client"

import { useStore } from "@/models/rootStore"
import { observer } from "mobx-react-lite"
import { useEffect, useRef, useState } from "react"
import { EmptyPokemonList } from '../emptyPokemonList/emptyPokemonList'
import { PokemonCard } from "../pokemonCard/pokemonCard"
import { Skeleton } from '../skeleton/skeleton'
import styles from "./styles.module.css"

export const PokemonList = observer(() => {
  const rootStore = useStore()
  const [isFetching, setIsFetching] = useState(true)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const lastElementRef = useRef<HTMLDivElement | null>(null)
  const [triggerFetchPokemon, setTriggerFetchPokemon] = useState('')
  const fetchedElement = 8

  useEffect(() => {
    rootStore
      .fetchPokemon(rootStore.currentPage + 1)
      .finally(() => setIsFetching(false))
  }, [])


  useEffect(() => {
    const handleIntersect: IntersectionObserverCallback = (entries) => {
      const target = entries[0]
      if (
        target.isIntersecting &&
        !isFetching &&
        rootStore.currentPage * rootStore.itemsPerPage < rootStore.totalItems
      ) {
        setIsFetching(true)
        rootStore
          .fetchPokemon(rootStore.currentPage + 1)
          .finally(() => setIsFetching(false))
      }
    }

    observerRef.current = new IntersectionObserver(handleIntersect, {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    })

    const observer = observerRef.current
    if (lastElementRef.current) {
      observer.observe(lastElementRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [rootStore.pokemonsList.length, triggerFetchPokemon, isFetching])

  useEffect(() => {
    setTriggerFetchPokemon(rootStore?.pokemonsList[rootStore.pokemonsList.length - fetchedElement]?.name)
  }, [rootStore.pokemonsList[rootStore.pokemonsList.length - fetchedElement]])

  return (
    <div className={styles.listContainer}>
      {rootStore.pokemonsList.map((poke) => {
        return (
          <div
            key={poke.id}
            ref={triggerFetchPokemon === poke.name ? lastElementRef : null}
          >
            <PokemonCard
              name={poke.name}
              number={poke.number}
              img={poke.ThumbnailImage}
              types={poke.type}
              alt={poke.ThumbnailAltText}
              slug={poke.slug}
            />
          </div>
        )
      })}
      {(isFetching) ? (Array.from({ length: 18 }).map((_, index) => (
        <Skeleton key={index} />
      ))) : rootStore.pokemonsList.length === 0 && <EmptyPokemonList />}

    </div>
  )
})
