import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { PropsWithChildren } from 'react';
import Auth from './Auth'; 

interface NavbarLinkProps{    
    href:string
}

function NavbarLink( { href, children } : PropsWithChildren<NavbarLinkProps>) {
    return(
        <Link href={href}>
            <div>
            {children}
            </div>
        </Link>
    )
}

function Navbar() {
    {/**set functionality for nav */ }
    const [nav, setNav] = useState(false)
    const [color, setColor] = useState('transparent')
    const [textColor, setTextColor] = useState('white')
    const router = useRouter()


    const handlenav = () => {
        setNav(!nav)
    };
    useEffect(() => {
        const changeColor = () => {
            if (window.scrollY >= 90) {
                setColor('transparent')
                setTextColor('#00005C')
            }
            else {
                setColor('transparent')
                setTextColor('white')
            }
        }
        window.addEventListener('scroll', changeColor)
    }, [])

    return (
        <div>

            <div style={{ backgroundColor: `${color}` }} className="fixed left-0 right-0 w-[100%] z-10 mb-5 ">

                <div className="max-w-[1240px] m-auto flex justify-between mt-2 items-center px-4 py-1">

                    <Link href="/">
                        <img src='images/logo.png' alt='logo' className='font-bold text-4xl w-[75%] h-[30px]'></img>
                    </Link>
                    <ul className=' hidden sm:flex text-lg text-slate-400'>
                    <li className='group transition-all duration-300 ease-in-out p-4 active:border-inset hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                            <NavbarLink href='/admin'>Home</NavbarLink>
                        </li>
                        <li className='group transition-all duration-300 ease-in-out p-4 active:border-inset hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                            <NavbarLink href='/mint'>Mint</NavbarLink>
                        </li>
                        <li className='group transition-all duration-300 ease-in-out p-4 active:border-inset hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                            <NavbarLink  href='/liquidity'>Liquidity</NavbarLink>
                        </li>
                        <li className='group transition-all duration-300 ease-in-out p-4 active:border-inset  hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                            <NavbarLink  href='/swap'>Swap</NavbarLink>
                        </li>
                        {/**Button contact me */}
                        <li className='group transition-all duration-300 ease-in-out p-4 active:border-inset  hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                            <Auth />
                        </li>

                        {/**<Link href="contact" className='text-gray-300 px-2 py-3 text-lg border-2 font-sm border-gold rounded-2xl hover:text-navyBlue hover:bg-gold '>Download CV</Link>*/}
                    </ul>
                    {/**mobile button and ui dropdown */}
                    <div onClick={handlenav} className="sm:block sm:hidden z-10">
                        {nav ? <AiOutlineClose size={22} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={22} style={{ color: `${textColor}` }} />}
                    </div>
                    {/**Mobile Menu */}
                    <div className={nav ?
                        'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center w-full h-[115vh] z-50  bg-slate-400  text-left ease-in duration-300'
                        :
                        'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex flex-col justify-center bg-slate-400  items-center w-full h-[115vh] z-50 p-6 ease-in  duration-300'}>
                        <h1 className='py-5 mt-2 text-2xl text-bold text-start px-5'></h1>
                        <div className="my-4  pb-4">
                            <div className="flex flex-col mb-2 justify-start text-center items-center gap-4 pl-7">
                                <ul>
                                <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-3xl font-thin opa hover:text-gold cursor-pointer hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900  '>
                                        <NavbarLink href="home">Home</NavbarLink>
                                    </li>
                                    <li className='group transition-all duration-300 ease-in-out p-4 active:border-inset hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                                        <NavbarLink href='/admin'>Admin</NavbarLink>
                                    </li>
                                    <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-3xl font-thin opa hover:text-gold cursor-pointer hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900  '>
                                        <NavbarLink href="home">Mint</NavbarLink>
                                    </li>
                                    <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-3xl font-thin  hover:text-gold hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                                        <NavbarLink  href="#updateOrder">Liquidity</NavbarLink>
                                    </li>
                                    <li onClick={handlenav} className='group transition-all duration-300 ease-in-out p-3 text-3xl font-thin  hover:text-gold hover:bg-gradient-to-tr from-purple-400 to-green-300 hover:rounded-full hover:text-blue-900'>
                                        <Auth />
                                    </li>
                                </ul>
                                {/*</div>*/}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

