import about from '../../datas/aboutMe.json'
import { useParams } from "react-router-dom";
import NetworkLinks from '../networks/networks';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
;
function AboutMe() {
    const { id } = useParams()
    const content = about.find((text) => text.id === id)

    const course = content?.courses.map((course, i) => {
        return (
            <section className='block' key={i}>
                <div className='title'>{course.title}</div>
                <div className='date'>{course.date}</div>
                <div className='location'>{course.location}</div>
            </section>
        )
    })

    const languages = content?.languages?.map((language) => {
        return (
            <li>{language}</li>
        )
    })

    return (
        <main className="about-main">
            <section className='about-container'>
                <article className="about-content">
                    <p className="text">
                        {content?.content}
                    </p>
                </article>
                <article className='course-content'>
                    <h1>DIPLÔMES / FORMATIONS</h1>
                    {course}
                </article>
                <article className='languages'>
                    <h2>LANGUES</h2>
                    <ul className='list langs'>
                        {languages}
                    </ul>
                </article>
                <article className='mydata'>
                    <NetworkLinks />
                </article>
            </section>
        </main>
    )
}

export default AboutMe;