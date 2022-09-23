import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import { STYLES } from "assets/styles";
import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 2rem;
`;

export const DescriptionContainer = styled.header`
	text-align: center;
	text-decoration: underline;
`;

export const Title = styled.h2`
	${FONTS.heading3}
`;

export const Flex = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	gap: 2rem;
	width: 100%;

	.image {
		border-radius: 8px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

export const Items = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 2rem;
	width: 65%;

	@media (max-width: 768px) {
		width: 100%;
	}
`;

export const Item = styled.li`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.8rem;
	width: 100%;
	height: 100%;
	background: ${COLORS.secondary};
	border-radius: 8px;
	padding: 0.8rem;
	box-shadow: ${STYLES.shadow};
`;

export const ItemValue = styled.span`
	color: ${COLORS.vividPrimary};
	${FONTS.heading4}
`;

export const ItemTitle = styled.span`
	font-weight: 500;
`;
