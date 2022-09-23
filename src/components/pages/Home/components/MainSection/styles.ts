import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	height: calc(86vh - 6.4rem);

	@media (max-width: 768px) {
		align-items: center;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 2rem;
	width: 58vw;
	text-align: right;

	@media (max-width: 768px) {
		align-items: center;
		width: unset;
		text-align: center;
	}
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	justify-content: center;
	gap: 1rem;

	@media (max-width: 768px) {
		align-items: center;
	}
`;

export const Title = styled.h1`
	${FONTS.heading1}
`;

export const Description = styled.p`
	${FONTS.heading3}
	font-weight: normal;
`;

export const Resume = styled.b`
	${FONTS.heading3}
`;

export const Count = styled.span`
	color: ${COLORS.vividPrimary};
`;

export const Links = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
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
