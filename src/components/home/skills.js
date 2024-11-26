import homeData from '../../datas/homeData'
import img from '../../assets/images/svg-tools/css.svg'
// import img2 from '../../assets/images/svg-tools/css.webp'

function SkillsSlider() {
    const tools = homeData[0].tools;

    return (
        <section id="skills" className="skills-container">
            <h1 className="section-title">SKILLS</h1>

            <div className="tools">
                <h2>TOOLS</h2>
                {/* <img src={img} alt='dev tool image' /> */}
                <div className="slider">
                    {tools?.map((tool, index) => {
                        return (
                            <div key={index} className='tool'>
                                {/* <img src={`../../${tool}`} alt='outil de dévéloppement' /> */}
                                <img src={tool} alt='outil de dévéloppement' height="100%" width="100%" />
                                {/* <img src={img2} alt='dev tool image' /> */}
                            </div>
                        )
                    })}

                    {/* <div className="left"></div>
                    <div className="right"></div> */}
                </div>
            </div>
        </section>
    )
}

export default SkillsSlider;