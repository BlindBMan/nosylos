import { merge } from "lodash";
import type { Theme } from "@mui/material/styles";

export default function componentsOverrides(theme: Theme) {
    return theme.components;
};
