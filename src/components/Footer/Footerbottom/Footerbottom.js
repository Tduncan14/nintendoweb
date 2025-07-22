import React from 'react'
import './Footerbottom.css'

const Footerbottom = () => {
    return (
        <div className="footerbottom">
            <div className="leftFoot">

                <p><span></span>Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA</p>
            </div>


            <div className="rightFoot">
                <ul>
                    <li>Contact</li>
                    <li> Website feedback</li>
                    <li> Term Of Use</li>
                    <li>Documents & Policies</li>
                </ul>

                <div className="flag">
                    <img src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" alt="US Flag" />


                    <h3>Change region</h3>
                </div>
            </div>
        </div>
    )
}

export default Footerbottom
