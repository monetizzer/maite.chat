import { Footer } from "components/Footer";
import { Header } from "components/Header";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => (
	<>
		<Header />
		{children}
		<Footer />
	</>
);
