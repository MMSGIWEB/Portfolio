import about from '../../datas/aboutMe.json'
import NetworkLinks from '../networks/networks';
import { aboutMeRef } from '../../refs/refs';

function AboutMe() {

    const course = about[0].courses?.map((course, i) => {
        return (
            <article className='block' key={i}>
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
            <article className="about-content">
                {about[0].intro?.map((paragraph, i) => {
                    return (
                        <p key={i} className="text">{paragraph}</p>
                    )
                })}

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
    )
}

export default AboutMe;