import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="ml-16 mr-16">
			<div className="flex max-w-screen-2xl items-center justify-between m-auto mt-6 mb-6 gap-14">
				<Link href="/">
					<div className="flex justify-center items-center gap-3 cursor-pointer">
						<Image src="/LOGO.svg" alt="GuildSaber" width="40px" height="40px" layout="fixed" />
						<h1 className="text-xl">
							<strong>Guild</strong>Saber
						</h1>
					</div>
				</Link>
				<div className="h-full flex items-center gap-14">
					<Link href="/guilds">
						<p className="text-slate-400 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
							Guilds
						</p>
					</Link>
					<Link href="/maps">
						<p className="text-slate-400 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
							Maps
						</p>
					</Link>
					<Link href="/passes">
						<p className="text-slate-400 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
							Passes
						</p>
					</Link>
					<Link href="/login">
						<p className="text-slate-400 hover:text-white transition-all duration-200 ease-in-out cursor-pointer">
							Login
						</p>
					</Link>
				</div>
			</div>
		</nav>
	);
}
