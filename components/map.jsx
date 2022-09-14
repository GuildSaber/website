import Image from 'next/future/image';
import Link from 'next/link';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import ReactTimeAgo from 'react-time-ago';

function Map(props) {
	let cover = `https://eu.cdn.beatsaver.com/${props.BeatSaverHash}.jpg`;

	const IconButton = ({ href, icon }) => {
		return (
			<div className="btn-icon">
				<a
					href={href}
					target="_blank"
					rel="noreferrer noopener"
					className="flex items-center justify-center mx-1"
				>
					{icon.includes('beatsaver') ? (
						<Image src={icon} alt={icon} width={20} height={20} className="invert scale-[1.3]" />
					) : (
						<i className={`${icon} scale-[1.2]`}></i>
					)}
				</a>
			</div>
		);
	};

	return (
		<div className="hover:bg-[#424457] relative scale-[1] rounded-xl cursor-pointer">
			<div
				className="w-full h-full top-0 left-0 absolute -z-10 bg-cover bg-center bg-blend-soft-light opacity-20 rounded-xl"
				style={{ backgroundImage: `url(${cover})` }}
			/>
			<div className="flex gap-3 justify-between p-3 rounded-xl backdrop-blur-sm">
				<Link href={`/leaderboard/${props.Difficulties[0].DifficultyID}`}>
					<div className="flex gap-3 w-full">
						<div className="flex gap-3 w-full">
							<div className="aspect-square min-h-[100px] my-auto">
								<Image
									src={cover}
									alt={props.MapName}
									width="100"
									height="100"
									className="rounded-md"
								/>
							</div>
							<div className="flex flex-col justify-center text-sm">
								{props.MapAuthorName.toLowerCase() !== props.Mapper.toLowerCase() && (
									<p>{props.MapAuthorName}</p>
								)}
								<p className="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis w-[350px]">
									{props.MapName}
								</p>
								<p>{props.Mapper}</p>
								<p
									className="w-fit px-1 py-[.1rem] rounded-md text-xs mt-1"
									style={{
										backgroundColor: diffColor(props.Difficulties[0].BeatSaverDifficultyName).color,
									}}
								>
									{diffColor(props.Difficulties[0].BeatSaverDifficultyName).name}
								</p>
							</div>
						</div>
						<div className="flex flex-col justify-between">
							<div className="text-center">
								{props.Pass_Enabled && (
									<p>
										{(props.Pass_PointMultiplier * props.Difficulties[0].PassWeight).toFixed(3)}{' '}
										{props.Pass_PointName}
									</p>
								)}
								{props.Acc_Enabled && (
									<p>
										{(90 * props.Acc_PointMultiplier * props.Difficulties[0].AccWeight).toFixed(3)}{' '}
										{props.Acc_PointName}*
									</p>
								)}
							</div>
							<div className="grid grid-cols-3 text-xs text-tertiary text-center gap-x-12 whitespace-nowrap">
								<p>
									<ReactTimeAgo date={props.UnixUploadedTime * 1000} locale="en-US" />
								</p>
								<p>{props.BPM} BPM</p>
								<p>{convertTime(props.Duration)}</p>
								<p>{props.Difficulties[0].NoteCount} Notes</p>
								<p>{props.Difficulties[0].NotesPerSecond.toFixed(2)} NPS</p>
								<p>NJS {props.Difficulties[0].NoteJumpSpeed}</p>
							</div>
						</div>
					</div>
				</Link>
				<div className="grid grid-cols-3 place-items-center my-5 mx-4 gap-1">
					<CopyToClipboard text={`!bsr ${props.BeatSaverID}`} className="btn-icon">
						<button>
							<i className="fa-brands fa-twitch scale-[1.2]"></i>
						</button>
					</CopyToClipboard>
					<IconButton
						href={`https://skystudioapps.com/bs-viewer/?id=${props.BeatSaverID}`}
						icon="fa-solid fa-play"
					/>
					{props.Difficulties[0].HasBestReplay && (
						<IconButton href={props.Difficulties[0].ReplayViewerURL} icon="fa-solid fa-medal" />
					)}
					<IconButton
						href={`beatsaver://${props.BeatSaverID}`}
						icon="fa-solid fa-cloud-arrow-down"
					/>
					<IconButton
						href={`https://r2cdn.beatsaver.com/${props.BeatSaverHash}.zip`}
						icon="fa-solid fa-download"
					/>
					<IconButton
						href={`https://beatsaver.com/maps/${props.BeatSaverID}`}
						icon="/beatsaver.svg"
					/>
				</div>
			</div>
		</div>
	);
}

function convertTime(duration) {
	return `${Math.floor(duration / 60)}:${(duration % 60).toString().padStart(2, '0')}`;
}

function diffColor(diff) {
	switch (diff.toLowerCase()) {
		case 'easy': {
			return {
				name: 'Easy',
				color: '#3CB371',
			};
		}
		case 'normal': {
			return {
				name: 'Normal',
				color: '#59B0F4',
			};
		}
		case 'hard': {
			return {
				name: 'Hard',
				color: '#FF6347',
			};
		}
		case 'expert': {
			return {
				name: 'Expert',
				color: '#BF2A42',
			};
		}
		case 'expertplus': {
			return {
				name: 'Expert+',
				color: '#8F48DB',
			};
		}
	}
}

export default Map;
