import { useState, useEffect } from 'react';
import Link from 'next/link';
import Guild from '../components/guild';

function Guilds({ guilds, count }) {
	const [loadedGuilds, setLoadedGuilds] = useState([]);

	useEffect(() => {
		setLoadedGuilds(guilds);
	}, [guilds]);

	return (
		<>
			<div className="flex items-center justify-between w-full">
				<h1 className="text-2xl font-semibold">Guilds ({count})</h1>
				<Link href={'/setup'}>
					<button className="btn-secondary">
						<i className="fas fa-plus"></i>
						<p>Create Guild</p>
					</button>
				</Link>
			</div>
			<div className="grid grid-cols-1 mt-4 mb-4 gap-6">
				{loadedGuilds.map((guild) => {
					return <Guild key={guild.ID} {...guild} />;
				})}
			</div>
		</>
	);
}

export async function getServerSideProps() {
	let data = await (await fetch('https://api.guildsaber.com/guilds/data/all')).json();

	return {
		props: {
			guilds: data.Guilds,
			count: data.Metadata.Count,
		},
	};
}

export default Guilds;
