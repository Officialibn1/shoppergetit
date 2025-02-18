import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

const comfortaa = Comfortaa({
	variable: "--font-comfortaa",
	subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
	title: "Shoppergetit",
	description: "Redefining the buying and selling experience",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={` ${comfortaa.variable} antialiased relative font-`}>
				<Navbar />

				{children}

				<footer className='h-52 md:hidden flex items-center bg-[#F5F5F5] text-[#484848] justify-center px-5'>
					<div className='flex flex-col gap-10 items-center'>
						<ul className='flex gap-3'>
							<li>About</li>
							<li>Products</li>
							<li>Privacy</li>
							<li>Terms</li>
							<li>SME</li>
						</ul>

						<ul className='flex gap-3'>
							<li>+234 927370584</li>
							<li>support@test.com</li>
						</ul>
					</div>
				</footer>
			</body>
		</html>
	);
}
