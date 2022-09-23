import { COLORS } from "assets/colors";
import { STYLES } from "assets/styles";
import styled, { css } from "styled-components";

type Variant = "button" | "buttonSecondary" | "default" | "withLinkTextColor";

const buttonVariantStyle = css`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 5.2rem;
	background: ${COLORS.button};
	color: ${COLORS.black};
	font-weight: 500;
	border-radius: 8px;
	padding: 0 3.2rem;
	box-shadow: ${STYLES.shadow};
	transition: filter 0.2s ease-out;

	&:hover,
	&:focus,
	&:active {
		filter: brightness(0.9);
	}

	&:focus-visible {
		box-shadow: ${STYLES.outlineSecondary};
	}
`;

const buttonSecondaryVariantStyle = css`
	${buttonVariantStyle}
	background: ${COLORS.buttonSecondary};
	color: ${COLORS.vividPrimary};
	transition: filter 0.2s ease-out, color 0.2s ease-out;

	&:hover,
	&:focus,
	&:active {
		color: ${COLORS.firstText};
		filter: brightness(0.9);
	}

	&:focus-visible {
		box-shadow: ${STYLES.outlinePrimary};
	}
`;

const withLinkTextColorVariantStyle = css`
	color: ${COLORS.link};
`;

const defaultVariantStyle = css``;

const getVariantStyles = (variant?: Variant) => {
	switch (variant) {
		case "button":
			return buttonVariantStyle;
		case "buttonSecondary":
			return buttonSecondaryVariantStyle;
		case "withLinkTextColor":
			return withLinkTextColorVariantStyle;
		case "default":
		default:
			return defaultVariantStyle;
	}
};

export const A = styled.a<{ variant?: Variant }>`
	${({ variant }) => getVariantStyles(variant)}
`;
