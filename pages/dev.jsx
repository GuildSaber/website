import Leaderboard from '../components/leaderboard';
import useSWR from 'swr';
import Spinner from '../components/spinner';
import { useState } from 'react';

const fetcher = (url) => fetch(url).then((r) => r.json());

function Dev() {
	const [pageIndex, setPageIndex] = useState(1);
	const [pageBackDisabled, setpageBackDisabled] = useState(true);
	const [pageForwardDisabled, setpageForwardDisabled] = useState(false);
	const { data, error } = useSWR(
		`https://api.guildsaber.com/maps/leaderboard/by-hash/C4CCC41A43BB15F252B025F03BCE6F9C1DBBDBEB/9?guild-id=1&page=${pageIndex}`,
		fetcher
	);
	if (!data) {
		return <Spinner />;
	}
	if (error) {
		return <h1>Oh no, the request failed! Please check your internet</h1>;
	}

	function AccButtonHandler() {
		alert('man');
		return;
	}

	function CPPButtonHandler() {
		alert('sus');
		return;
	}

	function PageBack() {
		if (pageIndex != 1) {
			setPageIndex(pageIndex - 1);
		} else {
			setpageBackDisabled(true);
		}
		return;
	}

	function PageForward() {
		if (pageIndex != data.Metadata.MaxPage) {
			setPageIndex(pageIndex + 1);
		} else {
			setpageForwardDisabled(true);
		}
		return;
	}

	return (
		<Leaderboard
			entries={data.Leaderboards}
			buttons={[
				{ disabled: true, name: 'Acc', onClick: AccButtonHandler },
				{ disabled: false, name: 'CPP', onClick: CPPButtonHandler },
			]}
			pageBack={{ pageBackFunction: PageBack, disabled: false }}
			pageForward={{ pageForwardFunction: PageForward, disabled: false }}
		/>
	);
}

export default Dev;
