import Image from 'next/image';
import Link from 'next/link';

function Guild(props) {
	return (
		<>
			{props.guild.Banner && (
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
			)}
			<div className="flex items-center justify-between w-full">
				<h1 className="text-2xl font-semibold">{props.guild.Name}</h1>
				<Link href={`/guild/${props.guild.ID}/edit`}>
					<button className="btn-secondary">
						<i className="fas fa-pen"></i>
						<p>Edit Guild</p>
					</button>
				</Link>
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

export default Guild;
