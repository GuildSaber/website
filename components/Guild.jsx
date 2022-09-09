import Image from 'next/image';
import Link from 'next/link';

function Guild(props) {
	return (
		<Link className="" href={`/guild/${props.ID}`}>
			<div
				className={
					'relative scale-[1] hover:scale-[1.02] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 ease-in-out'
				}
				style={{
					backgroundColor: `rgb(${props.Color.R},${props.Color.G},${props.Color.B})`,
				}}
			>
				<div className={'flex gap-6 p-2 sm:p-4 z-20 backdrop-blur-md'}>
					<span className="w-16 h-16 sm:w-32 sm:h-32 relative">
						<Image
							src={`${props.Logo}`}
							alt={`${props.Name}`}
							layout="fill"
							objectFit="cover"
							className="h-full rounded-lg"
						/>
					</span>
					<div className="flex justify-center sm:justify-start flex-col gap-2">
						<h1 className="text-xl font-semibold">{props.Name}</h1>
						<p className="hidden sm:block">{props.Description}</p>
					</div>
				</div>
				{props.Banner && (
					<div
						className="w-full h-full top-0 left-0 absolute -z-10 bg-cover bg-center bg-blend-soft-light opacity-50"
						style={{ backgroundImage: `url(${props.Banner})` }}
					/>
				)}
			</div>
		</Link>
	);
}

export default Guild;
