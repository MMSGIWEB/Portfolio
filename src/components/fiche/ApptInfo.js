import Collapse from "../collapse/Collapse";
import Rating from "./Rating";
import Tags from "./Tags";
import Host from "./Host";
import appts from "../../datas/logements.json"
import { useParams } from "react-router-dom";

function ApptInfo() {
    //récup de l'id de la fiche concernée
    const { id } = useParams()
    //fait correspondre l'id à celui du logement
    const logement = appts.find((appt) => appt.id === id)

    //tags
    const apptTag = logement?.tags.map((tag, i) => {
        return (
            <Tags key={i} nom={tag} />
        )
    })

    //equipments
    const equipments = logement?.equipments.map((equipment, i) => {
        return (
            <li key={i}>{equipment}</li>
        );
    });

    return (
        <>
            <section className="infoContent">
                <div className="infoHeader">
                    <div className="titleContent">
                        <div className="titles">
                            <h1>{logement?.title}</h1>
                            <p>{logement?.location}</p>
                        </div>
                        <div className="tags">
                            {apptTag}
                        </div>
                    </div>
                    <div className="userContent">
                        <div className="userInfo">
                            <Host userName={logement?.host.name} userPic={logement?.host.picture} />
                        </div>
                        <div className="rating">
                            <Rating scaleRating={logement.rating} />
                        </div>
                    </div>
                </div>
                {/* ici appts.map */}
                <div className="details">
                    <Collapse title={'Description'} content={logement?.description} />
                    <Collapse title={'Équipements'} content={<ul>{equipments}</ul>} />
                </div>
            </section>
        </>
    )
}

export default ApptInfo
