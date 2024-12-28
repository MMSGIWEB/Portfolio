import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/home/Card";
import SkillsSlider from "../components/home/toolsSlider";
import homeData from "../datas/homeData";
import ContactForm from "../components/home/contact";
import NetworkLinks from "../components/networks/networks";
import { scrollToSection, topRef } from "../refs/refs";

function Home() {

    return (
        <>
            <Navbar />
            <main className="index">
                <div className="msg">Hello! Le site est actuellement en cours de maintenance. Mais vous pouvez néamoins avoir accès à celui-ci, consulter les projets et les infos me concernant ! Merci d'avance pour votre patience et compréhension ! Bonne visite ! </div>
                <section ref={topRef} className="top" id="goUp">
                    <p className="intro">{homeData[0].intro}</p>
                </section>
                <Card />
                <SkillsSlider />
                <ContactForm />
                <NetworkLinks />
                <div onClick={() => scrollToSection(topRef)} className="goUpArrow" >
                    <i className="fa-solid fa-arrow-up"></i>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home;