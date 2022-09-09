export default function Step(props) {
	return (
		<div className="flex space-x-3 mb-2">
			<div className="flex flex-col items-center">
				<div className="step-number border-2 border-white w-8 h-8 rounded-full flex justify-center items-center min-h-[2rem]">
					<span className="text-white font-bold">{props.stepIndex}</span>
				</div>
				<div className="w-1 bg-white opacity-50 mt-2 h-full border-rad-4"></div>
			</div>
			<div className="flex-col items-center pb-4 pt-">
				<p className="text-white mr-2">{props.stepName}</p>
				<div className="mt-2">{props.stepAction()}</div>
			</div>
		</div>
	);
}
