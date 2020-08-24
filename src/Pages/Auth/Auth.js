import React, { useState } from 'react'

//components
import Initial from "./Components/Initial_auth_screen/Initial_auth_screen"
import Hub from "./Components/Hub_signup/Hub_signup"
import Kitchen from "./Components/Kitchen_signup/Kitchen_signup"

export const Auth = () => {

    const [current_page, set_current_page] = useState("Initial")

    return (

        <div>

            {current_page === "Initial" ?

                <Initial handle_click={(role) => set_current_page(role)} />

                : current_page === "Hub" ?

                    <Hub handle_go_back={() => set_current_page("Initial")} />

                    : current_page === "Kitchen" && <Kitchen handle_go_back={() => set_current_page("Initial")} />

            }

        </div>

    )

}

export default Auth