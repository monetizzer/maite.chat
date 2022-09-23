import { SwipeableDrawer } from "@mui/material";
import { Icon } from "components/Icon";
import { Image } from "components/Image";
import { Link } from "components/Link";
import { SITE } from "configs/site";
import { navigationItems } from "data/navigationItems";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { Items } from "./components/Items";
import {
	Container,
	Navbar,
	LogoContainer,
	Name,
	DesktopItems,
	MobileItems,
	Button,
	Sidebar,
	NavigationContainer,
	NavigationTitle,
} from "./styles";

export const Header: FC = () => {
	const [visibility, setVisibility] = useState(false);

	const isDesktop = useMediaQuery({ minWidth: 768 });

	if (isDesktop && visibility) setVisibility(false);

	return (
		<Container>
			<Navbar>
				<LogoContainer>
					<Link href="/" variant="withLinkTextColor">
						<Image src="/mona.png" width="156px" height="156px" />
						<Name>{SITE.name}</Name>
					</Link>
				</LogoContainer>
				<DesktopItems>
					<Items items={navigationItems} />
				</DesktopItems>
				<MobileItems>
					<Button
						onClick={() => setVisibility(true)}
						aria-label="Abrir sidebar"
					>
						<Icon name="bars" />
					</Button>
				</MobileItems>
			</Navbar>
			<SwipeableDrawer
				open={visibility}
				onOpen={() => setVisibility(true)}
				onClose={() => setVisibility(false)}
				disableSwipeToOpen
			>
				<Sidebar>
					<NavigationContainer>
						<NavigationTitle>Navegação</NavigationTitle>
						<Button
							onClick={() => setVisibility(false)}
							aria-label="Fechar sidebar"
						>
							<Icon name="closeOutline" />
						</Button>
					</NavigationContainer>
					<Items items={navigationItems} />
				</Sidebar>
			</SwipeableDrawer>
		</Container>
	);
};
