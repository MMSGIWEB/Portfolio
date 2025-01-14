// SVGs
import css from '../assets/images/svg-tools/css.svg'
import html from '../assets/images/svg-tools/html.svg'
import javascript from '../assets/images/svg-tools/javascript.svg'
import react from '../assets/images/svg-tools/react.svg'
import redux from '../assets/images/svg-tools/redux.svg'
import sass from '../assets/images/svg-tools/sass.svg'
import coverP3 from '../assets/images/projects/booki1.webp'
import coverP4 from '../assets/images/projects/ohmyfood0.webp'
import coverP5 from '../assets/images/projects/print-it.webp'
import coverP6 from '../assets/images/projects/sophie1.webp'
import coverP7 from '../assets/images/projects/kasa.webp'
import coverP8 from '../assets/images/projects/nina2.webp'
import coverP9 from '../assets/images/projects/724events2.webp'
import coverP10 from '../assets/images/projects/argentbank3.webp'
import coverP11 from '../assets/images/projects/qwenta.webp'
import { imgP4, imgP6, imgP7, imgP10, imgP3, imgP8 } from './imgImport'

const projectsData = [
    {
        "id": "11202403",
        "title": "Booki",
        "cover": coverP3,
        "github": "https://github.com/MMSGIWEB/Booki",
        "link": "https://mmsgiweb.github.io/Booki/",
        "tools": [
            html,
            css
        ],
        "content": "Intégration de la page d'accueil d'une agence de voyage avec HTML & CSS sur appui de la maquette figma. En plus du responsive sur tablette et mobile",
        "pictures": imgP3
    },
    {
        "id": "11202404",
        "title": "Ohmyfood",
        "cover": coverP4,
        "github": "https://github.com/MMSGIWEB/Ohmyfood",
        "link": "https://mmsgiweb.github.io/Ohmyfood/",
        "tools": [
            html,
            sass,
            css
        ],
        "content": "Le projet OhMyFood a pour objectif de développer une application web permettant aux utilisateurs de consulter les menus de différents restaurants gastronomiques. L'objectif principal est de permettre aux utilisateurs de composer leur propre menu et de passer leur commande en ligne, afin d'améliorer l'expérience culinaire et la commodité pour les clients.",
        "pictures": imgP4
    },
    {
        "id": "11202405",
        "title": "Print it",
        "cover": coverP5,
        "github": "https://github.com/MMSGIWEB/Print-it-JS",
        "link": "https://mmsgiweb.github.io/Print-it-JS/",
        "tools": [
            html,
            css,
            javascript
        ],
        "content": "Le projet Print It vise à développer une application web permettant aux utilisateurs d'envoyer des fichiers à imprimer et de les récupérer ultérieurement dans un point de collecte spécifié. Ici, j'ai intégré un carrousel à l'emplacement de la bannière.",
    },
    {
        "id": "11202406",
        "title": "Sophie Bluel",
        "cover": coverP6,
        "github": "https://github.com/MMSGIWEB/Portfolio-architecte-sophie-bluel",
        "link:": "https://mmsgiweb.github.io/Portfolio-architecte-sophie-bluel/",
        "tools": [
            html,
            css,
            javascript
        ],
        "content": "Le projet de portfolio de Sophie Bluel a pour objectif principal de lui permettre de se connecter en tant qu'administratrice après avoir récupéré dynamiquement ses travaux depuis le back-end. Par la suite, elle sera capable de modifier sa galerie en ajoutant ou supprimant un travail via une modale.",
        "pictures": imgP6
    },
    {
        "id": "11202407",
        "title": "Kasa",
        "cover": coverP7,
        "github": "https://github.com/MMSGIWEB/Kasa",
        "link": "https://mmsgiweb.github.io/Kasa/",
        "tools": [
            html,
            css,
            sass,
            react,
            javascript
        ],
        "content": "Le projet Kasa consiste à développer une application web de location immobilière en utilisant React et React Router. L\"objectif est de créer une interface front-end fluide et moderne, en respectant les designs fournis, et en utilisant des données simulées. En plus du responsive en version desktop et mobile.",
        "pictures": imgP7
    },
    {
        "id": "11202408",
        "title": "Nina Carducci",
        "cover": coverP8,
        "github": "https://github.com/MMSGIWEB/nina-carducci",
        "link": "https://mmsgiweb.github.io/nina-carducci/",
        "content": "Ici, il s'agit de l'optimisation du site de Nina Carducci. Avec l'aide de l'outil Lighthouse et WAVE, j'ai pu optimiser les performances du site, en plus du SEO technique et la correction de l'accessibilité. J'ai également ajouté le référencement local et les réseaux sociaux, ce qui vise à améliorer la visibilité du site de la photographe et qui contribue à l'augmentation de la notoriété et de l'accessibilité de son activité.",
        "pictures": imgP8
    },
    {
        "id": "11202409",
        "title": "724events",
        "cover": coverP9,
        "github": "https://github.com/MMSGIWEB/724events",
        "link": "https://mmsgiweb.github.io/724events/",
        "tools": [
            javascript
        ],
        "content": "Ce projet consiste à débugger et finaliser le développement d'un site one-page pour une agence d'événementiel. Ici, j'ai identifié et corrigé les bugs, complété le cahier de recette de tests et géré le projet avec des outils de développement.",
    },
    {
        "id": "11202410",
        "title": "ArgentBank",
        "cover": coverP10,
        "github": "https://github.com/MMSGIWEB/ArgentBank",
        "link": "https://mmsgiweb.github.io/ArgentBank/",
        "tools": [
            html,
            css,
            react,
            javascript,
            redux
        ],
        "content": "Ce projet consiste à développer le front-end d'une application bancaire en utilisant React et Redux pour offrir une expérience utilisateur dynamique et réactive. J'ai dû par la suite penser aux routes API qui devaient être modélisées du côté back-end à l'aide et le présenter sur un support Swagger (.yaml).",
        "pictures": imgP10
    },
    {
        "id": "11202411",
        "title": "Qwenta",
        "cover": coverP11,
        "github": "https://github.com/MMSGIWEB/Qwenta",
        "content": "Ce projet consiste à planifier et documenter le développement d'un site web en mettant en place un système de veille. Et en définissant des spécifications fonctionnelles et techniques, ainsi qu'en organisant un tableau Kanban. Ensuite, j'ai dû découper les tâches, estimer leur complexité et préparer une présentation finale pour le Product Owner du projet.",
    }
]

export default projectsData;