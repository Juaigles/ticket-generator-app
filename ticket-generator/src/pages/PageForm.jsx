import React from 'react'
import Form from "../components/Form"

const PageForm = () => {
    return (
        <div className="flex flex-col gap-[45px] justify-center items-center my-2 pb-[20px]">
            <div className="text-center w-full flex flex-col gap-[20px]">
                <h1 className="text-[50px] font-extrabold leading-[1.1] tracking-[-1px]">Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
                <p className='text-[24px]  leading-[1.2] tracking-[-0.5px]'>Secure your spot at next year’s biggest coding conference.</p>
            </div>
            <div className='pb-[264px]'>

                <Form />
            </div>


            {/* <Button variant="primary" onClick={()=> alert("Boton primario")}/>
    <Button variant="secondary" onClick={()=> alert("Boton primario")}/>
    <Button variant="outline" onClick={()=> alert("Boton primario")}/> */}
        </div>
    )
}

export default PageForm