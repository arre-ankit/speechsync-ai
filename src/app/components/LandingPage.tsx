"use client";
import React, { use } from 'react'
import Footor from './Footor';
import Hero from './Hero';
import FaqLandingPage from './FaqLandingPage';
import MiddleSectionLanding from './MiddleSectionLanding';


type Props = {}
export const runtime = 'edge'


const LandingPage = (props: Props) => {
  return (
    <div>
    <div className="flex flex-col min-h-100vh dark">
    <main className="flex-1">
    <Hero />
    <MiddleSectionLanding/>
    <FaqLandingPage/>
  </main>
      <Footor />
</div>
</div>
  )
}


export default LandingPage