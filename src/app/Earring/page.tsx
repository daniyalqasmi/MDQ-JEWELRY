import Image from 'next/image'
import Link from 'next/link'

export default function Earring() {
    return (
        <div>
            <h1 className=" text-3xl font-bold title-font text-center text-gray-900 mb-20 mt-10">
                Earring
            </h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E1.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring
                                </h1>
                                <Link href={"/E1"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 5,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E2.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring
                                </h1>
                                <Link href={"/E2"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 24,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E3.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring
                                </h1>
                                <Link href={"/E3"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 8,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E4.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring

                                </h1>
                                <Link href={"/E4"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 14,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E5.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E5"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 17,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E6.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                Earring
                                </h1>
                                <Link href={"/E6"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 22,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E7.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E7"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E8.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E8"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 22,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E9.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring
                                </h1>
                                <Link href={"/E9"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,800</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E10.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E10"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E11.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E11"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,900</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E12.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E12"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 24,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E13.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring
                                </h1>
                                <Link href={"/E13"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E14.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring
                                </h1>
                                <Link href={"/E14"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 14,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E15.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring
                                </h1>
                                <Link href={"/E15"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 6,950</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E16.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring

                                </h1>
                                <Link href={"/E16"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 17,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E17.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring

                                </h1>
                                <Link href={"/E17"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 21,500
                                </button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E18.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring

                                </h1>
                                <Link href={"/E18"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 27,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E19.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Earring

                                </h1>
                                <Link href={"/E19"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 11,500
                                </button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/E20.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Earring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Earring

                                </h1>
                                <Link href={"/E20"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,500</button></p></Link>
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
