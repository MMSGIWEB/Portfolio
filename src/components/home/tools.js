import homeData from "../../datas/homeData";
import { skillsRef } from "../../refs/refs";


function Skills() {
    const tools = homeData[0]?.tools || [];

    return (
        <section ref={skillsRef} className="skillsBox" id="skills">
            <h1>SKILLS</h1>
            <div className="tools-container">
                {tools.map((tool, index) => (
                    <article key={index} className="tool element">
                        <img
                            src={tool}
                            alt={`Tool ${index + 1}`}
                            className="tool-icon"
                        />
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Skills;