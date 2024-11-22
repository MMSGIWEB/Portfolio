import Footer from "../components/footer/Footer";
import projects from "../datas/projects.json";
import { useParams } from "react-router-dom";
import ProjectInfo from "../components/fiche/info";


function Modal() {
    const { id } = useParams()
    const work = projects.find((project) => project.id === id)

    return (
        <>
            {work &&
                <>
                    <div className="ficheContent">
                        <ProjectInfo />
                    </div>
                    <Footer img={"logo"} copyRights={"© 2024 MariaIntWeb. Tous droits réservés"} />
                </>

            }
        </>
    )
}


export default Modal;