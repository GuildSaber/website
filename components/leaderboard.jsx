import Image from 'next/future/image';

function Leaderboard(props) {
	return (
		<div>
			{props.buttons.map((entry, index) => {
				return (
					<button
						id={index}
						key={index}
						disabled={entry.disabled}
						className="text-white border-2 border-white border-opacity-25 rounded-xl px-2 py-1 mr-2 transition duration-100 hover:border-primary enabled:active:bg-primary focus:border-primary disabled:opacity-50 disabled:border-gray-600 disabled:cursor-not-allowed"
						onClick={entry.onClick}
					>
						{entry.name}
					</button>
				);
			})}
			<div className="my-2 w-full">
				{props.entries.map((entry, index) => {
					return (
						<div key={index}>
							<div className="flex py-2 items-center hover:bg-white hover:bg-opacity-10 cursor-pointer transition-all duration-100 ease-in-out">
								<div className="w-[5%] mx-2">#{entry.Rank}</div>
								<div className="w-auto mx-1">{entry.Country}</div>
								<Image
									className="w-10 mx-4 rounded-full"
									src={entry.Avatar}
									alt={entry.Name}
									width="100"
									height="100"
								/>
								<div className="w-full mx-2">{entry.Name}</div>
								<div className="w-fit mx-2">
									<p className="w-max">{`${entry.RankData[
										props.type
									].Points.toLocaleString()} ${
										entry.RankData[props.type].PointsName
									}`}</p>
								</div>
							</div>
							<hr />
						</div>
					);
				})}
			</div>
			<div className="flex">
				<div className="w-1/2">
					<button
						disabled={props.pageBack.disabled}
						className="text-white border-2 border-white border-opacity-25 rounded-xl px-2 py-1 mr-2 transition duration-100 enabled:hover:border-primary enabled:active:bg-primary disabled:opacity-50 disabled:border-gray-600 disabled:cursor-not-allowed"
						onClick={() => {
							props.pageBack.pageBackFunction();
						}}
					>
						<p className="mx-1">{'<'}</p>
					</button>
				</div>
				<div className="w-1/2 text-right">
					<button
						disabled={props.pageForward.disabled}
						className="text-white border-2 border-white border-opacity-25 rounded-xl px-2 py-1 mr-2 transition duration-100 enabled:hover:border-primary enabled:active:bg-primary disabled:opacity-50 disabled:border-gray-600 disabled:cursor-not-allowed"
						onClick={() => {
							props.pageForward.pageForwardFunction();
						}}
					>
						<p className="mx-1">{'>'}</p>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Leaderboard;
