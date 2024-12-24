import { alpha } from "@mui/material/styles";

declare module "@mui/material/styles/createPalette" {
    interface SimplePaletteColorOptions {
        extraLight?: string;
        lighter?: string;
        darker?: string;
      }
      interface PaletteColor {
        extraLight?: string;
        lighter?: string;
        darker?: string;
      }
};

declare module "@mui/material" {
    interface Color {
        500_8: string;
        500_12: string;
        500_16: string;
        500_24: string;
        500_32: string;
        500_48: string;
        500_56: string;
        500_80: string;
    }
};

const PRIMARY = {
    extraLight: "#EDF2FB",
    lighter: "#98B9F2",
    light: "#6F9CEB",
    main: "#5465FF",
    dark: "#2A52BE",
    darker: "#1E22AA",
};

const SECONDARY = {
    light: "#FFAD69",
    main: "#C6C8EE",
};

const SUCCESS = {
    light: "#8ed87e",
    main: "#7cd26b",
    dark: "#68cc58",
};

const WARNING = {
    light: "#edd586",
    main: "#e9cf75",
    dark: "#e5c963",
}

const ERROR = {
    light: "#db7f87",
    main: "#d46c77",
    dark: "#cc5868",
};

const TYPOGRAPHY = {
    primary: "#F7F8F8",
    secondary: "#d0d6e0",
    tertiary: "#8a8f98",
    quaternary: "#62666d",
    quinary: "#27292C",
};

const GRAPH = {
    line1: "#63BAE5",
    low_risk: "#68cc58",
    medium_risk: "#E5C963",
    high_risk: "#CC5868",
}

const SURFACE = {
    400: "#E6E1EA",
    500: "#717272",
    600: "#575858",
    700: "#3f4040",
    800: "#282929",
    900: "#121414",
    500_8: alpha("#717272", 0.08),
    500_12: alpha("#717272", 0.12),
    500_16: alpha("#717272", 0.16),
    500_24: alpha("#717272", 0.24),
    500_32: alpha("#717272", 0.32),
    500_48: alpha("#717272", 0.48),
    500_56: alpha("#717272", 0.56),
    500_80: alpha("#717272", 0.8),
};

const BASE_PALETTE = {
    common: { black: "#121414", white: "#F7F8F8" },
    primary: { ...PRIMARY, contrastText: TYPOGRAPHY["secondary"] },
    secondary: { ...SECONDARY, contrastText: TYPOGRAPHY["secondary"] },
    success: { ...SUCCESS, contrastText: TYPOGRAPHY["secondary"] },
    warning: { ...WARNING, contrastText: TYPOGRAPHY["secondary"] },
    error: { ...ERROR, contrastText: TYPOGRAPHY["secondary"] },
    typography: { ...TYPOGRAPHY, contrastText: TYPOGRAPHY["primary"] },
    graph: { ...GRAPH, contrastText: TYPOGRAPHY["secondary"] },
    SURFACE: SURFACE,
    divider: SURFACE[500_24],
    action: {
        hover: SURFACE[500_8],
        selected: SURFACE[500_16],
        disabled: SURFACE[500_80],
        disabledBackground: SURFACE[500_24],
        focus: SURFACE[500_24],
        hoverOpacity: 0.08,
        disabledOpacity: 0.48,
    },
};

const palette = {
    dark: {
        ...BASE_PALETTE,
        text: { primary: SURFACE[800], secondary: SURFACE[600], disabled: SURFACE[500] },
        background: { paper: SURFACE[800], default: SURFACE[800] },
        action: { active: SURFACE[600], ...BASE_PALETTE.action },
    }
};

export default palette;
