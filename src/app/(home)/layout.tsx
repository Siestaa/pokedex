import Home from '../../components/home'

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div>
      <Home />
      {children}
    </div>
  )
}

export default HomeLayout
