import Navbar from "../components/navbar/Navbar";
import Appts from "../components/home/Appts";
import Footer from "../components/footer/Footer";

function Home() {
    return (
        <>
            <Navbar />
            <main className="index">
                <Appts />
            </main>
            <Footer />
        </>
    )
}

//peut ê importé et utilisé dans d'autres fichiers de l'appli
export default Home;