import { useState } from "react";
import homeData from "../../datas/homeData";
import { skillsRef } from "../refs/refs";


function SkillsSlider() {
    const tools = homeData[0]?.tools || [];

    return (
        <section ref={skillsRef} className="skills-slider" id="skills">
            <div className="slides-container">
                {tools.map((tool, index) => (
                    <div key={index} className="slide">
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