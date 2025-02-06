"use client"
import { useRouter } from 'next/navigation'
import styles from "./styles.module.css"

export const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()

  return (
    <div className={styles.modalContainer} onClick={() => router.back()}>
      <div className={styles.modalChild} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
