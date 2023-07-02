import Image from 'next/image'
import Link from 'next/link'

export default function Necklace() {
    return (
        <div>
            <h1 className=" text-3xl font-bold title-font text-center text-gray-900 mb-20 mt-10">
                NECKLACE
            </h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N1.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Gold Plated Allah Pendant With Zircons
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Calligraphy Allah Pendant.
                                </h1>
                                <Link href={"/N1"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 5,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N2.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Goldplated Jadau Polki And Kundan Necklace Set
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Shyla Jadau Polki Necklace Set
                                </h1>
                                <Link href={"/N2"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 24,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N3.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Goldplated Pacchi Kundan Pendant Necklace With Pearl 
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Samina - Pink Pendant Set
                                </h1>
                                <Link href={"/N3"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 8,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N4.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Goldplated Pacchi Kundan Necklace Set With A Tinge Of Mint Greens And Pink Drops
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Mahnoor Kundan Necklace Set

                                </h1>
                                <Link href={"/N4"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 14,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N5.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    American Diamond Necklace With Jhumka Style Hoops In Silver And Black Rhodium Finish
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    KYLE Silver Diamond Cut Polki Necklace Set - Aqua
                                </h1>
                                <Link href={"/N5"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 17,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N6.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Goldplated Polki Long Necklace Maala Set
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    RANI Polki Maala Set
                                </h1>
                                <Link href={"/N6"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 22,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N7.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Gold Plated Kundan Polki Like Necklace Set With Fine Meena Handwork At The Back Side
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Oversized Kundan Polki Set
                                </h1>
                                <Link href={"/N7"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N8.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Polki Double Strings In Rose Gold Polish.
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Neha Polki Strings Rose Gold
                                </h1>
                                <Link href={"/N8"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 22,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N9.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Warda Pink Strings Necklace Set
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Warda Pink Strings Necklace Set
                                </h1>
                                <Link href={"/N9"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,800</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N10.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    American Diamond Necklace With Jhumka Style Hoops In Black Rhodium Finish
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    KYLE Silver Diamond Cut Necklace Set - Deep Red
                                </h1>
                                <Link href={"/N10"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N11.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Samina Polki Pendant Set - Rust
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Samina Polki Pendant Set - Rust
                                </h1>
                                <Link href={"/N11"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,900</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N12.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Sterling Silver 925 Necklace With High Grade Zircons.
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Silver Necklace Diamond Cut
                                </h1>
                                <Link href={"/N12"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 24,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N13.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Samina Pendant Set - Light Pink
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Samina Pendant Set - Light Pink
                                </h1>
                                <Link href={"/N13"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N14.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    American Diamond Necklace Set In Pink Stones With Zircons
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    EMMA Pink Stones Necklace Set
                                </h1>
                                <Link href={"/N14"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 14,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N15.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Warda Teal Strings Necklace Set
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Warda Teal Strings Necklace Set
                                </h1>
                                <Link href={"/N15"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 6,950</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N16.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    American Diamond Necklace With Jhumka Style Hoops In Black Rhodium Finish line-clamp-1
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    KYLE Silver Diamond Cut Necklace Set - Ruby
                                </h1>
                                <Link href={"/N16"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 17,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N17.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Pure Sterling Silver 925 Gold Plated Polki Style Pendant With Pearls String And Earrings
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    RANI BEGUM Pendant Set
                                </h1>
                                <Link href={"/N17"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 21,500
                                </button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N18.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Goldplated Finest Quality Polki Style Necklace
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Nagia Polki Necklace
                                </h1>
                                <Link href={"/N18"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 27,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N19.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Pearl And Uncut Polki Long Necklace With Earrings
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Anooshay - Amethyst Pendant Set
                                </h1>
                                <Link href={"/N19"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 11,500
                                </button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/N20.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Polki necklace set with gold and grey tumbled stones
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Mehak Polki Necklace Set
                                </h1>
                                <Link href={"/N20"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,500</button></p></Link>
                            </div>
                        </div>
                        

                    </div>
                    <div className="card-body items-center text-center">

                        <div className="card-actions">
                            <Link href={"/error"} className="bg-cyan-500  text-white hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">SHOP ALL PRODUCTS</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
