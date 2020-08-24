import React from 'react'
import classes from './Back_button.module.css'

export const Back_button = props => {

    return (

        <div className={classes.container} onClick={props.handle_click}>
            
           {"<"} Go Back
            
        </div>

    )

}

export default Back_button