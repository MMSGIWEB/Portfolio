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
                <section ref={topRef} className="top" id="goUp">
                    <p className="intro">{homeData[0].intro}</p>
                </section>
                <Card />
                <SkillsSlider />
                <ContactForm />
                <NetworkLinks />
                <a onClick={() => scrollToSection(topRef)} className="goUpArrow" >
                    <i className="fa-solid fa-arrow-up"></i>
                </a>
            </main>
            <Footer />
        </>
    )
}

export default Home;