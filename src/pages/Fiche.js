import Footer from "../components/footer/Footer";
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
                    <Footer img={"logo"} copyRights={"© 2024 MariaIntWeb. Tous droits réservés"} />
                </>

            }
        </>
    )
}


export default Fiche