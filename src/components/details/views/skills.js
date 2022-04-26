import {React, useContext} from 'react'
import { pageContext } from "../../../utils/nav_context";
import style from '../details.module.css'

const Skills = () =>{
    const {page} = useContext(pageContext)
    
    return (
        <>
            <h1 className={style.header}>{page}</h1>
            <p className={style.content}>NodeJS (JavaScript)</p>
            <div className={style.nodejs}></div>
            <p className={style.content}>React</p>
            <div className={style.react}></div>
            <p className={style.content}>Express</p>
            <div className={style.express}></div>
            <p className={style.content}>Git</p>
            <div className={style.git}></div>
            <p className={style.content}>Kotlin</p>
            <div className={style.kotlin}></div>
            <p className={style.content}>SQL</p>
            <div className={style.sql}></div>
            <p className={style.content}>NoSQL</p>
            <div className={style.nosql}></div>
            <p className={style.content}>Python</p>
            <div className={style.python}></div>
            <p className={style.content}>Debian based systems</p>
            <div className={style.debian}></div>
            <p className={style.content}>SCRUM methodology</p>
            <div className={style.scrum}></div>
            <p className={style.content}>Arduino</p>
            <div className={style.arduino}></div>
            <p className={style.content}>Firebase</p>
            <div className={style.firebase}></div>
            

        </>
    )
}

export default Skills