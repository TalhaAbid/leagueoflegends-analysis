import React from 'react'
import Champion from './Champion'
//import { ChampionStatistics } from "../types/ChampionStatistics";

const DamageAnalysis = (): JSX.Element => {
  console.log('test')
  return (
    <div className="flex justify-around items-center w-screen h-screen bg-stone-500">
      <Champion />
      <Champion />
    </div>
  )
}

export default DamageAnalysis
