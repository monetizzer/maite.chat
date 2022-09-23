import { Divider } from "components/Divider";
import type { FCWithLayout } from "types/interfaces/layout";

import { AboutSection } from "./components/AboutSection";
import { BotListWebsitesSection } from "./components/BotListWebsitesSection";
import { MainSection } from "./components/MainSection";
import { StatisticsSection } from "./components/StatisticsSection";
import { Container } from "./styles";

export const Home: FCWithLayout = () => (
	<Container>
		<MainSection />
		<Divider />
		<AboutSection />
		<Divider />
		<StatisticsSection />
		<Divider />
		<BotListWebsitesSection />
	</Container>
);
