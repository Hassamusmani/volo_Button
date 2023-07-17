import { getTypedKeys } from "../../utils/getTypedKeys";
import downloadSvg from "./assets/download.svg";
import plusSvg from "./assets/plus.svg";

// the name should be descriptive of the icons content, not its usage!
export const icons = {
    plus: plusSvg,
    download: downloadSvg,
};

export const iconNames = getTypedKeys(icons);

export type IconName = keyof typeof icons;
