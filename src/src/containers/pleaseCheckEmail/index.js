import {Button} from 'react-bootstrap'
import React from 'react'



const VerifyEmail = () =>{
    return(
        <div className = "check-email">
         <div className= "check-email-container">
            <h1 >We have received your request! <br></br>Click login to continue</h1>
            <Button className="login" >Login</Button>
        </div>
       </div>
    )
}

export default VerifyEmail;