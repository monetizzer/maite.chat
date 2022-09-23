import type { LinkProps } from "next/link";
import LinkNext from "next/link";
import type { ReactNode } from "react";

import { A } from "./styles";

interface Props extends LinkProps {
	variant?: "button" | "buttonSecondary" | "default" | "withLinkTextColor";
	children: ReactNode;
}

export const Link: FC<Props> = ({
	children,
	variant = "default",
	...props
}) => (
	<LinkNext {...props} passHref>
		<A variant={variant}>{children}</A>
	</LinkNext>
);
