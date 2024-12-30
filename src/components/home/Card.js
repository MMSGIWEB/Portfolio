import { useState } from "react";
import projects from "../../datas/projectsData"
import { projectsRef } from "../../refs/refs";
import ProjectModal from "./modal";


function Card() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    // État pour l'ID du projet courant
    const [currentProjectId, setCurrentProjectId] = useState(null);

    // Fonction pour ouvrir la modale
    const openModal = (id) => {
        setCurrentProjectId(id); // Enregistre l'ID du projet dans l'état;
        setModalIsOpen(true);
    }

    // Fonction pour fermer la modale
    const closeModal = () => {
        setModalIsOpen(false);
        setCurrentProjectId(null); // Réinitialise l'ID lorsque la modale est fermée
    }


    return (
        <section ref={projectsRef} id="projects" className="projects-section">
            <h1>PROJECTS</h1>
            <div className="cardsContainer">
                {projects.map((project) => {
                    return (
                        <article key={project.id} onClick={() => openModal(project.id)}>
                            <div className="cardLink">
                                <div className="card">
                                    <img src={project.cover} alt={project.title} className="cardImg" />
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
            <ProjectModal isOpen={modalIsOpen} closeModal={closeModal} projectId={currentProjectId} />
        </section>
    )
}

export default Card;