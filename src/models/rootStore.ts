import axios from 'axios'
import { flow, Instance, t } from 'mobx-state-tree'
import { PokemonModel } from './pokemonModel'

export const RootStore = t
	.model('RootStore', {
		pokemon: t.array(PokemonModel),
		currentPage: t.optional(t.number, 0),
		itemsPerPage: t.optional(t.number, 50),
		totalItems: t.optional(t.number, 1025),
		sort: t.enumeration('Sort', ['MinId', 'MaxId', 'AToZ', 'ZToA']),
	})
	.actions(store => ({
		fetchPokemon: flow(function* (page = 1) {
			try {
				const response = yield axios.get(`/pokemons`, {
					params: { page, limit: store.itemsPerPage, sort: store.sort },
				})
				if (page === 1) {
					store.pokemon.replace(response.data.pokemons)
				} else {
					store.pokemon.push(...response.data.pokemons)
				}
				store.currentPage = page
			} catch (error) {
				console.error('Ошибка при загрузке данных:', error)
			}
		}),
		changeSort: function (sort = 'MinId') {
			store.sort = sort
		},
	}))

export type RootStoreType = Instance<typeof RootStore>

let rootStore: RootStoreType

export function useStore() {
	if (!rootStore) {
		rootStore = RootStore.create({
			pokemon: [],
			sort: 'MinId',
		})
	}
	return rootStore
}
