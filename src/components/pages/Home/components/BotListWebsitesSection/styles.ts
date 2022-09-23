import { FONTS } from "assets/fonts";
import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2rem;
`;

export const DescriptionContainer = styled.header`
	text-align: center;
	text-decoration: underline;
`;

export const Title = styled.h2`
	${FONTS.heading3};
`;

export const Flex = styled.div`
	> ul > li > a {
		.image {
			border-radius: 8px;
			transition: transform 0.2s ease-out;
		}

		&:hover,
		&:focus,
		&:active {
			.image {
				transform: scale(0.9);
			}
		}

		&:focus-visible {
			outline: 0;
			box-shadow: none;
		}
	}
`;

export const Items = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-around;
	gap: 2rem;
`;

export const Item = styled.li``;

export const Links = styled.div`
	width: 100%;

	> ul > li > a {
		width: calc(37.7rem - 2rem);
		${FONTS["text0.5"]};
		font-weight: 500;
	}
`;
