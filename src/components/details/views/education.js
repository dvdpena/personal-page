import {React, useContext} from 'react'
import { pageContext } from "../../../utils/nav_context";
import style from '../details.module.css'

const Education = ()=>{
    const {page} = useContext(pageContext)
    return (
        <>
            <h1 className={style.header}>{page}</h1>
            <p className={style.content}>B.S. Physics Engineering <a className={style.link} href='https://uady.mx/' target='_blank'>(UADY)</a></p>
        </>
    )
}

export default Education