import "./about.css"
import Dashi from "../../img/Dashi.JPG"

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img 
                    src={Dashi} 
                    alt="" 
                    className="a-img" 
                />
            </div>
        </div>
        <div className="a-right"></div>
    </div>
  )
}

export default About