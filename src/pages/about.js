import about from './../datas/aboutMe.json'
import { useParams } from "react-router-dom";
import logo from './../assets/images/logo/logolast.png';

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
            </section>

        </main>
    )
}

export default About;