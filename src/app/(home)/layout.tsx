import Home from '../../components/home/home'

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <main>
      <Home />
      {children}
    </main>
  )
}

export default HomeLayout
