import React from 'react'
import Logo from '../Logo.png'

function Navbar() {
    return (
        <div className="px-12 md:px-20">
            <div className="absolute md:static w-full right-0 top-0">
                <nav className="hidden md:flex justify-between items-center">
                    <div className="w-12 h-12 rounded-full bg-black">
                        <img src={Logo} className="rounded-full object-cover" alt="" />
                    </div>
                    {/* <a href="/" className="h-12 w-12">
                    <div className="rounded-full bg-red-500"></div>
                </a> */}
                    <div className="space-x-16 font-semibold text-lg">
                        <a className="cursor-pointer hover:text-indigo-600 transition-all duration-300 ease-in-out" href="#home">
                            Home
                        </a>
                        <a className="cursor-pointer hover:text-indigo-600 transition-all duration-300 ease-in-out" href="#background_story">
                            Background Story
                        </a>
                        <a className="cursor-pointer hover:text-indigo-600 transition-all duration-300 ease-in-out" href="#roadmap">
                            Roadmap
                        </a>
                    </div>
                    <a
                        href="https://opensea.io/collection/boredapeskullnotclub"
                        target="_blank"
                        className="bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 ease-in-out px-8 py-4 font-bold text-lg rounded-xl"
                        rel="noreferrer"
                    >
                        Buy on Opensea
                    </a>
                </nav>
                <div className="flex md:hidden justify-between items-center w-full bg-black p-4">
                    <div className="flex items-center space-x-4">
                        <img className="w-8 h-8 rounded-full" alt="" />
                        <p className="text-sm font-bold uppercase">BASCN</p>
                    </div>
                    {/* <HamburgerMenu /> */}
                </div>
            </div>
        </div>
    )
}

export default Navbar
