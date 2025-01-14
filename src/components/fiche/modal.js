import Slideshow from "./Slideshow";
import projectsData from "../../datas/projectsData";
import Modal from "react-modal";
import { useEffect, useState } from "react";

function ProjectModal({ isOpen, closeModal, projectId }) {
    const [project, setProject] = useState(null);

    // Utilisation de l'ID du projet pour récupérer les données du projet
    useEffect(() => {
        if (projectId) {
            const foundProject = projectsData.find((project) => project.id === projectId);
            setProject(foundProject); // Mets à jour l'état avec les données du projet
        }
    }, [projectId]); // Recharge les données quand `projectId` change

    if (!project) {
        return (
            <Modal className="pModal" isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modale du projet">
                <div className="modalTop">
                    <h1 className="modalElmt">Projet non trouvé</h1>
                    <i className="fa-solid fa-x modalElmt" onClick={closeModal}></i>
                </div>
                <p className="modalElmt">
                    Oups il semblerait qu'il y ai une problème! Veuillez m'excuser pour ce désagrément.
                    😵
                </p>
            </Modal>
        );
    }

    const tools = project.tools?.map((tool, index) => {
        return (
            <img key={index} src={tool} alt={`Tool ${index + 1}`} className="tool-logo hover" width="50" />
        );
    });

    return (
        <div className="pBlock">
            <Modal className="pModal" isOpen={isOpen} onRequestClose={closeModal} contentLabel="Modale du projet">
                <div className="modalTop">
                    <h1>{project?.title}</h1>
                    <i className="fa-solid fa-x hover" onClick={closeModal}></i>
                </div>
                <div className="info modalElmt">
                    <p>{project?.content}</p>
                    <Slideshow pictures={project.pictures} />
                    <div className="tools modalElmt">{tools}</div>
                </div>
                <div className="links modalElmt">
                    {project.github &&
                        <button className="block hover">
                            <a href={project?.github}>Source</a>
                        </button>
                    }
                    {project.link &&
                        <button className="block hover">
                            <a href={project?.link}>Site</a>
                        </button>
                    }
                </div>
            </Modal>
        </div>
    );
}

export default ProjectModal;