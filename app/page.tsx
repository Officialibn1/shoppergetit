import AnimatedAuthForm from "@/components/ui/AnimatedAuthForm";
import AnimatedMobileAuthForm from "@/components/ui/AnimatedMobileAuthForm";

export default function Home() {
	return (
		<header className='flex  w-full h-screen relative bg-gradient-to-b from-blue-50/50 to-blue-50/20'>
			<div className='hidden md:block relative  mt-[10%] rounded-[43px] w-4/5 mx-auto h-[471px] bg-[url(/image-desktop.png)] bg-[cover,cover] xl:bg-cover bg-no-repeat bg-center'>
				<AnimatedAuthForm />
			</div>

			<div className='block mt-[25%] w-full md:hidden px-5'>
				<h2 className='text-2xl font-semibold mb-10'>Welcome back</h2>

				<AnimatedMobileAuthForm />
			</div>
		</header>
	);
}
