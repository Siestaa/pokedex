"use client"

import { useStore } from '@/models/rootStore'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { CheckBoxIcon, EmptyCheckBoxIcon } from '../../../../public/icons'
import styles from '../styles.module.css'
import { PokemonType } from './filterTypes'

interface FilterTypeProps {
  text: PokemonType
}

export const FilterType = observer(({ text }: FilterTypeProps) => {
  const { filters, changeCustomFilters } = useStore()

  const [isActive, setIsActive] = useState(filters.types.includes(text))

  const toggleFilter = () => {
    setIsActive((prev) => !prev)
    changeCustomFilters(text)
  }

  return (
    <div className={styles.typeContainer} onClick={toggleFilter}>
      {isActive ? <CheckBoxIcon /> : <EmptyCheckBoxIcon />}
      <span className={styles.typeText}>{text}</span>
    </div>
  )
})
