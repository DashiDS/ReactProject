import "./intro.css"
import PF from "../../img/Foto2022_Transparant.png"

const Intro = () => {
  return (
    <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className="i-intro">Hello, my name is</h2>
                <h1 className="i-name">Dani Schadenberg!</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Game Developer</div>
                        <div className="i-title-item">3D artists</div>
                        <div className="i-title-item">Bedrijfskunde IT & management</div>
                    </div>
                </div>
                <p className="i-desc">
                    I love creating, inovating and socializing.
                    I want to get better in creating stylish, modern website, 
                    web servers and online stores.
                </p>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={PF} alt="" className="i-img" />
        </div>
    </div>
  )
}

export default Intro