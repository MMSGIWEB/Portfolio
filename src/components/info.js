import projects from "../datas/projectsData"
import { useParams } from "react-router-dom";
import Slideshow from "./fiche/Slideshow";

function ProjectInfo() {
    //récup de l'id de la fiche concernée
    const { id } = useParams()
    //fait correspondre l'id à celui du work
    const work = projects.find((project) => project.id === id)

    const tools = work?.tools?.map((tool, index) => {
        return (
            <img key={index} src={tool} alt={`Tool ${index + 1}`} className="tool-logo" width="50" />
        )
    })
    return (
        <>
            <main className="project-content">
                <div className="project-block">
                    <div className="content">
                        <h1>{work?.title}</h1>
                        <div className="info">
                            <p>{work?.content}</p>
                            <Slideshow />
                            <div className="tools" >
                                {tools}
                            </div>
                        </div>
                        <div className="links">
                            <div className="block">
                                <a href={work.github}>
                                    <button>Source</button>
                                </a>
                            </div>
                            <div className="block">
                                <a href={work.link}>
                                    <button>Site</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectInfo;
