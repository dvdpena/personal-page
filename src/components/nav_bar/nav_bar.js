import React, { useContext } from "react";
import work from '../../res/svgs/brief.svg'
import home from '../../res/svgs/home.svg'
import contact from '../../res/svgs/contact.svg'
import software from '../../res/svgs/software.svg'
import cap from '../../res/svgs/cap.svg'
import profile from '../../res/svgs/profile.jpg'
import style from './nav_bar.module.css'
import { pageContext } from "../../utils/nav_context";
import {WORK, SOFT, EDU, CONTACT, HOME, PROFILE, NAME} from '../../res/strings/en'

const NavBar = () =>{
    const {setPage} = useContext(pageContext);
    return (
        <>
            <div className={style.navBar}>
                <div className={style.profile} onClick={()=>{setPage(HOME)}}>
                    <img className={style.img} alt={PROFILE} src={profile} />
                    <p className={style.title}>{NAME}</p>
                </div>
                <div className={style.item} onClick={()=>{setPage(WORK)}}>
                    <img className={style.btn} alt={WORK} src={work} />
                    <p className={style.title}>{WORK.toUpperCase()}</p>
                </div>
                <div className={style.item} onClick={()=>{setPage(SOFT)}}>
                    <img className={style.btn} alt={SOFT} src={software} />
                    <p className={style.title}>{SOFT.toUpperCase()}</p>
                </div>
                <div className={style.item} onClick={()=>{setPage(EDU)}}>
                    <img className={style.btn} alt={EDU} src={cap} />
                    <p className={style.title}>{EDU.toUpperCase()}</p>
                </div>
                <div className={style.item} onClick={()=>{setPage(CONTACT)}}>
                    <img className={style.btn} alt={CONTACT} src={contact} />
                    <p className={style.title}>{CONTACT.toUpperCase()}</p>
                </div>
            </div>
        </>
    );
}


export default NavBar