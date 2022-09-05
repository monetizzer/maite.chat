import { PageContainer } from "components/PageContainer";
import type { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export const DefaultLayout: FC<Props> = ({ children }) => (
	<PageContainer>{children}</PageContainer>
);
