import Image from "next/future/image";
import ReactTimeAgo from "react-time-ago";

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
			<div className="my-2 w-full text-center text-sm bg-[#323340] guild-container h-full p-5 rounded-xl">
				<table className="w-full">
					<thead>
						<tr className="text-tertiary">
							<th className="font-normal px-1">Rank</th>
							<th className="font-normal px-1">Country</th>
							<th className="font-normal px-1 invisible">
								Player
							</th>
							<th className="font-normal px-1">Time Set</th>
							<th className="font-normal px-1">HMD</th>
							<th className="font-normal px-1">Score</th>
							<th className="font-normal px-1">Misses</th>
							<th className="font-normal px-1">Pauses</th>
							<th className="font-normal px-1">Acc</th>
							<th className="font-normal px-1">Points</th>
						</tr>
					</thead>
					<tbody>
						{props.entries.map((entry, index) => {
							let playerURL =
								entry.ScoreSaberID === "0"
									? `https://www.beatleader.xyz/u/${entry.BeatLeaderID}`
									: `https://scoresaber.com/u/${entry.ScoreSaberID}`;
							return (
								<tr
									key={index}
									className={`border-b-[1px] last:border-none border-white hover:bg-white hover:bg-opacity-10 transition-all duration-100 ease-in-out ${
										entry.State % 2 === 0 && "text-tertiary"
									}`}
								>
									<td className="w-[3%] font-semibold">
										#{entry.Rank}
									</td>
									<td className="w-auto">{entry.Country}</td>
									<td>
										<a
											href={playerURL}
											className="w-fit text-left flex items-center gap-3 hover:text-primary hover:underline underline-offset-2 decoration-2"
										>
											<Image
												className="w-10 rounded-full my-2"
												src={entry.Avatar}
												alt={entry.Name}
												width="100"
												height="100"
											/>
											<p>{entry.Name}</p>
										</a>
									</td>
									<td className="whitespace-nowrap px-2">
										<ReactTimeAgo
											date={entry.UnixTimeSet * 1000}
											locale="en-US"
										/>
									</td>
									<td className="whitespace-nowrap px-2">
										{getHMDName(entry.HMD)}
									</td>
									<td className="px-2">
										{entry.ModifiedScore.toLocaleString()}
									</td>
									<td>{entry.MissedNotes}</td>
									<td>
										{entry.HasScoreStatistic
											? entry.ScoreStatistic.PauseCount
											: "???"}
									</td>
									<td>
										{(
											(entry.ModifiedScore /
												props.mapInfo.Difficulties[0]
													.MaxScore) *
											100
										).toFixed(2)}
										%
									</td>
									<td className="px-2 font-medium">
										<p>{`${entry.PointsData[
											props.type
										].Points.toLocaleString()} ${
											entry.PointsData[props.type]
												.PointsName
										}`}</p>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
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
						<p className="mx-1">{"<"}</p>
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
						<p className="mx-1">{">"}</p>
					</button>
				</div>
			</div>
		</div>
	);
}

function getHMDName(hmd) {
	switch (hmd) {
		case 0:
			return "Unknown";
		case 1:
			return "CV1";
		case 2:
			return "Vive";
		case 4:
			return "Vive Pro";
		case 8:
			return "WMR";
		case 16:
			return "Rift S";
		case 32:
			return "Quest 1";
		case 64:
			return "Index";
		case 128:
			return "Cosmos";
		case 256:
			return "Quest 2";
	}
}

export default Leaderboard;
