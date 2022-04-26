import React, { useContext, useEffect } from "react";
import { pageContext } from "../../utils/nav_context";
import style from './details.module.css'
import Summary from "./views/summary";
import {WORK, SOFT, EDU, CONTACT, HOME} from '../../res/strings/en'
import Work from "./views/work";
import Skills from "./views/skills";
import Education from "./views/education";
import Contact from "./views/contact";

const Details = ()=>{
    const {page} = useContext(pageContext)
    return (
        <div className={style.details}>
            {(page === HOME)? <Summary/> : null}
            {(page === WORK)? <Work/> : null}
            {(page === SOFT)? <Skills/> : null}
            {(page === EDU)? <Education/> : null}
            {(page === CONTACT)? <Contact/> : null}
        </div>
    )
}



export default Details