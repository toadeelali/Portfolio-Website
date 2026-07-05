import {Footer, Gists, Header, Repositories, Work} from 'containers'
import {useEffect, useState} from 'react'

const Home = () => {
  const [fadeIntro, setFadeIntro]: any = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setFadeIntro(true)
    })
  }, [])

  return (
    <div className={` ${fadeIntro ? 'animate-fade-content' : ''}`}>
      <Header />
      <Repositories />
      <Work />
      <Gists />
      <Footer />
    </div>
  )
}

export default Home
