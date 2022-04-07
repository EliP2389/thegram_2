import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))
    console.log(suggestions)
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>

      {suggestions.map((profile) => (
        <div
          key={profile.id}
          className="mt-3 flex items-center justify-between "
        >
          <img
            className="h-10 w-10 rounded-full border border-red-500 animate-pulse p-[2px]"
            src={profile.avatar}
            alt=""
          />

          <div className="flex-1 ml-4">
            <h2 className="font-semibold text-sm">{profile.username}</h2>
            <h3 className='text-sm text-gray-500'>Works at {profile.company.name}</h3>
          </div>
          <button className="flex text-xs font-bold text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}
export default Suggestions
