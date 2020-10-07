import React from 'react';
// import { Link } from "react-router-dom";
import Header from "../../Components/Header";
import MainHeader from '../../Components/MainHeader';
import IntroHeader from '../../Components/IntroHeader';

function Home() {
  return (
    <>
      <IntroHeader/>
      <MainHeader/>
      <Header />
    </>
  )
}

export default Home;