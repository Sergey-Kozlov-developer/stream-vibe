import "./Icon.scss";
import classNames from "classnames";
import { Icon as MinistaIcon } from "minista";

export default (props) => {
	const { className, name, hsFill = false } = props;
	return (
		<span className={classNames(className, "icon")}>
			<MinistaIcon
				iconId={name}
				// fill={hsFill ? 'currentColor' : 'none'}
				// stroke={hsFill ? 'none' : 'currentColor'}
				fill={hsFill ? "none" : "currentColor"}
				stroke={hsFill ? "currentColor" : "none"}
			/>
		</span>
	);
};
