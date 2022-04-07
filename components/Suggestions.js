import faker from '@faker-js/faker'
import { useEffect, useState } from 'react'

function Suggestions() {
  const [suggetsions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See All</button>
      </div>
    </div>
  )
}
export default Suggestions
