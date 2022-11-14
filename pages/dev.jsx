import Leaderboard from "../components/leaderboard";
import useSWR from "swr";
import Spinner from "../components/spinner";
import { useState } from "react";

const fetcher = url => fetch(url).then(r => r.json());

function Dev() {
	const [pageIndex, setPageIndex] = useState(1);
	const [pageBackDisabled, setpageBackDisabled] = useState(true);
	const [pageForwardDisabled, setpageForwardDisabled] = useState(false);
	const [filterType, setFilterType] = useState(0);

	let filters = [];

	const { data, error } = useSWR(
		`https://api.guildsaber.com/leaderboards/map/by-hash/C4CCC41A43BB15F252B025F03BCE6F9C1DBBDBEB/9/Standard?guild-id=1&page=${pageIndex}`,
		fetcher
	);

	if (!data) {
		return <Spinner />;
	}
	if (error) {
		return <h1>Oh no, the request failed! Please check your internet</h1>;
	}

	function ButtonHandler(data) {
		setFilterType(data.target.id);
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

	data.Leaderboards[0].PointsData.map((type, index) => {
		filters.push({
			disabled: false,
			name: type.PointsName,
			onClick: ButtonHandler,
			index: index,
		});
		return;
	});

	return (
		<Leaderboard
			type={filterType}
			entries={data}
			buttons={filters}
			pageBack={{
				pageBackFunction: PageBack,
				disabled: pageBackDisabled,
			}}
			pageForward={{
				pageForwardFunction: PageForward,
				disabled: pageForwardDisabled,
			}}
		/>
	);
}

export default Dev;
