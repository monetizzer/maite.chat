import { AiOutlineClose } from "react-icons/ai";
import { FaHome, FaTerminal, FaDiscord, FaPlus, FaBars } from "react-icons/fa";

export const ICONS = {
	home: FaHome,
	terminal: FaTerminal,
	discord: FaDiscord,
	plus: FaPlus,
	bars: FaBars,
	closeOutline: AiOutlineClose,
};

export type IconsType = keyof typeof ICONS;
