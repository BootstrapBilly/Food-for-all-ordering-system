import React from 'react'

import classes from './Input.module.css'

//external
import { NeuTextInput } from "neumorphism-react";

export const Input = props => {

    return (

        <div className={classes.container}>

            <span className={classes.input_label}>{props.label}</span>

            <NeuTextInput
                placeholder={props.placeholder}
                color="#ffffff"
                onChange={props.onChange}
                width="300px"
                height="40px"
                type={props.type}
                className={classes.input}
                fontSize={15}
            />

        </div>

    )

}

export default Input
