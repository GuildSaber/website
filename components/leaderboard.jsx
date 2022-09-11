import Image from 'next/future/image';

function Leaderboard(props) {
	return (
		<div>
			{props.buttons.map((entry, index) => {
				return (
					<button
						key={index}
						disabled={entry.disabled}
						className="text-white border-2 border-white border-opacity-25 rounded-xl px-2 py-1 mr-2 transition duration-100 hover:border-primary focus:border-primary focus:outline-none disabled:opacity-50 disabled:border-gray-600"
						onClick={entry.onClick}
					>
						{entry.name}
					</button>
				);
			})}
			{props.entries.map((entry, index) => {
				return (
					<>
						<div
							className="flex py-2 items-center hover:bg-white hover:bg-opacity-10 cursor-pointer transition-all duration-100 ease-in-out"
							key={index}
						>
							<div className="w-[5%] mx-2">#{index + 1}</div>
							<div className="w-auto mx-1">🇳🇱</div>
							<Image
								className="w-10 mx-4 rounded-full"
								src="https://cdn.discordapp.com/avatars/490534335884165121/98143e642657443b8d9a84abef57dd8f.png?size=4096"
								alt=""
								width="100"
								height="100"
							/>
							<div className="w-full mx-2">{entry}</div>
							<div className="w-fit mx-2">
								<p className="w-max">600 pp</p>
							</div>
						</div>
						<hr />
					</>
				);
			})}
		</div>
	);
}

export default Leaderboard;
