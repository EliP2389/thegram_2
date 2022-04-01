import { faker } from '@faker-js/faker'
import { useEffect } from 'react'

function Stories() {
  useEffect(() => {
    const suggestions = [...Array(25)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));console.log(suggestions)
  }, [])

  return <div></div>
}
export default Stories
