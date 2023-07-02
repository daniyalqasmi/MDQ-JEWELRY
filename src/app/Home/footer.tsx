import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";


export default function Footer() {
    return (
        <footer className="text-gray-600 body-font bg-cyan-500 ">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap md:text-left text-center order-first">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-extrabold text-white hover:text-black tracking-widest  text-2xl mb-3">
                            SITE LINKS
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href={"/Home"} className="text-gragray-700 hover:text-cyan-800 font-semibold">HOME</Link>
                            </li>
                            
                            
                            <li>
                                <Link href={"/Contact"} className="text-gragray-700 hover:text-cyan-800 font-semibold">CONTACT</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-extrabold text-white hover:text-black tracking-widest  text-2xl mb-3">
                            PRODUCTS
                        </h2>
                        <nav className="list-none mb-10 ">
                            <li>
                                <Link href={"/Necklace"} className="text-gray-700 hover:text-cyan-800 font-semibold mt-4 ">NECKLACE SETS</Link>
                            </li>
                            <li>
                                <Link href={"/Earring"} className="text-gray-700 hover:text-cyan-800 font-semibold mt-4 ">EARRINGS</Link>
                            </li>
                            <li>
                                <Link href={"/Ring"} className="text-gray-700 hover:text-cyan-800 font-semibold mt-4 ">RING FOR GIRLS</Link>
                            </li>
                            <li>
                                <Link href={"/Bridal"} className="text-gray-700 hover:text-cyan-800 font-semibold mt-4 ">BRIDAL NEACKLACE SETS</Link>
                            </li>
                            <li>
                                <Link href={"/Maala"} className="text-gray-700 hover:text-cyan-800 font-semibold mt-4 ">MALAAS COLLECTIONS</Link>
                            </li>
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-extrabold text-white hover:text-black tracking-widest  text-2xl mb-3">
                            CATEGORIES
                        </h2>
                        <nav className="list-none mb-10">
                            <li>
                                <p className="text-gray-700 hover:text-cyan-800 font-semibold">+92 347 8381849</p>
                            </li>
                            <li>
                                <p className="text-gray-700 hover:text-cyan-800 font-semibold">Daniyalqasmi5327@gmail.com</p>
                            </li>
                            <li>
                                <p className="text-gray-700 hover:text-cyan-800 font-semibold">Daniyalqasmi1@gmail.com</p>
                            </li>
                            
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="title-font font-extrabold  text-gray-900 tracking-widest text-sm mb-3">
                            SUBSCRIBE OUR NEWSLETTER
                        </h2>
                        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                            <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                <label
                                    htmlFor="footer-field"
                                    className="leading-7 font-bold text-gray-600"
                                >
                                    ENTER YOUR EMAIL
                                </label>
                                <input
                                    type="text"
                                    id="footer-field"
                                    name="footer-field"
                                    className="w-full bg-white rounded border border-gray-300 focus:bg-white focus:ring-2 focus:ring-cyan-200 focus:border-black text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                            <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-cyan-200 border-0 py-2 px-6 focus:outline-none hover:bg-white rounded">
                                <AiOutlineArrowRight className='text-black' />
                            </button>
                        </div>
                        <p className="text-gray-500 text-xl font-bold mt-2 md:text-left text-center">
                            FOLLOW US
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-7 mt-4 justify-center sm:justify-start ">
                            <a className="text-white p-500">
                                <a href="https://www.facebook.com/Daniyalqasmi5327">
                                    <FaFacebookF className="text-3xl hover:text-blue-700" />
                                </a>
                            </a>
                            <a className="ml-3 text-white p-500">
                                <a href="https://www.instagram.com/muhammaddaniyalqasmi5327">
                                    <FaInstagram className="text-3xl ml  hover:text-red-700  " />

                                </a>
                            </a>

                            <a className="ml-3 text-white p-500">
                                <a href="">
                                    <FaGithub className="text-3xl ml  hover:text-black" />
                                </a>
                            </a>
                        </span>
                    </div>
                </div>
            </div>
            <div className="bg-cyan-500">
                <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">

                    <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
                        © 2032 MDQ JEWELRY.
                        
                    </p>

                </div>
            </div>
        </footer>

    )
}
