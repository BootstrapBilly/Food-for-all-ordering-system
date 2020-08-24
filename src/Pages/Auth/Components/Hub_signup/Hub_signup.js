import React, { useState } from 'react'

import classes from './Hub_signup.module.css'

//components
import BackButton from "../../../../Shared Components/Back_button/Back_button"
import Input from "../../../../Shared Components/Input/Input"

//external
import { NeuButton } from "neumorphism-react";

//assets
import tick from "../../../../Assets/Icons/tick.svg"
import cross from "../../../../Assets/Icons/cross.svg"

export const Hub_signup = props => {

    const [form_step, set_form_step] = useState("Inputs")

    return (

        <div className={classes.container}>

            <div className={classes.wrapper}>

                <BackButton handle_click={props.handle_go_back} />

                {form_step === "Inputs" ?

                    <React.Fragment>

                        <Input placeholder="Example@test.com" label="Email" />
                        <Input placeholder="P4ssw0rd" label="Password" type="password" />
                        <Input placeholder="P4ssw0rd" label="Repeat password" type="password" />
                        <Input placeholder="Johndoe12" label="Username" />
                        <Input placeholder="London" label="Location" />


                        <NeuButton

                            width="150px"
                            height="40px"
                            onClick={() => set_form_step("Buttons")}
                            color="#f7bf36"
                            radius={2}
                            style={{ marginTop: "40px", color: "grey" }}

                        >Next</NeuButton>


                    </React.Fragment>

                    :
                    <React.Fragment>

                        <span className={classes.question}>Can you collect ?</span>

                        <span className={classes.question_caption}>Collection means you are likely to be served faster</span>

                        <div className={classes.collection_button_container}>

                            {
                                ["Yes", "No"].map(answer =>

                                    <NeuButton
                                        width="130px"
                                        height="90px"
                                        onClick={() => console.log("s")}
                                        color="#ffffff"
                                        radius={10}
                                        className={classes.collection_button}
                                    >
                                        {answer}

                                        <img src={answer === "Yes" ? tick : cross} alt={answer} className={classes.icon} />

                                    </NeuButton>)

                            }

                        </div>


                        <NeuButton

                            width="150px"
                            height="40px"
                            onClick={() => set_form_step("Buttons")}
                            color="#f7bf36"
                            radius={2}
                            style={{ marginTop: "40px", color: "grey" }}

                        >Next</NeuButton>

                    </React.Fragment>


                }

            </div>

        </div>

    )

}

export default Hub_signup
