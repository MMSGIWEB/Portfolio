import Slideshow from "../fiche/Slideshow";
import projectsData from "../../datas/projectsData";
import Modal from 'react-modal';
import { useEffect, useState } from "react";

function ProjectModal({ isOpen, closeModal, projectId }) {
    // //récup de l'id de la fiche concernée
    // const { id } = useParams()
    // //fait correspondre l'id à avec un projet
    // const project = projectsData.find((work) => work.id === id)

    const [project, setProject] = useState(null);

    // Utilisation de l'ID du projet pour récupérer les données du projet
    useEffect(() => {
        if (projectId) {
            const foundProject = projectsData.find(project => project.id === projectId);
            setProject(foundProject); // Mets à jour l'état avec les données du projet
        }
    }, [projectId]); // Recharge les données quand `projectId` change


    if (!project) {
        return (
            <Modal className="pModal" isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modale du projet">
                <i className="fa-solid fa-x" onClick={closeModal}></i>
                <h1>Projet non trouvé</h1>
                <p>Oups il semblerait qu'il y ai une problème! Veuillez m'excuser pour ce désagrément. 😵</p>
            </Modal>
        );
    }

    const tools = project.tools?.map((tool, index) => {
        return (
            <img key={index} src={tool} alt={`Tool ${index + 1}`} className="tool-logo" width="50" />
        )
    })

    console.log("valeur de gitHub:", project?.github)

    return (
        <div className="pBlock">
            <Modal className="pModal" isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modale du projet">
                <i className="fa-solid fa-x" onClick={closeModal}></i>
                <h1>{project?.title}</h1>
                <div className="info">
                    <p>{project?.content}</p>
                    {/* <Slideshow /> */}
                    <div className="tools" >
                        {tools}
                    </div>
                </div>
                <div className="links">
                    <div className="block">
                        <a href={project?.github}>
                            <button>Source</button>
                        </a>
                    </div>
                    <div className="block">
                        <a href={project?.link}>
                            <button>Site</button>
                        </a>
                    </div>
                </div>
            </Modal >
        </div>
    )
}

export default ProjectModal;
