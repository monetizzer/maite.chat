import { COLORS } from "assets/colors";
import styled from "styled-components";

export const Container = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

export const Item = styled.li<{ currentItem: boolean }>`
	width: 100%;

	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.8rem;
		width: 100%;
		height: 6.4rem;
		background: ${({ currentItem }) =>
			currentItem ? COLORS.primary : "transparent"};
		color: ${({ currentItem }) =>
			currentItem ? COLORS.link : COLORS.firstText};
		padding: 0 1.6rem;
		transition: filter 0.2s ease-out, background-color 0.2s ease-out;
		filter: ${({ currentItem }) => (currentItem ? "brightness(0.9)" : "")};

		&:hover,
		&:focus,
		&:active {
			background: ${COLORS.primary};
			color: ${COLORS.link};
			filter: ${({ currentItem }) =>
				currentItem ? "brightness(1)" : "brightness(0.9)"};
		}

		> svg {
			width: 2.4rem;
			height: 2.4rem;
			color: inherit;
		}

		@media (max-width: 768px) {
			justify-content: start;
			height: 5.2rem;
			padding: 0 3.2rem;
		}
	}
`;

export const Text = styled.span`
	color: inherit;
`;
