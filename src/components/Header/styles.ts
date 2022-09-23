import { COLORS } from "assets/colors";
import { FONTS } from "assets/fonts";
import styled from "styled-components";

export const Container = styled.header`
	position: sticky;
	top: 0;
	height: 6.4rem;
	background: ${COLORS.secondary};
	box-shadow: 0 0 15px ${COLORS.shadow};
	z-index: 99;
`;
export const Navbar = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const LogoContainer = styled.div`
	> a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		height: 6.4rem;
		padding: 0 1.2rem;

		&:hover,
		&:focus,
		&:active {
			> span:last-child {
				text-decoration: underline;
			}
		}

		> span:first-child {
			width: 5.2rem !important;
			height: 5.2rem !important;

			> img {
				border-radius: 50%;
			}
		}
	}
`;

export const Name = styled.span`
	color: ${COLORS.vividPrimary};
	${FONTS.heading3}
`;

export const DesktopItems = styled.div`
	display: block;

	@media (max-width: 768px) {
		display: none;
	}
`;

export const MobileItems = styled.div`
	display: none;

	@media (max-width: 768px) {
		display: block;
	}
`;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.2rem;
	width: 6.4rem;
	height: 6.4rem;
	transition: color 0.2s ease-out;
	cursor: pointer;

	&:hover,
	&:focus {
		color: ${COLORS.vividPrimary};
	}

	> svg {
		width: 2.8rem;
		height: 2.8rem;
		color: inherit;
	}
`;

export const Sidebar = styled.nav``;

export const NavigationContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.8rem 3.2rem;

	> button {
		width: 5.2rem;
		height: 5.2rem;
	}
`;

export const NavigationTitle = styled.span`
	${FONTS.heading4}
	text-decoration: underline;
`;
