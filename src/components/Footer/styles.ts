import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import styled from "styled-components";

export const Background = styled.div`
	width: 100%;
	background: ${COLORS.footer};
`;

export const Container = styled.footer`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 4rem;
	padding: 4rem 0;
`;

export const Flex = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
	gap: 1rem;
	width: 100%;
`;

export const NavigationContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const NavigationTitle = styled.span`
	${FONTS.heading4}
`;

export const NavigationItems = styled.ul`
	list-style: unset;
`;

export const NavigationItem = styled.li`
	> a {
		&:hover,
		&:focus,
		&:active {
			text-decoration: underline;
		}
	}
`;

export const FeaturedOnContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const FeaturedOnTitle = styled.span`
	${FONTS.heading4}
`;

export const FeaturedOnItems = styled.ul`
	list-style: unset;
`;

export const FeaturedOnItem = styled.li`
	> a {
		&:hover,
		&:focus,
		&:active {
			text-decoration: underline;
		}
	}
`;

export const Copyright = styled.span`
	color: ${COLORS.secondText};
	text-align: center;
`;

export const Monetizzer = styled.span`
	color: ${COLORS.vividPrimary};
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;

	> a {
		gap: 1rem;

		> svg {
			width: 2.4rem;
			height: 2.4rem;
		}
	}

	@media (max-width: 768px) {
		flex-direction: column;
		width: 100%;

		> a {
			width: 100%;
		}
	}
`;
