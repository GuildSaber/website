import { useState, useEffect } from 'react';
import Link from 'next/link';
import Level from '../../../components/level';
import Map from '../../../components/map';

function Guild(props) {
	const [selectedLevel, setSelectedLevel] = useState(props.levels[0].ID);
	const [maps, setMaps] = useState([]);

	const changeLevel = (id) => {
		setSelectedLevel(id);
	};

	useEffect(() => {
		(async () => {
			let mapData = await (
				await fetch(
					`https://api.guildsaber.com/maps/data/all?guild-id=${props.guild.ID}&level-id=${selectedLevel}`
				)
			).json();
			setMaps(mapData.RankedMaps);
		})();
	}, [props.guild.ID, selectedLevel]);

	return (
		<>
			<div>
				{/* props.guild.Banner && (
					<div className="w-full relative mb-8">
						<Image
							src={props.guild.Banner}
							alt={props.guild.Name}
							layout="responsive"
							width="100%"
							height="17px"
							objectFit="contain"
						/>
					</div>
				) */}
				<div className="flex items-center justify-between w-full">
					<h1 className="text-2xl font-semibold">{props.guild.Name}</h1>
					<div className="flex gap-3">
						<Link href={`/guild/${props.guild.ID}/edit`}>
							<button className="btn-secondary">
								<i className="fa-solid fa-pen"></i>
								<p>Edit Guild</p>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-[33%_auto] gap-3 mt-4">
				<div className="bg-[#323340] w-full h-full p-5 rounded-xl">
					<h3 className="mb-3">Level</h3>
					<div className="guild-container max-h-[43rem]">
						{props.levels.map((level) => {
							return (
								<button
									key={level.ID}
									onClick={() => changeLevel(level.ID)}
									className={`bg-[#424457] hover:bg-[#525674] rounded-md p-2 cursor-pointer text-left ${
										level.ID === selectedLevel && 'bg-primary hover:bg-primary font-semibold'
									}`}
								>
									<Level {...level} />
								</button>
							);
						})}
					</div>
				</div>
				<div className="bg-[#323340] w-full h-full p-5 rounded-xl flex flex-col justify-between gap-3">
					<div className="flex flex-col gap-3">
						<div className="flex justify-between items-center">
							<h3>Maps in {props.levels.find((l) => l.ID === selectedLevel).Name}</h3>
							<div className="flex gap-3 items-center">
								<p className="text-tertiary text-sm">*Value at 90%</p>
								<button className="btn-tertiary">
									<i className="fa-solid fa-list-music"></i>
									<p>Playlist</p>
								</button>
							</div>
						</div>
						<div className="guild-container">
							{maps.map((map) => {
								return (
									<Map
										key={map.MapID}
										{...map}
										{...props.config}
									/>
								);
							})}
						</div>
					</div>
					<div className="flex gap-3 justify-center items-center">
						<button className="btn-tertiary" disabled>
							<i className="fa-solid fa-angle-left"></i>
						</button>
						<p>Page 1 / 10</p>
						<button className="btn-tertiary">
							<i className="fa-solid fa-angle-right"></i>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	let ID = context.params.guildId;
	let guildData = await (
		await fetch(`https://api.guildsaber.com/guilds/data/by-id/${ID}/true`)
	).json();
	let levelData = await (
		await fetch(`https://api.guildsaber.com/levels/data/all?guild-id=${ID}`)
	).json();

	return {
		props: {
			guild: guildData.Guild,
			config: guildData.GuildConfig,
			levels: levelData,
		},
	};
}

export default Guild;
