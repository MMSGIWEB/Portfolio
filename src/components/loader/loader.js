import { useState } from "react"


function Loader() {
    const { count, setCount } = useState(1)
    const letterCount = () => {
        setCount((prevCount) => (prevCount < letters.length ? prevCount + 1 : 1));
    }

    const letters = [
        "P", "A", "S", "S", "I", "O", "N", "", "", "", "",
        "L", "E", "D", "", "", "", "", "", "U", "S", "", "", "", "",
        "H", "E", "R", "E"
    ]

    const loading = letters.map((letter, index) => {
        return (
            <>
                <span class={`letter letter-${index + 1}`}>{letter}</span>
            </>
        )
    })

    return (
        <div class="loader">
            {loading}
        </div>
    )
}

export default Loader;