import faker from "@faker-js/faker";
import { useEffect } from "react";

function Suggestions() {
const [suggetsions, setSuggestions] = useState([]);

useEffect(() => {
    const suggestions = [...Array(6)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i
    }))

    setSuggestions(suggestions);
}, []);

  return (
    <div>

    </div>
  )
}
export default Suggestions