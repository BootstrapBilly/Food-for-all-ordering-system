import React from 'react'

//css
import classes from './Logo.module.css'

//assets
import LogoImg from "../../Assets/Image/logo.jpg"

export const Logo = props => {

    return (

        <div className={classes.container}>

            {/*eslint-disable-next-line */}
            <img src={LogoImg} alt="Logo" className={classes.logo} className={props.className} />

        </div>

    )

}

export default Logo
