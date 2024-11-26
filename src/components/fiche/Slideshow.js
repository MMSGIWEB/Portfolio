import React, { useState } from "react";
import projectsData from "../../datas/projectsData"
import { useParams } from "react-router-dom";

function Slideshow() {
    const { id } = useParams()
    const work = projectsData.find((project) => project.id === id)
    const [currentPicture, setCurrentPicture] = useState(0)
    const source = ""

    //décompte des img sous format "nb/nbTotalimg"
    const getFormattedImageCount = () => {
        if (pictures.length > 1) {
            const totalImageCount = work?.pictures.length;
            const currentImageCount = currentPicture + 1;

            return `${currentImageCount}/${totalImageCount}`
        }
    }

    //récup des images pour chaque fiche work
    const pictures = work?.pictures.map((picture, index) => {
        if (work.pictures.length > 0) {
            return (
                <img
                    key={index}
                    src={picture}
                    alt="image du work"
                    className="current-img"
                />
            );
        }
        return null; // Si la condition n'est pas remplie, rien ne sera rendu
    });

    const moveToNext = () => {
        //currentState va changer de 1 à 1, sans dépasser la longueur du nb d'img
        //'%..' limite la longueur de l'arrêt
        setCurrentPicture((currentPicture + 1) % pictures.length)
    }

    const moveToPrevious = () => {

        setCurrentPicture((currentPicture - 1 + pictures.length) % pictures.length);

        //notre constante équivaut l'img actuelle - 1 lorsqu'on on arrive à la fin du nb d'imgs
        const afterPictureLength = currentPicture - 1
        //mais si c'est inférieur à 0 on applique 
        if (afterPictureLength < 0) {
            //application du changement d'img avec le code en ()
            setCurrentPicture(pictures.length - 1)
            return
        }
        //sinon le code habituel pour le changement d'img
        setCurrentPicture((currentPicture - 1) % pictures.length)
    }


    return (
        <>
            <div className="infoBanner">
                {pictures}
                {/* expression conditionnelle : si le nombre d'img est supérieur à 1 alors on intègre les flèches */}
                <button className="arrowLeft arrow">
                    {pictures.length > 1 && (
                        <i className="fa-solid fa-chevron-left" onClick={moveToPrevious}></i>
                    )}
                </button>
                <button className="arrowRight arrow">
                    {pictures.length > 1 && (
                        <i className="fa-solid fa-chevron-right" onClick={moveToNext}></i>
                    )}
                </button>
                <span className="imgCount">{getFormattedImageCount()}</span>
            </div>

        </>
    )
}

export default Slideshow;