import Image from 'next/image'
import Link from 'next/link'

export default function Ring() {
    return (
        <div>
            <h1 className=" text-3xl font-bold title-font text-center text-gray-900 mb-20 mt-10">
                RING
            </h1>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R1.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring
                                </h1>
                                <Link href={"/R1"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 5,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R2.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring
                                </h1>
                                <Link href={"/R2"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 24,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R3.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring
                                </h1>
                                <Link href={"/R3"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 8,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R4.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring

                                </h1>
                                <Link href={"/R4"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 14,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R5.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R5"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 17,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R6.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                Ring
                                </h1>
                                <Link href={"/R6"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 22,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R7.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R7"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R8.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R8"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 22,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R9.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring
                                </h1>
                                <Link href={"/R9"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,800</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R10.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R10"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R11.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R11"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,900</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R12.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R12"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 24,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R13.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring
                                </h1>
                                <Link href={"/R13"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 9,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R14.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring
                                </h1>
                                <Link href={"/R14"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 14,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R15.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring
                                </h1>
                                <Link href={"/R15"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 6,950</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R16.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring
                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring

                                </h1>
                                <Link href={"/R16"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 17,500</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R17.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring

                                </h1>
                                <Link href={"/R17"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 21,500
                                </button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R18.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring

                                </h1>
                                <Link href={"/R18"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 27,000</button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R19.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium line-clamp-1">
                                    Ring

                                </h1>
                                <Link href={"/R19"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 11,500
                                </button></p></Link>
                            </div>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 p-4 w-full items-center text-center">
                            <a className="block relative h-48 rounded overflow-hidden">
                                <Image
                                    alt="ecommerce"
                                    className="object-cover object-center w-full h-full block"
                                    src={require("../../../public/assests/pic/R20.jpg")}
                                />
                            </a>
                            <div className="mt-4">
                                <h2 className="text-gray-500 text-xs tracking-widest title-font mb-1 line-clamp-1">
                                    Ring

                                </h2>
                                <h1 className="text-gray-900 title-font text-lg font-medium">
                                    Ring

                                </h1>
                                <Link href={"/R20"}><p className="mt-1"><button className="bg-cyan-300  text-gray-700 hover:bg-white hover:text-cyan-500  border-cyan-700 rounded-md p-4">PKR 12,500</button></p></Link>
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
