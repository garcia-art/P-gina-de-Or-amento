import React from 'react'
import * as S from '../styles/index'
import Header from '../containers/Header'
import Confidential from '../containers/Confidential'
import Declaration from '../containers/Declaration'
import Merchandising from '../containers/Merchandising'
import Challenge from '../containers/Challenge'
import Solution from '../containers/Solution'
import Schedule from '../containers/Schedule'
import Testimonials from '../containers/Testimonials'
import Values from '../containers/Values'
import Footer from '../containers/Footer'
import GlobalStyle from '../styles/global'
import Head from 'next/head'



export default function Home() {
  return (
  <S.Wrapper>
  <Head>
    <title>Orçamento Empresarial</title>
  </Head>
  <GlobalStyle/>
  <Header/>
  <Confidential/>
  <Declaration/>
  <Challenge/>
  <Solution/>
  <Merchandising/>
  <Schedule/>
  <Testimonials/>
  <Values/>
  <Footer/>
  </S.Wrapper>
  );
}
