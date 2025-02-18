import Link from "next/link";
import React from "react";
import { FaBars, FaOpencart } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Button } from "./button";
import { HiUser } from "react-icons/hi2";

const Navbar = () => {
	return (
		<nav className='w-full fixed top-0 left-0 bg-white text-black py-1 px-5 lg:px-8  flex z-10'>
			<ul className='flex md:hidden justify-between items-center w-full text-lg py-2'>
				<li className='flex-1 flex items-center gap-3'>
					<FaOpencart size={40} />
					<h1 className='text-2xl font-black'>Shoppergetit</h1>
				</li>

				<li className='flex-1 flex justify-end items-center gap-3 xl:gap-8'>
					<Link
						href={"/"}
						className='font-semibold p-1 bg-[#A8A7C4] rounded-full'>
						<HiUser size={28} />
					</Link>

					<Button>
						<FaBars
							size={28}
							strokeWidth={0.5}
							fill='#52508A'
						/>
					</Button>
				</li>
			</ul>

			<ul className='hidden md:flex justify-between items-center w-full xl:text-lg'>
				<li className='flex-1 flex items-center gap-3'>
					<FaOpencart size={40} />
					<h1 className='text-xl lg:text-2xl font-bold'>Shoppergetit</h1>
				</li>

				<li className='flex-1 flex justify-center gap-2 items-center'>
					<IoLocationSharp size={24} />

					<span className='font-black text-lg lg:text-xl'>Abuja</span>
				</li>

				<li className='flex-1 flex justify-end items-center gap-3 xl:gap-8'>
					<Link
						href={"/"}
						className='font-semibold'>
						Store
					</Link>

					<Link
						href={"/"}
						className='font-semibold'>
						Login
					</Link>

					<Link
						href={"/"}
						className='px-2 py-3  lg:px-3 lg:py-4   rounded-xl text-lg  tracking-wide text-white bg-[#b63b56] text-nowrap'>
						Become a Shopper
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
