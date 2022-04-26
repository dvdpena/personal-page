import {React, useContext} from 'react'
import { pageContext } from "../../../utils/nav_context";
import style from '../details.module.css';
import emailsvg from '../../../res/svgs/email.svg'
import linkedinsvg from '../../../res/svgs/linkedin.svg'
import telegramsvg from '../../../res/svgs/telegram.svg'
import githubsvg from '../../../res/svgs/github.svg'
import { EMAIL, CURRENT_EMAIL, TELEGRAM, CURRENT_TELEGRAM, LINKEDIN, CURRENT_LINKEDIN, GITHUB, CURRENT_GITHUB } from '../../../res/strings/en';

const Contact = () =>{
    const {page} = useContext(pageContext)
    return(
        <>
            <h1 className={style.header}>{page}</h1>
            <div className={style.cardholder}>
                <div className={style.card}>
                    <img className={style.social} alt={EMAIL} src={emailsvg} />
                    <div className={style.content}>
                        <p className={style.subtitle}>{EMAIL}</p>
                        <p className={style.content}>{CURRENT_EMAIL}</p>
                    </div>
                </div>
            
            
                <div className={style.card}>
                    <img className={style.social} alt={TELEGRAM} src={telegramsvg} />
                    <div className={style.content}>
                        <p className={style.subtitle}>{TELEGRAM}</p>
                        <p className={style.content}>{CURRENT_TELEGRAM}</p>
                    </div>
                </div>

            <div className={style.card}>
                <img className={style.social} alt={LINKEDIN} src={linkedinsvg} />
                <div className={style.content}>
                    <p className={style.subtitle}>{LINKEDIN}</p>
                    <p className={style.content}>{CURRENT_LINKEDIN}</p>
                </div>
            </div>

            <div className={style.card}>
                <img className={style.social} alt={GITHUB} src={githubsvg} />
                <div className={style.content}>
                    <p className={style.subtitle}>{GITHUB}</p>
                    <p className={style.content}>{CURRENT_GITHUB}</p>
                </div>
            </div>


            </div>
        </>
    )
}

export default Contact