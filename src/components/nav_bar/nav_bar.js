import React from "react";
import work from '../../brief.svg'
import home from '../../home.svg'
import contact from '../../contact.svg'
import software from '../../software.svg'
import cap from '../../cap.svg'
import profile from '../../profile.jpg'
import style from './nav_bar.module.css'

const NavBar = () =>{
    return (
        <>
            <div className={style.navBar}>
                <img className={style.img}src={profile} alt="Profile picture" onClick={()=>{console.log("clicked")}}/>
                <img className={style.btn} src={home} onClick={()=>{console.log("clicked")}}/>
                <img className={style.btn} src={work} onClick={()=>{console.log("clicked")}}/>
                <img className={style.btn} src={software}/>
                <img className={style.btn} src={cap}/>
                <img className={style.btn} src={contact}/>
            </div>
        </>
    );
}


export default NavBar