import React from 'react'

import classes from './Role_select.module.css'

import { NeuButton } from "neumorphism-react";

//assets
import Hub from "../../../../../../Assets/Icons/hub.svg"
import Kitchen from "../../../../../../Assets/Icons/kitchen.svg"

export const Role_select = props => {

    return (

        <div className={classes.container}>

            {["Hub", "Kitchen"].map(role =>

                <NeuButton
                    width="150px"
                    height="100px"
                    onClick={props.handle_click.bind(this, role)}
                    color="#ffffff"
                    radius={10}
                    className={classes.role_container}
                >
                    {role}

                    <img src={role === "Hub" ? Hub : Kitchen} alt={role} className={classes.icon} />

                </NeuButton>

            )}

        </div>

    )

}

export default Role_select
