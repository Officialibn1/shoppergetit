"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { TbSwitchHorizontal } from "react-icons/tb";
// import FormImage from "./image-mobile.png";
import Image from "next/image";

const AnimatedMobileAuthForm = () => {
	const [isManual, setIsManual] = useState(false);

	return (
		<section>
			<motion.div className=' relative overflow-hidden'>
				{isManual ? (
					<motion.div
						key={"Google SignIn"}
						initial={{ opacity: 0, y: "-200%" }}
						transition={{
							duration: 1,
						}}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "-200%" }}
						className=''>
						<Image
							src={"/image-mobile.png"}
							width={397}
							height={259}
							alt='Form Image'
							className='rounded-2xl w-full mb-10 '
						/>

						<button className='w-full flex items-center justify-center gap-3 border border-gray-300 rounded-3xl p-3 mb-4 hover:bg-gray-50 transition-colors'>
							<svg
								className='w-6 h-6'
								viewBox='0 0 24 24'>
								<path
									fill='#4285F4'
									d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
								/>
								<path
									fill='#34A853'
									d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
								/>
								<path
									fill='#FBBC05'
									d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
								/>
								<path
									fill='#EA4335'
									d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
								/>
							</svg>
							Login with Google
						</button>

						<div
							className='flex items-center justify-start gap-2 mt-4 group cursor-pointer'
							onClick={() => setIsManual((prev) => !prev)}>
							<TbSwitchHorizontal />

							<span className='text-gray-500 text-sm group-hover:text-gray-700 transition-colors'>
								Tap to switch to manual
							</span>
						</div>
					</motion.div>
				) : (
					<motion.div
						key={"Password SignIn"}
						initial={{ opacity: 0, y: "200%" }}
						transition={{
							duration: 1,
						}}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: "200%" }}
						className='mt-10'>
						<div className='space-y-4'>
							<Input
								type='email'
								placeholder='name@email.com'
								className='w-full p-5 text-lg  border rounded-lg bg-transparent'
							/>
							<Input
								type='password'
								placeholder='please enter password'
								className='w-full p-5 text-lg border rounded-lg bg-transparent'
							/>
						</div>

						<p className='mt-2 text-gray-500 text-sm'>Forgot Password?</p>

						<Button className='w-full mt-4 bg-black text-white rounded-2xl p-3 px-8 font-semibold'>
							Proceed
						</Button>

						<button
							className='flex items-center justify-start gap-2 mt-4 group cursor-pointer'
							onClick={() => setIsManual((prev) => !prev)}>
							<TbSwitchHorizontal />
							<span className='text-gray-500 text-sm group-hover:text-gray-700 transition-colors'>
								Tap to login with google
							</span>
						</button>
					</motion.div>
				)}
			</motion.div>
		</section>
	);
};

export default AnimatedMobileAuthForm;
