import React from "react";
import projects from "../../datas/projectsData"
import { projectsRef } from "../../refs/refs";


function Card() {

    return (
        <section ref={projectsRef} id="projects" className="projects-section">
            <h1>PROJECTS</h1>
            <div className="cardsContainer">
                {projects.map((project) => {
                    return (
                        <article key={project.id}>
                            <div className="cardLink">
                                <div className="card">
                                    <img src={project.cover} alt={project.title} className="cardImg" />
                                </div>
                            </div>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Card;