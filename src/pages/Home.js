import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import logo from "../assets/images/logo/logolast.png"
import Card from "../components/home/Card";
import SkillsSlider from "../components/home/skills";

function Home() {
    return (
        <>
            <Navbar />
            <main className="index">
                <section className="top">
                    <div className="logo-container">
                        <h1 className="title">MariaIntWeb</h1>
                        <div className="line"></div>
                        <p className="under-title">Développeuse Front-end / Intégratrice Web</p>
                    </div>
                    <div className="intro">text</div>
                </section>
                <Card />
                <SkillsSlider />
            </main>
            <Footer />
        </>
    )
}

//peut ê importé et utilisé dans d'autres fichiers de l'appli
export default Home;