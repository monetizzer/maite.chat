import type { IconsType } from "components/Icon/assets/icons";

interface INavigationItem {
	icon: IconsType;
	text: string;
	href: string;
}

export const navigationItems: Array<INavigationItem> = [
	{
		icon: "home",
		text: "Início",
		href: "/",
	},
	{
		icon: "terminal",
		text: "Comandos",
		href: "#",
	},
];
