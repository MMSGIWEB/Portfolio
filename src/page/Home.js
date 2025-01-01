import { useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/home/Card";
import homeData from "../datas/homeData";
import ContactForm from "../components/home/contact";
import NetworkLinks from "../components/networks/networks";
import { scrollToSection, topRef } from "../refs/refs";
import AboutMe from "../components/about/about";
import Skills from "../components/home/tools";

function Home() {
    useEffect(() => {
        // Création l'observateur pour la classe 'element'
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible'); // Ajouter la classe 'visible' à l'élément lorsqu'il devient visible
                        observer.unobserve(entry.target); // Arrêter d'observer une fois l'élément visible
                    }
                });
            },
            { threshold: 0.5 } // Seuil à 50% pour que l'élément soit considéré comme visible
        );

        // Sélectionne uniquement les éléments avec la classe '.element'
        const elementsToObserve = document.querySelectorAll('.element');
        elementsToObserve.forEach((el) => observer.observe(el));

        // Nettoie l'observateur lorsqu'on quitte le composant
        return () => {
            elementsToObserve.forEach((el) => observer.unobserve(el));
        };
    }, []); // L'effet se lance une seule fois, au montage du composant

    return (
        <>
            <Navbar />
            <main className="index">
                <p className="msg element">Hello! Le site est actuellement en cours de maintenance. Mais vous pouvez néanmoins avoir accès à celui-ci, consulter les projets et les infos me concernant ! Merci d'avance pour votre patience et compréhension ! Bonne visite ! </p>

                <section ref={topRef} className="top" id="goUp">
                    <p className="intro element">{homeData[0].intro}</p>
                </section>

                <Card />
                <Skills />
                <AboutMe />
                <ContactForm />
                <NetworkLinks />

                <div onClick={() => scrollToSection(topRef)} className="goUpArrow element">
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Home;
