import { useState, useEffect } from "react";
import Leaderboard from "../../../components/leaderboard";

function LeaderboardPage(props) {
	const [pageIndex, setPageIndex] = useState(1);
	const [pageBackDisabled, setpageBackDisabled] = useState(true);
	const [pageForwardDisabled, setpageForwardDisabled] = useState(false);
	const [filterType, setFilterType] = useState(0);

	let filters = [];

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
		if (pageIndex != props.leaderboardData.Metadata.MaxPage) {
			setPageIndex(pageIndex + 1);
		} else {
			setpageForwardDisabled(true);
		}
		return;
	}

	props.leaderboardData.Leaderboards[0]?.PointsData.map((type, index) => {
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
			entries={props.leaderboardData.Leaderboards}
			mapInfo={props.mapData}
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

export async function getServerSideProps(context) {
	let ID = context.params.rankedDifficultyId;
	let leaderboardData = await (
		await fetch(
			`https://api.guildsaber.com/leaderboards/map/by-id/${ID}?page=1`
		)
	).json();
	let mapData = await (
		await fetch(`https://api.guildsaber.com/rankedmaps/data/by-id/${ID}`)
	).json();

	return {
		props: {
			leaderboardData: leaderboardData,
			mapData: mapData,
		},
	};
}

export default LeaderboardPage;
