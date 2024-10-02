import React from 'react'
import UserInput from '../userInput/userInput.jsx'
import SwitchAuswertung from '../Auswertung/switchAusertung.jsx'
import LogOut from '../controleLogin/LogOut.jsx'


const Rechner = () => {

 return (
    <>
        <LogOut/>
        <UserInput/>
        <SwitchAuswertung/>
    </>
 )
}

export default Rechner;