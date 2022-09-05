import { LayoutWrapper } from "layouts/wrapper";
import type { AppProps } from "next/app";

import { Head } from "./components/Head";
import { GlobalStyle } from "./styles";

export const App: FC<AppProps> = ({ Component, pageProps }) => (
	<>
		<Head />
		<LayoutWrapper>
			<Component {...pageProps} />
		</LayoutWrapper>
		<GlobalStyle />
	</>
);
