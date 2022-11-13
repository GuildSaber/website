import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<nav className="ml-8 mr-8 sm:ml-16 sm:mr-16">
			<div className="flex flex-col sm:flex-row max-w-screen-2xl items-center justify-between m-auto mt-6 mb-6 gap-4 sm:gap-14">
				<Link href="/">
					<div className="flex justify-center items-center gap-3 cursor-pointer">
						<Image
							src="/LOGO.svg"
							alt="GuildSaber"
							width="40px"
							height="40px"
							layout="fixed"
						/>
						<h1 className="text-xl">
							<strong>Guild</strong>Saber
						</h1>
					</div>
				</Link>
				<div className="h-full flex items-center gap-8">
					<Link href="/guilds">
						<p className="text-tertiary hover:text-secondary transition-all duration-200 ease-in-out cursor-pointer">
							Guilds
						</p>
					</Link>
					<Link href="/login">
						<p className="text-tertiary hover:text-secondary transition-all duration-200 ease-in-out cursor-pointer">
							Login
						</p>
					</Link>
				</div>
			</div>
		</nav>
	);
}
