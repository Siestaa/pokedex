"use client"
import { useRouter } from "next/navigation"
import { useEffect } from 'react'
import styles from "./styles.module.css"

const preventScroll = (event: WheelEvent | TouchEvent) => {
  event.preventDefault()
}

const disableScroll = () => {
  const mainComp = document?.querySelector<HTMLElement>(".blockScroll")
  if (mainComp) {
    mainComp.addEventListener("wheel", preventScroll, { passive: false })
    mainComp.addEventListener("touchmove", preventScroll, { passive: false })
  }

}

const enableScroll = () => {
  const mainComp = document?.querySelector<HTMLElement>(".blockScroll")
  if (mainComp) {
    mainComp.removeEventListener("wheel", preventScroll)
    mainComp.removeEventListener("touchmove", preventScroll)
  }
}

export const Modal = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter()

  useEffect(() => {
    disableScroll()

    return () => {
      enableScroll()
    }
  }, [])

  return (
    <div
      className={styles.modalContainer}
      onClick={() => router.back()}
    >
      <div
        className={styles.modalChild}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
