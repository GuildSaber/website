import { useState, useEffect } from 'react';
import Image from 'next/future/image';

function Map(props) {
	const [mapDetails, setMapDetails] = useState({});

	const IconButton = ({ href, icon }) => {
		return (
			<a
				href={href}
				className="bg-primary pl-2 pr-2 pt-1 pb-1 w-fit h-fit rounded-md"
				target="_blank"
				rel="noreferrer noopener"
			>
				<button>
					<i className={icon}></i>
				</button>
			</a>
		);
	};

	const Difficulty = ({ diff }) => {
		return (
			<div className={`bg-${diff.toLowerCase()} w-fit pl-1 pr-1 rounded-md text-sm`}>
				<p>{diff}</p>
			</div>
		);
	};

	useEffect(() => {
		(async () => {
			let mapData = await (
				await fetch(`https://api.beatsaver.com/maps/hash/${props.BeatSaverHash}`)
			).json();
			setMapDetails(mapData.versions[0]);
		})();
	}, [setMapDetails, props.BeatSaverHash]);

	return (
		<div className="bg-[#424457] flex gap-3 p-3 rounded-xl">
			<Image
				src={mapDetails.coverURL}
				alt={props.MapName}
				width="100"
				height="100"
				className="rounded-md"
			></Image>
			<div className="flex flex-col justify-center">
				<p>{props.MapAuthorName}</p>
				<p className="text-xl font-semibold">{props.MapName}</p>
				<p>{props.Mapper}</p>
				<Difficulty diff={props.Difficulties[0].BeatSaverDifficultyName} />
			</div>
			{/* <div className="grid grid-cols-3 place-items-center">
				<IconButton href="https://beatsaver.com" icon="fa fa-twitch" />
				<IconButton href="https://beatsaver.com" icon="fas fa-play" />
				<IconButton href="https://beatsaver.com" icon="fas fa-medal" />
				<IconButton href="https://beatsaver.com" icon="fas fa-cloud-download-alt" />
				<IconButton href="https://beatsaver.com" icon="fas fa-download" />
				<a
					href={`https://beatsaver.com/${props.BeatSaverID}`}
					className="bg-primary pl-2 pr-2 pt-1 pb-1 w-fit h-fit rounded-md"
					target="_blank"
					rel="noreferrer noopener"
				>
					<button className="invert flex w-full h-full">
						<Image src="/beatsaver.svg" alt="BeatSaver" height={20} width={20} />
					</button>
				</a>
			</div> */}
		</div>
	);
}

export default Map;
