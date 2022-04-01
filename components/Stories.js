import { faker } from '@faker-js/faker'
import { useEffect, useState } from 'react'

function Stories() {
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    const suggestions = [...Array(25)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div>
      {suggestions.map((profile) => (
        <Story key="" />
      ))}
    </div>
  )
}
export default Stories
