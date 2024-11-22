import projects from "../../datas/projects.json"
import { useParams } from "react-router-dom";
import Slideshow from "./Slideshow";

function ProjectInfo() {
    //récup de l'id de la fiche concernée
    const { id } = useParams()
    //fait correspondre l'id à celui du work
    const work = projects.find((project) => project.id === id)

    return (
        <>
            <div className="modal-content">
                <div className="modal-block">
                    <div className="content">
                        <h1>{work?.title}</h1>
                        <div className="info">
                            <p>{work?.content}</p>
                            <Slideshow />
                            {projects.map((project) => {
                                return (
                                    <div className="tools" >
                                        <div className="tools-logos">
                                            {work?.tools?.map((tool, index) => {
                                                <img key={index} src={tool} alt={`Tool ${index + 1}`} className="tool-logo" width="50" />
                                            })
                                            }
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectInfo;
