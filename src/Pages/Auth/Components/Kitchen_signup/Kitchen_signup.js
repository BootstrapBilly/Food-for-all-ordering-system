import React from 'react'
import classes from './Kitchen_signup.module.css'

//components
import BackButton from "../../../../Shared Components/Back_button/Back_button"

export const Kitchen_signup = props => {

    return (

        <div className={classes.container}>

            <BackButton handle_click={props.handle_go_back} />
            kitchen
        </div>

    )

}

export default Kitchen_signup
