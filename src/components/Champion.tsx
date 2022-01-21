import React, { useEffect, useState } from 'react'
import PerLvlStats from './PerLevelStats'

const Champion = () => {
  const [level, setLevel] = useState(0)
  return (
    <div className="flex flex-col items-center bg-gray-600 w-1/5 h-min px-4 mx-4 rounded-lg pb-4 shadow-sm">
      <img
        className="mt-4 rounded-full"
        src="https://static.wikia.nocookie.net/lolesports_gamepedia_en/images/8/8a/Skin_Loading_Screen_Classic_Senna.jpg"
        alt="senna"
      />
      <h3 className="my-4 text-white text-4xl">Senna</h3>
      <span className="my-4 text-white text-bold text-2xl">
        Level: {level}
      </span>{' '}
      <div>
        <button
          onClick={() => (level < 18 ? setLevel(level + 1) : null)}
          className=" mx-2 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        >
          Increase Level
        </button>
        <button
          onClick={() => (level > 1 ? setLevel(level - 1) : null)}
          className=" mx-2 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded"
        >
          Decrease Level
        </button>
      </div>
      <button className="mx-4 my-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded">
        Edit Runes
      </button>
      <PerLvlStats />
    </div>
  )
}

export default Champion
