import Image from 'next/image'
import Link from 'next/link'


export default function M8() {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <Image
                            alt="ecommerce"
                            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                            src={require("../../../public/assests/pic/M8.jpg")}
                        />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">
                                MDQ JEWElRY
                            </h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                                SAMINA - PINK PENDANT SET
                            </h1>
                            <div className="flex mb-4">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                </div>
                            </div>
                            <p className="leading-relaxed">
                                Goldplated Pacchi Kundan Pendant necklace with pearl strings
                            </p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Quantity</span>
                                    <div className="relative">
                                        <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                        </select>

                                    </div>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">
                                    PKR 8,000
                                </span>
                                <Link href={"/Home"} className="flex ml-auto text-white bg-cyan-500 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-600 rounded ">ADD TO CARD</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
