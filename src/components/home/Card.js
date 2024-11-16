import React from "react";
import { NavLink } from "react-router-dom";
import appts from "../../datas/logements.json"


function Card() {

    return (
        <>
            {/* itération de la liste d'appartements */}
            {appts.map((appt) => {
                return (
                    <article key={appt.id}>
                        <NavLink to={`/fiche/${appt.id}`} className="cardLink">
                            <div className="card">
                                <img src={appt.cover} alt={appt.title} className="cardImg" />
                                <h2 className="cardTitle">{appt.title}</h2>
                            </div>
                        </NavLink>
                    </article>

                )

            })}

        </>
    )
}

export default Card;