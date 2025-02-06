"use client"
import { useRouter } from "next/navigation"
import { useEffect } from 'react'
import styles from "./styles.module.css"

const preventScroll = (event: WheelEvent | TouchEvent) => {
  event.preventDefault()
}

const disableScroll = () => {
  window.addEventListener("wheel", preventScroll, { passive: false })
  window.addEventListener("touchmove", preventScroll, { passive: false })
}

const enableScroll = () => {
  window.removeEventListener("wheel", preventScroll)
  window.removeEventListener("touchmove", preventScroll)
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
