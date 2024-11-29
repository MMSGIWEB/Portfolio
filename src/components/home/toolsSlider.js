import { useState } from "react";
import homeData from "../../datas/homeData";


function SkillsSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const tools = homeData[0]?.tools || [];

    // Incrémenter l'index pour avancer d'un élément
    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % tools.length);
    };

    // Décrémenter l'index pour revenir en arrière d'un élément
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + tools.length) % tools.length);
    };

    return (
        <section className="skills">
            <h1>SKILLS</h1>
            <div className="skills-slider">
                <button onClick={prevSlide} className="control prev">❮</button>
                <div className="slides-container">
                    <div
                        className="slides"
                        style={{
                            transform: `translateX(-${(currentIndex / tools.length) * 100}%)`,
                        }}>
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
                </div>
                <button onClick={nextSlide} className="control next">❯</button>
            </div>
        </section>

    );
}

export default SkillsSlider;