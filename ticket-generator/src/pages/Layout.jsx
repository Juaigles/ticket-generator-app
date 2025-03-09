import React from 'react'
import Logo from '../components/Logo'


const Layout = ({ children }) => {
    return (
        <div>
            <header className='flex justify-center items-center my-2 pb-[20px]'>
                <div className='mt-[40px]'>
                    <Logo />
                </div>

            </header>
            <main>{children}</main>
        </div>
    )
}

export default Layout