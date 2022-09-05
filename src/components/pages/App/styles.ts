import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import { STYLES } from "assets/styles";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;

		&:focus-visible {
			outline: ${STYLES.alternativeOutline};
		 	box-shadow: ${STYLES.outlinePrimary};
		}
	}

	html, body {
		min-height: 100%;
	}

	html {
		font-size: 62.5%;
		scroll-behavior: smooth;
	}

	body {
		background: ${COLORS.background};
		color: ${COLORS.firstText};
		font-family: 'Roboto', sans-serif;
		${FONTS.text1}
	}

	a {
		color: ${COLORS.firstText};
		text-decoration: none;
	}

	button, input, textarea {
		background: transparent;
		color: ${COLORS.firstText};
		${FONTS.text1}
		border: transparent;
	}

	ul {
		list-style: none;
	}

	@media (max-width: 768px) {
		html {
			font-size: 60%;
		}
	}

	@media (max-width: 640px) {
		html {
			font-size: 57.5%;
		}
	}

	@media (max-width: 475px) {
		html {
			font-size: 55%;
		}
	}

	@media (max-width: 375px) {
		html {
			font-size: 52.5%;
		}
	}
`;
