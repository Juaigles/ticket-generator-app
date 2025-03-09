import React, { useEffect, useState } from 'react'

const Input = ({ label, placeholder, type, name, id, onChange, info, error }) => {
    const [isFilled, setIsFilled] = useState(false);


    useEffect(()=>{
console.log(error);

    },[error])
    const handleInputChange = (e) => {
        setIsFilled(e.target.value !== '');
    };
    return (


        <div className='flex flex-col gap-3'>
            <label htmlFor={id} className='text-[20px] pointer-events-none'>
                {label}
            </label>

            <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChange} className={`
            backdrop-blur-[5px] 
            h-[54px]
            p-4
            rounded-xl 

            bg-[rgba(255,255,255,0.08)] 

            hover:bg-[rgba(255,255,255,0.20)] 
            hover:placeholder:text-[#D1D0D5] 
            
            focus:outline-none  
            focus:shadow-[0_0_0_3px_#0D082D,0_0_0_5px_#8784A5] 

             ${isFilled ? 'bg-[#8784A5] text-white' : null}

            ${error ? 'border border-[#F57463]' : ' border border-[#8784A5]'} `} />

            <div className='flex gap-2  items-center'>
                <img src={error  ? "src/assets/infoRed.svg" : "src/assets/info.svg"} alt="" className='h-4 w-4' />
                <p className={`text-[12px] ${error ? "text-[#F57463]" : null}`}>{info}</p>
            </div>
        </div>
    )
}

export default Input