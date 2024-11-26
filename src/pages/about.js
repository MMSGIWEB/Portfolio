import about from './../datas/aboutMe.json'
import { useParams } from "react-router-dom";
import logo from './../assets/images/logo/logolast.png';
import twitter from '../assets/images/icons/x.svg'
import mail from '../assets/images/icons/at.svg'
import gitHub from '../assets/images/icons/github.svg'
import linkedIn from '../assets/images/icons/in.svg'
import location from '../assets/images/icons/location.svg'
import user from '../assets/images/icons/user.svg'

function About() {
    const { id } = useParams()
    const content = about.find((text) => text.id === id)

    const course = content?.courses.map((course, i) => {
        return (
            <section className='block'>
                <div className='title'>{course.title}</div>
                <div className='date'>{course.date}</div>
                <div className='location'>{course.location}</div>
            </section>
        )
    })

    const languages = content?.languages?.map((language, index) => {
        return (
            <ul key={index} className='list'>
                <li>{language}</li>
            </ul>
        )
    })

    const mydata = content?.myData?.map((data, index) => {
        return (
            <ul key={index} className='list'>
                <li>
                    <img src={user} alt="icône équivalent au type d'information" />
                    {data.name} </li>
                <li>
                    <img src={mail} alt="icône équivalent au type d'information" />
                    {data.email} </li>
                <li>
                    <img src={twitter} alt="icône équivalent au type d'information" />
                    {data.twitter} </li>
                <li>
                    <img src={linkedIn} alt="icône équivalent au type d'information" />
                    {data.linkedIn} </li>
                <li>
                    <img src={gitHub} alt="icône équivalent au type d'information" />
                    {data.gitHub} </li>
                <li>
                    <img src={location} alt="icône équivalent au type d'information" />
                    {data.location} </li>
            </ul>

        )
    })

    return (
        <main className="about-main">
            <img src={logo} alt='image de logo' />
            <section className='about-container'>
                <article className="about-content">
                    <p className="text">
                        {content?.content}
                    </p>
                </article>
                <article className='course-content'>
                    <h1>COURSE</h1>
                    {course}
                </article>
                <article className='languages'>
                    {languages}
                </article>
                <article className='mydata'>
                    {mydata}
                </article>
            </section>

        </main>
    )
}

export default About;