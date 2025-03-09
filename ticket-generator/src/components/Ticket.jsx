import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Ticket = ({ handleData }) => {
    const [number, setNumber] = useState("0")
    const location = useLocation()
    const data = location.state


    useEffect(() => {
        const number = []
        for (let i = 0; i < 5; i++) {
            number[i] = Math.floor(Math.random() * 10)
        }

        setNumber(number.join(""))
        handleData(data.name, data.email)

    }, [])
    return (
        <div className="relative w-[600px] h-[280px] overflow-hidden pl-6">

            {/* Imagen de fondo */}
            <img
                src="src/assets/ticket.svg"
                alt="ticket"
                className="absolute inset-0 z-0 w-full h-full backdrop-blur-[40px] "
            />
            <div className='flex flex-col gap-[74px] relative z-10'>

                <div className=' flex gap-[20px]'>
                    <div className='pt-[30px]'>


                        <img src="/logo.svg" alt="" className='w-[40px] h-[40px] flex flex-col  ' />
                    </div>
                    <div className="  min-h-min pt-4">
                        <h2 className='text-[40px] font-bold '>Coding Conf</h2>
                        <p>Jan 31, 2025 / Offline</p>
                    </div>
                </div>

                <div className='flex gap-4'>
                    <div className='flex rounded-xl w-[80px] h-[80px]  items-center justify-center '>

                        <img src={data.imageUrl ? data.imageUrl : "src/assets/perfil.svg"} alt="" className='object-cover h-full rounded-xl' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className=' max-w-90 min-w-90 max-h-10 text-wrap overflow-hidden text-[30px] '>{data.name}</h3>
                        <div className='flex gap-[10px]'>
                            <img src="src/assets/github.svg" alt="" />
                            <p className='text-[20px]c'>{data.github}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='absolute inset-0 z-10 flex items-center'>
                <p className='text-[30px] text-[#8784A5] transform rotate-90 p-[501px]'>#{number}</p>
            </div>

            {/* Elementos generados con map superpuestos a la imagen */}
            <div className="absolute inset-0 flex flex-col gap-3 z-10 items-center justify-center pl-[370px] ">
                {Array.from({ length: 7 }).map((_, index) => (
                    <div
                        key={index}
                        className="w-[3px] h-[16px] rounded-full bg-[rgba(255,255,255,0.8)]"
                    ></div>
                ))}
            </div>


        </div>
    )
}

export default Ticket
