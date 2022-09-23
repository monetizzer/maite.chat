import { SIZES } from "assets/sizes";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 ${SIZES.horizontalPadding};
`;

export const Content = styled.div`
	width: 100%;
	max-width: ${SIZES.pageMaxWidth};
`;
