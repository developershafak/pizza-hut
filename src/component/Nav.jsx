import React, { useState } from 'react'

const Nav = () => {

    const [show, setShow] = useState(false);

    const toggleNavbar = () => {
        setShow(!show);
    };
    return (
        <>
            <div class="section font-semibold px-16 text-gray-800 fixed w-full top-0 flex header_section bg-gray-400 shadow z-10">
                <div class="sub_head flex my-auto py-3">
                    <div class="logo w-14"><img class="w-full" src="https://w7.pngwing.com/pngs/903/640/png-transparent-pizza-logo-euclidean-color-logo-material-pizza-other-color-splash-free-logo-design-template.png" alt="" /></div>
                    <div class="text ml-2 my-auto flex-none">Pizza Parlour</div>
                </div>
                <div class="sub_head ml-auto flex space-x-8 my-auto">
                    <button
                        className="text-white mr-4"
                        onClick={toggleNavbar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    
                    <div className={`absolute top-0 right-0 bg-black mt-16 w-40 ${show ? 'block' : 'hidden'}`}>
                        <ul className="py-2">
                            <li className="px-4 py-2 text-white">Home</li>
                            <li className="px-4 py-2 text-white">About</li>
                            <li className="px-4 py-2 text-white">Services</li>
                            <li className="px-4 py-2 text-white">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="filling pt-14"></div>
        </>
    )
}

export default Nav
