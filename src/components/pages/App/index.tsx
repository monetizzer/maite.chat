import { LayoutWrapper } from "layouts/wrapper";
import type { AppProps } from "next/app";

import { Head } from "./components/Head";
import { GlobalStyle } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App: FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<LayoutWrapper>
			<Component {...pageProps} />
		</LayoutWrapper>
		<GlobalStyle />
	</>
);
