import homeInfos from '../../datas/home.json'
import img from '../../assets/images/svg-tools/css.svg'
import img2 from '../../assets/images/svg-tools/css.webp'

function SkillsSlider() {

    return (
        <section id="skills" className="skills-container">
            <h1 className="section-title">SKILLS</h1>

            <div className="tools">
                <h2>TOOLS</h2>
                <div className="slider">
                    {homeInfos.tools?.map((tool, index) => {
                        return (
                            <div key={index} className='tool'>
                                <img src={`../../assets/images/svg-tools/${tool}`} alt='dev tool image' />
                                {/* <img src={img} alt='dev tool image' /> */}
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