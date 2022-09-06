import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="grid grid-cols-8 gap-4 ml-44 ">
			<div className="text-right flex justify-center items-center">
				<Image src="/logo_trans.png" width="100%" height="100%" layout="fixed" />
				<h1 className="float-right text-xl flex justify-center items-center">
					<strong>Guild</strong>Saber
				</h1>
			</div>
			<div className="h-full flex items-center mr-0 ml-auto">
				<Link href="/" className="">
					<h1 className="hover:bg-purple-800 p-2 m-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
						Guilds
					</h1>
				</Link>
				<Link href="/" className="">
					<h1 className="hover:bg-purple-800 p-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
						Maps
					</h1>
				</Link>
				<Link href="/" className="">
					<h1 className="hover:bg-purple-800 p-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
						Passes
					</h1>
				</Link>
				<Link href="/" className="">
					<h1 className="hover:bg-purple-800 p-2 rounded-lg transition-all duration-200 ease-in-out cursor-pointer">
						Login
					</h1>
				</Link>
			</div>
		</nav>
	);
}
