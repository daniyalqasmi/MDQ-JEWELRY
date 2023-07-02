import Image from 'next/image'
import Link from 'next/link'
import { GiDoubleNecklace } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiNecklaceDisplay } from "react-icons/gi";
import { GiFeatherNecklace } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";

export default function Navebar() {
  return (
    <div className=''>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src={require("../../../public/assests/pic/logo jewelry logo-01.png")} alt="" width={55} height={55} />
            <span className="ml-3 text-4xl text-cyan-500">MDQ JEWELRY </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href={"/Home"} className="mr-5 bg-cyan-500  text-white hover:text-cyan-500 hover:bg-white btn m-1">HOME</Link>
            
            <div className="dropdown dropdown-hover ">
              <label tabIndex={0} className="btn m-1 bg-cyan-500  text-white hover:text-cyan-500 hover:bg-white">SHOP</label>
              <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52">
                <li><Link href={"/Necklace"} className='' > <GiDoubleNecklace className='text-black font-bold ' /> Necklace Sets</Link></li>
                <li><Link href={"/Earring"} className='' > <GiCrystalEarrings className='text-black font-bold ' /> Earrings</Link></li>
                <li><Link href={"/Ring"} className='' > <GiBigDiamondRing className='text-black font-bold ' /> Ring for Girls</Link></li>
                <li><Link href={"/Bridal"} className='' > <GiNecklaceDisplay className='text-black font-bold ' /> Bridal Necklace sets</Link></li>
                <li><Link href={"/Maala"} className='' > <GiFeatherNecklace className='text-black font-bold ' /> Malaas Collections</Link></li>
              </ul>
            </div>
            <Link href={"/contact"} className="mr-5 ml-4 bg-cyan-500  text-white hover:text-cyan-500 hover:bg-white btn m-1">CONTACT</Link>
            
          </nav>
          
          {/* <details className=" mr-">
            <summary className="">open or close</summary>
            <ul className="">
              <li><a>Item 1</a></li>
              <li><a>Item 2</a></li>
            </ul>
          </details> */}

        </div>

      </header>

    </div>
  )
}