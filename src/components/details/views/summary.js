import {React, useContext } from "react";
import { pageContext } from "../../../utils/nav_context";
import style from '../details.module.css'

const Summary = ()=>{
    const {page} = useContext(pageContext)
    return (
        <>
        <h1 className={style.header}>{page}</h1>
            <p className={style.content}>Highly experienced in JavaScript, especially on the back end, building server side applications using NodeJS. Knowledgeable about the front end workflow, particularly with React.
            </p>
            <p className={style.content}>Accustomed to follow CI/CD best practices, using an agile methodology to create secure and maintainable applications.
            </p>
            <p className={style.content}>Capable of leading software development teams and interacting with project Managers.
            </p>
            <p className={style.content}>I’m also highly adaptable. When it was required of me, I developed Android native apps using Kotlin and created  <a className={style.link} target="_blank" href="https://www.ros.org/">ROS</a> packages (Python & C++), to handle the information published by multiple sensors in a self-driving robot.
            </p>
            <p className={style.content}>Experienced working with confidential information, time sensitive data and large multidimensional datasets.
            </p>
        </>
    )
}

export default Summary