'use client'

import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from "react"
import { ArrowIcon } from '../../../public/icons'
import { SortList } from './sortList'
import styles from "./styles.module.css"

export const SortPanel = observer(() => {
	const panelRef = useRef<HTMLDivElement>(null)
	const rootStore = useStore()
	const [currentSort, setCurrentSort] = useState('Lowest Number First')
	const [isListOpen, setIsListOpen] = useState(false)
	const isFirstRender = useRef(true)

	const toggleList = () => setIsListOpen((prev) => !prev)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
				setIsListOpen(false)
			}
		}

		document.addEventListener("mousedown", handleClickOutside)
		return () => {
			document.removeEventListener("mousedown", handleClickOutside)
		}
	}, [])

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false
			return
		}
		rootStore.fetchPokemon()
	}, [currentSort])

	return (
		<div className={styles.sortContainer} ref={panelRef}>
			<div className={styles.currentSortContainer} onClick={toggleList}>
				<span className={styles.currentSortText}>{currentSort}</span>
				<ArrowIcon
					className={`${styles.sortIcon} ${isListOpen ? styles.openIcon : ""}`}
				/>
			</div>

			{isListOpen && (
				<SortList setCurrentSort={setCurrentSort} setIsListOpen={setIsListOpen} currentSort={currentSort} />
			)}
		</div>
	)
})