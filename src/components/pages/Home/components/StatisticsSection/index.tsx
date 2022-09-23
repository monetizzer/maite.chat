import { Image } from "components/Image";
import { SectionLimiter } from "components/SectionLimiter";

import {
	Container,
	DescriptionContainer,
	Title,
	Flex,
	Items,
	Item,
	ItemValue,
	ItemTitle,
} from "./styles";

interface IItem {
	title: string;
	value: number | string;
}

const items: Array<IItem> = [
	{
		title: "Servidores do Discord",
		value: 5,
	},
	{
		title: "Canais do Discord",
		value: 10,
	},
	{
		title: "Usuários",
		value: 100,
	},
	{
		title: "Fragmentos",
		value: 1000,
	},
	{
		title: "Comandos Executados Este Ano",
		value: 10000,
	},
];

export const StatisticsSection: FC = () => (
	<SectionLimiter>
		<Container>
			<DescriptionContainer>
				<Title>Estatísticas</Title>
			</DescriptionContainer>
			<Flex>
				<Items>
					{items.map(({ title, value }) => (
						<Item key={title}>
							<ItemValue>{value}</ItemValue>
							<ItemTitle>{title}</ItemTitle>
						</Item>
					))}
				</Items>
				<Image
					src="/maite.jpg"
					width="486px"
					height="606px"
					className="image"
					objectFit="cover"
				/>
			</Flex>
		</Container>
	</SectionLimiter>
);
