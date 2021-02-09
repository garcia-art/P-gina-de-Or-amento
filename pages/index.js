import React from 'react'
import * as S from '../styles/index'
import Header from '../src/containers/Header'
import Confidential from '../src/containers/Confidential'
import Declaration from '../src/containers/Declaration'
import Merchandising from '../src/containers/Merchandising'
import Challenge from '../src/containers/Challenge'
import Solution from '../src/containers/Solution'
import Schedule from '../src/containers/Schedule'
import Testimonials from '../src/containers/Testimonials'
import Values from '../src/containers/Values'
import Footer from '../src/containers/Footer'
import GlobalStyle from '../styles/global'



export default function Home() {
  return (
  <S.Wrapper>
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
