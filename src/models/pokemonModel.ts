import { t } from 'mobx-state-tree'

const PokemonType = t.enumeration('PokemonType', [
	'bug',
	'dark',
	'dragon',
	'electric',
	'fairy',
	'fighting',
	'fire',
	'flying',
	'ghost',
	'grass',
	'ground',
	'ice',
	'normal',
	'poison',
	'psychic',
	'rock',
	'steel',
	'water',
])

export const PokemonModel = t.model('PokemonModel', {
	abilities: t.array(t.string), // Массив строк для способностей
	detailPageURL: t.string, // URL страницы с деталями
	weight: t.number, // Вес покемона
	weakness: t.array(t.string), // Массив слабостей
	number: t.string, // Номер покемона в виде строки
	height: t.number, // Рост покемона
	collectibles_slug: t.string, // Слаг для коллекционных предметов
	featured: t.string, // Отметка "в избранном"
	slug: t.string, // Слаг покемона
	name: t.string, // Имя покемона
	ThumbnailAltText: t.string, // Текст альтернативного описания
	ThumbnailImage: t.string, // URL изображения покемона
	id: t.number, // ID покемона
	type: t.array(PokemonType), // Массив типов покемона, ограничен конкретными значениями
})

export const PokemonFiltersModel = t.model('PokemonFilters', {
	types: t.array(PokemonType), // Фильтр типов
	height: t.array(t.string), // Фильтр по росту
	weight: t.array(t.string), // Фильтр по весу
	text: t.string, // Поиск по тексту
	sort: t.enumeration('Sort', ['MinId', 'MaxId', 'AToZ', 'ZToA']), // Сортировка
})
