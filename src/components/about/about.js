import about from '../../datas/aboutMe.json'
import NetworkLinks from '../networks/networks';
import { aboutMeRef } from '../../refs/refs';

function AboutMe() {

    const course = about[0].courses?.map((course, i) => {
        return (
            <article className='block element' key={i}>
                <div className='title'>{course.title}</div>
                <div className='date'>{course.date}</div>
                <div className='location'>{course.location}</div>
            </article>
        )
    })

    const languages = about[0].languages?.map((language, i) => {
        return (
            <li key={i} >{language}</li>
        )
    })

    return (
        <section ref={aboutMeRef} className='about-container'>
            <h1>QUI SUIS-JE ?</h1>
            <article className="about-content element">
                {about[0].intro?.map((paragraph, i) => {
                    return (
                        <p key={i} className="text">{paragraph}</p>
                    )
                })}

            </article>
            <article className='mentor element'>
                <h2>L'AVIS DE MON MENTOR</h2>
                <p>{about[0].mentor}</p>
            </article>
            <article className='course-content element'>
                <h2>DIPLÔMES / FORMATIONS</h2>
                {course}
            </article>
            <article className='languages element'>
                <h3>LANGUES</h3>
                <ul className='list langs'>
                    {languages}
                </ul>
            </article>
        </section>
    )
}

export default AboutMe;