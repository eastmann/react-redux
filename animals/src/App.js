import { useState } from 'react'

import AnimalShow from "./AnimalShow"

function App() {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1)
    }

    return <div>
        <button onClick={handleClick}>Add Animal</button>
        <div>Number of Animals: { count }</div>
        <AnimalShow />
    </div>
}

export default App