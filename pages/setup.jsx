import Step from '../components/step';

function setup() {
	const stepOne = () => {
		return (
			<button className="btn-primary">
				<p>Invite</p>
				<i className="fas fa-arrow-right"></i>
			</button>
		);
	};

	const stepTwo = () => {
		return <code className="bg-gray-900 rounded-md p-2 mt-2">!getstarted</code>;
	};

	return (
		<div>
			<Step
				stepIndex="1"
				stepName="Invite the discord bot to your server"
				stepAction={stepOne}
			/>
			<Step stepIndex="2" stepName="Run the following Commands" stepAction={stepTwo} />
		</div>
	);
}

export default setup;
