import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Card from "../components/home/Card";
import SkillsSlider from "../components/home/toolsSlider";
import homeData from "../datas/homeData";
import ContactForm from "../components/home/contact";
import NetworkLinks from "../components/networks/networks";
import { projectsRef } from "../components/refs/refs";

function Home() {

    return (
        <>
            <Navbar />
            <main className="index">
                <section className="top">
                    <p className="intro">{homeData[0].intro}</p>
                </section>
                <Card />
                <SkillsSlider />
                <ContactForm />
                <NetworkLinks />
            </main>
            <Footer />
        </>
    )
}

export default Home;