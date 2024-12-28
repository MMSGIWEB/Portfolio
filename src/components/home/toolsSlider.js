import homeData from "../../datas/homeData";
import { skillsRef } from "../../refs/refs";


function SkillsSlider() {
    const tools = homeData[0]?.tools || [];

    return (
        <section ref={skillsRef} className="skillsBox" id="skills">
            <h1>SKILLS</h1>
            <div className="tools-container">
                {tools.map((tool, index) => (
                    <div key={index} className="tool">
                        <img
                            src={tool}
                            alt={`Tool ${index + 1}`}
                            className="tool-icon"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SkillsSlider;