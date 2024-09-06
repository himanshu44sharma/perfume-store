import React, { useState, useEffect } from 'react';
import { IoSearchSharp } from "react-icons/io5";
<<<<<<< HEAD
import { FaCaretDown, FaShoppingCart } from "react-icons/fa";
=======
import { FaShoppingCart } from "react-icons/fa";
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
import DarkMode from './DarkMode';

const MenuLinks = [
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Shop",
        link: "/#Shop",
    },
    {
        id: 3,
        name: "About",
        link: "/#about",
    },
    {
        id: 4,
        name: "Contact Us",
        link: "/#contactus",
    },
<<<<<<< HEAD
];

const DropdownLinks = [
    {
        id: 1,
        name: "Trending Products",
        link: "/#trending",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#best-selling",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#top-rated",
    },
];

const Navbar = ({handleOrderPopup}) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Initialize state based on localStorage value
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'dark';
    });

    useEffect(() => {
        // Apply the theme to the document
=======
]
const Navbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
<<<<<<< HEAD
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    return (
        <div className='bg-bgcolor dark:bg-bgdark dark:text-white duration-200 z-40'>
=======
    }, [darkMode]);

    return (
        <div className='bg-bgcolor dark:bg-bgdark dark:text-white duration-200 relative z-40'>
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
            <div className='py-5'>
                <div className="container flex justify-between items-center">
                    {/* Logo and links section */}
                    <div className='flex items-center gap-4'>
                        <a
                            href="#"
<<<<<<< HEAD
                            className="text-primary ml-2 hover:text-brandBlue dark:text-bgcolor dark:hover:text-brandlightcyan font-semibold tracking-widest text-2xl uppercase sm:text-3xl duration-200"
                        >
                            HK Fragrance
=======
                            className="text-primary ml-2 hover:text-brandBlue dark:text-bgcolor dark:hover:text-brandlightcyan font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
                        >
                            Perfume
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
                        </a>
                        {/* Menu Items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link}
<<<<<<< HEAD
                                            className='inline-block px-4 font-semibold text-primary hover:text-brandBlue dark:text-bgcolor dark:hover:text-brandlightcyan duration-200'>
=======
                                            className='inline-block px-4 font-semibold text-primary
                                             hover:text-brandBlue dark:text-bgcolor
                                              dark:hover:text-brandlightcyan duration-200'>
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
<<<<<<< HEAD
                                {/* Dropdown */}
                                <li className='relative cursor-pointer group'>
                                    <a
                                        href='#'
                                        className='flex items-center gap-[2px] font-semibold hover:text-brandBlue text-primary dark:text-brandWhite dark:hover:text-brandlightcyan duration-200 py-2'>
                                        Quick Links
                                        <span>
                                            <FaCaretDown className='group-hover:rotate-180 hover:text-brandBlue text-primary dark:text-brandWhite' />
                                        </span>
                                    </a>

                                    {/* Dropdown Links */}
                                    <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-bgcolor rounded-md text-primary bg-shadow-md dark:bg-glassblue p-2'>

                                        <ul className='space-y-2'>
                                            {
                                                DropdownLinks.map((data) => (
                                                    <li key={data.id}>
                                                        <a
                                                            className='text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan duration-200 p-2 font-semibold'
                                                            href={data.link}>{data.name}</a>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Navbar Right Section */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar Section */}
=======
                            </ul>
                        </div>
                    </div>
                    {/* Navbar Right Section  */}
                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar Section  */}
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="Search"
                                className="search-bar text-primary"
                            />
                            <IoSearchSharp
                                className="text-2xl text-primary group-hover:text-primary dark:text-brandWhite absolute top-1/2 -translate-y-1/2 right-3 duration-200"
                            />
                        </div>

<<<<<<< HEAD
                        {/* Order-button section */}
                        <button className='relative p-3' onClick={handleOrderPopup}>
=======

                        {/* Order-button section  */}
                        <button className='relative p-3'>
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
                            <FaShoppingCart className='text-2xl text-primary hover:text-brandBlue dark:text-brandWhite dark:hover:text-brandlightcyan' />
                            <div
                                className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
                        </button>
                        {/* Dark Mode Section */}
<<<<<<< HEAD
                        <div className='sm:mr-0 mr-2 duration-200'>
=======
                        <div className='sm:mr-0 mr-2'>
>>>>>>> dbc9447 (New Navbar Add with Light + Dark Mode)
                            <DarkMode darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
