import React, { useState } from 'react'
import Ticket from '../components/Ticket'

const TicketPage = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleData = (nameFromTicket, emailFromTicket) => {
        setName(nameFromTicket)
        setEmail(emailFromTicket)

    }
    return (
        <div className="
        flex 
        flex-col 
        justify-center items-center 
        gap-[111px] 
         ">
            <div className='
            flex 
            flex-col 
            gap-[32px]  
            justify-center items-center '>
                <h2 className='
                text-[60px] text-center 
                leading-[1.1] tracking-[-1px]'>
                    Congrats, <span className='
                    bg-gradient-to-r from-[#F57463] to-[#FFFFFF] 
                    bg-clip-text 
                    text-transparent'>{name}!</span>  <br />Your ticket is ready.
                </h2>
                <p className='
                text-center 
                leading-[1.2] tracking-[-0.5px] 
                text-[24px] ]'>
                    We've emailed your ticket to <br /> <span className="text-[#F57463]">{email}</span> and will send updates in <br /> the run up to the event.
                </p>
            </div>
            <div className='pb-[264px]'>
                <Ticket handleData={handleData} />
            </div>
        </div>
    )
}

export default TicketPage