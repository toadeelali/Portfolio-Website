import React, {useEffect, useState} from 'react'

import {Header, Gists, Footer, Work, Repositories} from 'containers';

import './Home.module.css'

const Home = () => {
  const [fadeIntro, setFadeIntro]: any = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIntro(true);
    });
  }, []);

  return (
    <div className={`home  ${fadeIntro ? 'home-initialized' : ''}`}>
      <Header />
      <Repositories />
      <Work />
      <Gists />
      <Footer />
    </div>
  )
};

export default Home;
