import Footer from "../components/footer/Footer";
import footerLogo from "../assets/images/logo/logo-white.png"
import Slideshow from "../components/fiche/Slideshow";
import ApptInfo from "../components/fiche/ApptInfo";
import Navbar from "../components/navbar/Navbar";
import { useParams } from "react-router-dom";
import appts from "../datas/logements.json";


function Fiche() {
    const { id } = useParams()
    const logement = appts.find((appt) => appt.id === id)

    return (
        <>
            {logement &&
                <>
                    <Navbar />
                    <main className="ficheContent">
                        <Slideshow />
                        <ApptInfo />
                    </main>
                    <Footer img={footerLogo} copyRights={"© 2020 Kasa. All rights reserved"} />
                </>

            }
        </>
    )
}


export default Fiche