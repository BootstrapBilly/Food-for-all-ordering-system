import React from 'react'

import classes from './Top_bar.module.css'

//assets
import Logo from "../../Assets/Icons/logo.svg"

//util
import colours from '../../Util/colours'

export const Top_bar = () => {

    return (

        <div className={classes.container}>
            
            <img alt="Logo of food for all" className={classes.logo} src={Logo} />

            <span className={classes.text} style={{color:colours.primary}}>FOOD FOR ALL</span>

        </div>

    )

}

export default Top_bar