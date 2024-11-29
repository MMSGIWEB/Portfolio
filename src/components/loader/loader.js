import { useState, useEffect } from "react";

function Loader() {
    const [count, setCount] = useState(1); // Nombre de mots affichés

    const letters = [
        ["P", "A", "S", "S", "I", "O", "N"],
        ["L", "E", "D"],
        ["U", "S"],
        ["H", "E", "R", "E"],
    ];

    // Effet pour gérer l'affichage progressif des mots
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevCount) => (prevCount < letters.length ? prevCount + 1 : 1));
        }, 1500); // Mise à jour toutes les 1 seconde
        return () => clearInterval(interval);
    }, [letters.length]);

    return (
        <div className="loader">
            <div className="container">
                {letters.slice(0, count).map((word, wordIndex) => (
                    <div key={wordIndex} className={`word word-${wordIndex + 1}`}>
                        {word.map((letter, letterIndex) => (
                            <span
                                key={letterIndex}
                                className={`letter letter-${letterIndex + 1}`}
                            >
                                {letter}
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Loader;
