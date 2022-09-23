import { Icon } from "components/Icon";
import type { IconsType } from "components/Icon/assets/icons";
import { Link } from "components/Link";
import { useRouter } from "next/router";

import { Container, Item, Text } from "./styles";

interface IItem {
	icon: IconsType;
	text: string;
	href: string;
}

interface Props {
	items: Array<IItem>;
}

export const Items: FC<Props> = ({ items }) => {
	const router = useRouter();

	const pathname = router.pathname;

	return (
		<Container>
			{items.map(({ icon, text, href }) => (
				<Item key={text} currentItem={href === pathname}>
					<Link href={href}>
						<Icon name={icon} />
						<Text>{text}</Text>
					</Link>
				</Item>
			))}
		</Container>
	);
};
