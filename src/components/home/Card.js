import { useState } from "react";
import projects from "../../datas/projectsData"
import { projectsRef } from "../../refs/refs";
import ProjectModal from "./modal";


function Card() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    // Fonction pour ouvrir la modale
    const openModal = () => setModalIsOpen(true);
    // Fonction pour fermer la modale
    const closeModal = () => setModalIsOpen(false);

    return (
        <section ref={projectsRef} id="projects" className="projects-section">
            <h1>PROJECTS</h1>
            <div className="cardsContainer">
                {projects.map((project) => {
                    return (
                        <article key={project.id} onClick={openModal}>
                            <div className="cardLink">
                                <div className="card">
                                    <img src={project.cover} alt={project.title} className="cardImg" />
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
            <ProjectModal isOpen={modalIsOpen} closeModal={closeModal} />
        </section>
    )
}

export default Card;