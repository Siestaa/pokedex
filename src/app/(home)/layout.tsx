import { Roboto } from 'next/font/google'
import Home from '../../components/home/home'

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {

  return (
    <main className={`${roboto.className}`}>
      <Home />
      {children}
    </main>
  )
}

export default HomeLayout
