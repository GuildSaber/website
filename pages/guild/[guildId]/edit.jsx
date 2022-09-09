import Link from 'next/link';

function edit(props) {
	let configList = [];
	let configsList = [];

	Object.keys(props.config).forEach((key, index) => {
		configList.push(key);
		configsList.push(props.config[key]);
	});

	return (
		<>
			<div>Edit Guild:</div>
			<div className="flex items-center justify-between w-full">
				<h1 className="text-2xl font-semibold">{props.guild.Name}</h1>
				<Link href={`/guild/${props.guild.ID}`}>
					<button className="btn-secondary">
						<i className="fas fa-save"></i>
						<p>Save Changes</p>
					</button>
				</Link>
			</div>
			<div className="grid gap-2 max-w-2xl m-auto mt-12">
				{configList.map((config, i) => {
					return (
						<div key={config} className="grid grid-cols-2 gap-12">
							<p>{config}</p>
							<input
								className="bg-secondarybg text-right"
								type="text"
								value={configsList[i].toString()}
								readOnly
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}

export async function getServerSideProps(context) {
	let ID = context.params.guildId;
	let data = await (await fetch(`https://api.guildsaber.com/guild/data/${ID}/true`)).json();

	return {
		props: {
			guild: data.Guild,
			config: data.GuildConfig,
		},
	};
}

export default edit;
