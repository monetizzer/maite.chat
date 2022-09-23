import { Icon } from "components/Icon";
import { Link } from "components/Link";
import { SectionLimiter } from "components/SectionLimiter";
import { navigationItems } from "data/navigationItems";

import {
	Background,
	Container,
	Flex,
	NavigationContainer,
	NavigationTitle,
	NavigationItems,
	NavigationItem,
	FeaturedOnContainer,
	FeaturedOnTitle,
	FeaturedOnItems,
	FeaturedOnItem,
	Copyright,
	Monetizzer,
	Links,
} from "./styles";

export const Footer: FC = () => (
	<Background>
		<SectionLimiter>
			<Container>
				<Flex>
					<NavigationContainer>
						<NavigationTitle>Navegação</NavigationTitle>
						<NavigationItems>
							{navigationItems.map(({ href, text }) => (
								<NavigationItem key={text}>
									<Link href={href} variant="withLinkTextColor">
										{text}
									</Link>
								</NavigationItem>
							))}
						</NavigationItems>
					</NavigationContainer>
					<FeaturedOnContainer>
						<FeaturedOnTitle>Destaque em</FeaturedOnTitle>
						<FeaturedOnItems>
							{/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
							{[0, 1, 2].map(id => (
								<FeaturedOnItem key={id}>
									<Link href="#" variant="withLinkTextColor">
										Discord
									</Link>
								</FeaturedOnItem>
							))}
						</FeaturedOnItems>
					</FeaturedOnContainer>
				</Flex>
				<Flex>
					<Copyright>
						&copy; 2022 <Monetizzer>Monetizzer</Monetizzer>. Todos os direitos
						reservados.
					</Copyright>
					<Links>
						<Link href="#" variant="button">
							<Icon name="plus" />
							Me adicione!
						</Link>
						<Link href="#" variant="button">
							<Icon name="discord" />
							Servidor do Discord
						</Link>
					</Links>
				</Flex>
			</Container>
		</SectionLimiter>
	</Background>
);
