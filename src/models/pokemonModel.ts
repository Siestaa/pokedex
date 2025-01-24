import { t } from 'mobx-state-tree'

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
	type: t.array(t.string), // Массив типов покемона
})
