/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';

function Guild(props) {
	// if banner not available, use guild color as background
	let background = {
		backgroundColor: `rgba(${props.Color.R},${props.Color.G},${props.Color.B},.7)`,
	};
	if (props.banner) {
		background = { backgroundImage: `url(${props.Banner})` };
	}

	console.log(props.Name);
	return (
		<div className={'rounded-xl bg-cover bg-center overflow-hidden'} style={background}>
			<div className={'flex gap-6 p-4 h-48 backdrop-blur-md'}>
				{/* <img src={props.Logo} alt={props.Name} className="h-full rounded-lg" /> */}
				<Image
					src={`${props.Logo}`}
					alt={`${props.Name}`}
					layout="fixed"
					width="100%"
					height="100%"
				/>
				<div className="flex flex-col gap-2">
					<h1 className="text-xl font-semibold">{props.Name}</h1>
					<p>{props.Description}</p>
				</div>
			</div>
		</div>
	);
}

export default Guild;
