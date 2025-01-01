import React, { useState } from "react";

function Slideshow({ pictures }) {
    const [currentPicture, setCurrentPicture] = useState(0);

    if (!pictures || pictures.length === 0) {
        return <p>Aucune image à afficher pour ce projet.</p>;
    }

    // Fonction pour attribuer une classe à l'image affichée
    const getClassName = (i) => (i === currentPicture ? "currentImg" : "");

    // Décompte des images (format "nb/nbTotalimg")
    const getFormattedImageCount = () => {
        const totalImageCount = pictures.length;
        const currentImageCount = currentPicture + 1;

        return `${currentImageCount}/${totalImageCount}`;
    };

    // Navigation vers l'image suivante
    const moveToNext = () => {
        setCurrentPicture((currentPicture + 1) % pictures.length);
    };

    // Navigation vers l'image précédente
    const moveToPrevious = () => {
        setCurrentPicture(
            (currentPicture - 1 + pictures.length) % pictures.length
        );
    };

    return (
        <div className="slideshow element">
            <div className="infoBanner">
                <div className="imageContainer">
                    {pictures.map((picture, i) => (
                        <img
                            key={i}
                            src={picture}
                            alt={`Image ${i + 1}`}
                            className={getClassName(i)}
                        />
                    ))}
                </div>
                {pictures.length > 1 && (
                    <>
                        <button className="arrowLeft arrow element" onClick={moveToPrevious}>
                            <i className="fa-solid fa-chevron-left"></i>
                        </button>
                        <button className="arrowRight arrow element" onClick={moveToNext}>
                            <i className="fa-solid fa-chevron-right"></i>
                        </button>
                        <span className="imgCount">{getFormattedImageCount()}</span>
                    </>
                )}
            </div>
        </div>
    );
}

export default Slideshow;
