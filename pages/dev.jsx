import Leaderboard from '../components/leaderboard';

function Dev() {
	function AccButtonHandler() {
		return null;
	}

	function CPPButtonHandler() {
		return null;
	}

	return (
		<Leaderboard
			entries={['player1', 'player2', 'player3', 'player4']}
			buttons={[
				{ disabled: true, name: 'Acc', onClick: AccButtonHandler },
				{ disabled: false, name: 'CPP', onClick: CPPButtonHandler },
			]}
		/>
	);
}

export default Dev;
