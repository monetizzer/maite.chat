import { COLORS } from "assets/colors";
import { SIZES } from "assets/sizes";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 auto;
`;

export const Content = styled.span`
	width: 100%;
	max-width: ${SIZES.pageMaxWidth};
	height: 1px;
	background: ${COLORS.white};
	margin: ${SIZES.verticalPadding} ${SIZES.horizontalPadding};
`;
