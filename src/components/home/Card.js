import React from "react";
import { NavLink } from "react-router-dom";
import projects from "../../datas/projectsData"


function Card() {

    return (
        <section id="projects" className="projects-section">
            <h1>PROJECTS</h1>
            <div className="cardsContainer">
                {projects.map((project) => {
                    return (
                        <article key={project.id}>
                            <NavLink to={`/project/${project.id}`} className="cardLink">
                                <div className="cardLink">
                                    <div className="card">
                                        <img src={project.cover} alt={project.title} className="cardImg" />
                                        {/* <h2 className="cardTitle">{project.title}</h2> */}
                                    </div>
                                </div>
                            </NavLink>
                        </article>
                    )

                })}
            </div>
        </section>
    )
}

export default Card;