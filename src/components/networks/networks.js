import aboutMe from "../../datas/aboutMe.json";
import twitter from '../../assets/images/icons/x.svg'
import mail from '../../assets/images/icons/at.svg'
import gitHub from '../../assets/images/icons/github.svg'
import linkedIn from '../../assets/images/icons/in.svg'
import location from '../../assets/images/icons/location.svg'
import user from '../../assets/images/icons/user.svg'
import { NavLink, useParams } from "react-router-dom";

function NetworkLinks() {
    const { id } = useParams()
    const content = aboutMe.find((text) => text.id === id)

    return (
        <>
            {content?.myData?.map((data, index) => {
                return (
                    <ul key={index} className='networkList'>
                        <li>
                            <img src={user} alt="icône équivalent au type d'information" />
                            {data.name} </li>
                        <li>
                            <NavLink to="/contact">
                                <img src={mail} alt="icône équivalent au type d'information" />
                                {data.email}
                            </NavLink>
                        </li>
                        <li>
                            <a href={data.twitter}>
                                <img src={twitter} alt="icône équivalent au type d'information" />
                            </a>
                        </li>
                        <li>
                            <a href={data.linkedIn}>
                                <img src={linkedIn} alt="icône équivalent au type d'information" />
                            </a>
                        </li>
                        <li>
                            <a href={data.gitHub}>
                                <img src={gitHub} alt="icône équivalent au type d'information" />
                            </a>
                        </li>
                        <li>
                            <img src={location} alt="icône équivalent au type d'information" />
                            {data.location} </li>
                    </ul>

                )
            })}
        </>

    )
}

export default NetworkLinks;