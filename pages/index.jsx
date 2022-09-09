import Link from 'next/link';
function Home() {
	return (
		<>
			<span className="flex flex-col gap-10 mt-40">
				<h1 className="text-4xl font-semibold max-w-md leading-snug">
					Beat Saber Map Rankings for your own Discord Server
				</h1>
				<h2 className="text-xl  max-w-lg">
					Customizable Discord Bot with In-Game Plugin and Website Overview of Maps and
					Passes.
				</h2>
			</span>
			<span className="flex gap-12 mt-28 flex-col sm:flex-row sm:items-start items-center">
				<div className="flex flex-col gap-4 w-52 border-2 border-primary rounded-xl p-5">
					<h3 className="font-semibold">Download the Plugin for In-Game Leaderboards</h3>
					<p className="text-[0.8rem]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa quis ut
						eu lorem.
					</p>
					<button className="btn-primary">
						<p>Download</p>
						<i className="fas fa-arrow-right"></i>
					</button>
				</div>
				<div className="flex flex-col gap-4 w-52 border-2 border-primary rounded-xl p-5">
					<h3 className="font-semibold">
						Create your own Guild using Discord Bot Commands
					</h3>
					<p className="text-[0.8rem]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu massa quis ut
						eu lorem.
					</p>
					<Link href={'/setup'}>
						<button className="btn-primary">
							<p>Setup</p>
							<i className="fas fa-arrow-right"></i>
						</button>
					</Link>
				</div>
				<div className="bg-secondarybg w-full h-full absolute -z-50 left-0 mt-16"></div>
			</span>
		</>
	);
}

export default Home;
