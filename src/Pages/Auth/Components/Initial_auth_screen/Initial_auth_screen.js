import React from 'react'

//css
import classes from './Initial_auth_screen.module.css'

//Components
import RoleSelect from "./Components/Role_select/Role_select"

export const Initial_auth_screen = (props) => {

    return (

        <div className={classes.container}>

            <span className={classes.title}>Welcome to the hub ordering system</span>

            <span className={classes.prompt}>Who are you ?</span>

            <RoleSelect handle_click={props.handle_click}/>

        </div>

    )

}

export default Initial_auth_screen