import { Image } from "components/Image";
import { Link } from "components/Link";
import { SectionLimiter } from "components/SectionLimiter";

import {
	Container,
	DescriptionContainer,
	Title,
	Flex,
	Items,
	Item,
	Links,
} from "./styles";

export const BotListWebsitesSection: FC = () => (
	<SectionLimiter>
		<Container>
			<DescriptionContainer>
				<Title>
					Estou listado em uma grande variedade de sites de lista de bots
				</Title>
			</DescriptionContainer>
			<Flex>
				<Items>
					{/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
					{[0, 1, 3, 4, 5].map(id => (
						<Item key={id}>
							<Link href="#" aria-label="mona">
								<Image
									src="/mona.png"
									width="300px"
									height="150px"
									className="image"
									objectFit="cover"
								/>
							</Link>
						</Item>
					))}
				</Items>
			</Flex>
			<Links>
				<Items>
					{/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
					{[0, 1, 2].map(id => (
						<Item key={id}>
							<Link href="#" variant="buttonSecondary">
								Discord
							</Link>
						</Item>
					))}
				</Items>
			</Links>
		</Container>
	</SectionLimiter>
);
