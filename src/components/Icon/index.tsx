import type { IconsType } from "./assets/icons";
import { ICONS } from "./assets/icons";

interface Props {
	name: IconsType;
}

export const Icon: FC<Props> = ({ name }) => {
	const IconComponent = ICONS[name];

	return <IconComponent />;
};
