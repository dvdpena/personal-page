import {React, useContext} from "react"
import { pageContext } from "../../../utils/nav_context";
import style from '../details.module.css'

const Work = () =>{
    const {page} = useContext(pageContext)
    return (
        <>
            <h1 className={style.header}>{page}</h1>
            <p className={style.content}>
                <span className={style.subtitle}>Back end developer at <a className={style.link} href="https://octopy.com/" target="_blank">Octopy</a> (2018-2021)</span>
            </p>
            <ul className={style.content}>
                <li>
                Build and maintain the back end for Telegram Bots, managing multiple SQL and NoSQL databases. These bots handled confidential information for a large mobile carrier’s organization in Mexico. The projects were delivered according to the client’s security standards.
                </li>
                <li>
                Create an Android app to manually control a robot’s navigation, when self navigation Is turned off. I would also create prototype Android apps to help the sales department pitch new concepts.
                </li>
                <li>
                Create <a className={style.link} target="_blank" href="https://www.ros.org/">ROS</a> packages, both in Python and C++ to handle the information provided by multiple sensors in a self-driving robot. Some examples would be mapping new places, receiving new destinations, updating the current location and make everything easily accessible to the control dashboard.
                </li>
            </ul>
            <p className={style.content}>
                <span className={style.subtitle}>Planetarium Show Designer and Projectionist at <a className={style.link} href="http://www.merida.gob.mx/planetario/php/index.phpx" target="_blank">“Arcadio Poveda Ricalde” Planetarium</a> (2018)</span> 
            </p>
            <ul className={style.content}>
                <li>
                Design audiovisual shows for 180° domes, using JavaScript and Digistar’s proprietary <a className={style.link} href="http://paulbourke.net/dataformats/vla/" target="_blank">VLA</a> format. VLA is a sequential programming language.
                </li>
                <li>
                Instruct other personnel on the use of automatization scripts.
                </li>
            </ul>
            <p className={style.content}>
                <span className={style.subtitle}>Research assistant at the National Institute of Astronomy, Optics and Electronics <a className={style.link} href="https://www.inaoep.mx/" target="_blank">[INAOE]</a> (2017-2018)</span> 
            </p>
            <ul className={style.content}>
                <li>
                Using Python, I made an analysis of the variability in the near ultraviolet of stars in the Kepler telescope field.
                </li>
                <li>
                Manipulate datasets with more than 200,000+ stars, each with multiple individual observations, over a 2 month observation.
                </li>
            </ul>
        </>
    )
}

export default Work