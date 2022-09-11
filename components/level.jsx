function Level(props) {
	let name = props.UseName ? props.Name : `Lvl ${props.LevelNumber}`;

	return (
		<div className={props.className}>
			<p>{name}</p>
		</div>
	);
}

export default Level;
