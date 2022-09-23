import { Icon } from "components/Icon";
import { Link } from "components/Link";
import { SectionLimiter } from "components/SectionLimiter";
import { SITE } from "configs/site";

import {
	Container,
	Content,
	Header,
	Title,
	Description,
	Resume,
	Count,
	Links,
} from "./styles";

export const MainSection: FC = () => {
	const count = 5;

	return (
		<SectionLimiter>
			<Container>
				<Content>
					<Header>
						<Title>{SITE.name}</Title>
						<Description>
							A sua melhor amiga para compra e venda de conteúdo adulto!
						</Description>
						<Resume>
							Atualmente jogando em <Count>{count}</Count> servidor
							{/* eslint-disable-next-line @typescript-eslint/no-magic-numbers */}
							{count > 1 && "es"}
						</Resume>
					</Header>
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
				</Content>
			</Container>
		</SectionLimiter>
	);
};
