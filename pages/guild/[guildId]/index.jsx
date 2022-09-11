import { useState, useEffect } from 'react';
import Link from 'next/link';
import Level from '../../../components/level';
import Map from '../../../components/map';

function Guild(props) {
	const [selectedLevel, setSelectedLevel] = useState(1);
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
								<i className="fas fa-pen"></i>
								<p>Edit Guild</p>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className="grid grid-cols-[33%_auto] gap-3 mt-4">
				<div className="bg-[#323340] w-full h-full p-5 rounded-xl">
					<h3 className="mb-3">Level</h3>
					<div className="flex flex-col gap-3 max-h-[40rem] overflow-auto pr-4">
						{props.levels.map((level) => {
							return (
								<button
									key={level.ID}
									onClick={() => changeLevel(level.ID)}
									className="bg-[#424457] rounded-md p-2 cursor-pointer text-left"
								>
									<Level {...level} />
								</button>
							);
						})}
					</div>
				</div>
				<div className="bg-[#323340] w-full h-full p-5 rounded-xl flex flex-col gap-3">
					<h3>Maps</h3>
					<div className="flex flex-col gap-3 max-h-[40rem] overflow-auto pr-4">
						{maps.map((map) => {
							return <Map key={map.MapID} {...map} />;
						})}
					</div>
				</div>
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	let ID = context.params.guildId;
	let guildData = await (
		await fetch(`https://api.guildsaber.com/guilds/data/by-id/${ID}/false`)
	).json();
	let levelData = await (
		await fetch(`https://api.guildsaber.com/levels/data/all?guild-id=${ID}`)
	).json();

	return {
		props: {
			guild: guildData.Guild,
			levels: levelData,
		},
	};
}

export default Guild;
