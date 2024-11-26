import projects from "../datas/projectsData"
import { useParams } from "react-router-dom";
import Slideshow from "../components/fiche/Slideshow";

function ProjectInfo() {
    //récup de l'id de la fiche concernée
    const { id } = useParams()
    //fait correspondre l'id à celui du work
    const work = projects.find((project) => project.id === id)

    const tools = work?.tools?.map((tool, index) => {
        <img key={index} src={`../assets/images/svg-tools/${tool}`} alt={`Tool ${index + 1}`} className="tool-logo" width="50" />
    })
    return (
        <>
            <div className="project-content">
                <div className="project-block">
                    <div className="content">
                        <h1>{work?.title}</h1>
                        <div className="info">
                            <p>{work?.content}</p>
                            <Slideshow />
                            <div className="tools" >
                                <div className="tools-logos">
                                    {tools}
                                </div>
                            </div>
                        </div>
                        <div className="links">
                            <div className="block">
                                <a href={work.github}>Souce</a>
                            </div>
                            <div className="block">
                                <a href={work.link}>Site</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo;
