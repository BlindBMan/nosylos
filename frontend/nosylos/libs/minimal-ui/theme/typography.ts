export function pxToRem(value: number) {
    return `${value / 16}rem`;
};

export function responsiveSpacingFromPx({
    xs,
    sm,
    md,
    lg,
}: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
}) {
    return {
        xs: xs / 8,
        sm: sm / 8,
        md: md / 8,
        lg: lg / 8,
    }
}

export function responsiveFontSizes({
    xs,
    sm,
    md,
    lg,
}: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
}) {
    return {
        "@media (min-width:0px)": {
            fontSize: pxToRem(xs),
        },
        "@media (min-width:600px)": {
            fontSize: pxToRem(sm),
        },
        "@media (min-width:900px)": {
            fontSize: pxToRem(md),
        },
        "@media (min-width:1200px)": {
            fontSize: pxToRem(lg),
        },
    };
};

function responsiveLineHeights({
    xs,
    sm,
    md,
    lg,
}: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
}) {
    return {
        "@media (min-width:0px)": {
            lineHeight: pxToRem(xs),
        },
        "@media (min-width:600px)": {
            lineHeight: pxToRem(sm),
        },
        "@media (min-width:900px)": {
            lineHeight: pxToRem(md),
        },
        "@media (min-width:1200px)": {
            lineHeight: pxToRem(lg),
        },
    };
};

declare module '@mui/material/styles' {
    interface TypographyVariants {
        menuText: React.CSSProperties;
        body1SemiBold: React.CSSProperties;
    }

    interface TypographyVariantsOptions {
        menuText: React.CSSProperties;
        body1SemiBold?: React.CSSProperties;
    }
}

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        menuText: true;
        body1SemiBold: true;
    }
}

const FONT_PRIMARY = "Poppins, sans-serif";

const typography = {
    fontFamily: FONT_PRIMARY,
    fontWeightMedium: 500,
    h1: {
        fontSize: pxToRem(42),
        fontWeight: 500,
        ...responsiveFontSizes({ xs: 28, sm: 42, md: 42, lg: 42 }),
        ...responsiveLineHeights({ xs: 56, sm: 64, md: 80, lg: 104 }),
    },
    h2: {
        fontSize: pxToRem(24),
        fontWeight: 500,
        ...responsiveLineHeights({ xs: 32, sm: 32, md: 36, lg: 36 }),
    },
    menuText: {
        fontFamily: "Poppins, Manrope, sans-serif",
        fontSize: pxToRem(20),
        fontWeight: 500,
        lineHeight: pxToRem(30),
    },
    subtitle1: {
        fontFamily: "Manrope, Poppins, sans-serif",
        fontSize: pxToRem(20),
        fontWeight: 500,
        lineHeight: pxToRem(30),
    },
    subtitle2: {
        fontFamily: "Manrope, Poppins, sans-serif",
        fontSize: pxToRem(18),
        fontWeight: 500,
        lineHeight: pxToRem(28),
    },
    body1: {
        fontFamily: "Manrope, Poppins, sans-serif",
        fontSize: pxToRem(16),
        fontWeight: 500,
        lineHeight: pxToRem(24),
    },
    body1SemiBold: {
        fontFamily: "Manrope, Poppins, sans-serif",
        fontSize: pxToRem(16),
        fontWeight: 600,
        lineHeight: pxToRem(24),
    },
    body2: {
        fontFamily: "Manrope, Poppins, sans-serif",
        fontSize: pxToRem(14),
        lineHeight: pxToRem(20),
    },
    button: {
        fontSize: pxToRem(16),
        fontWeight: 500,
        textTransform: "lowercase",
        lineHeight: pxToRem(24),
        ...responsiveLineHeights({ xs: 24, sm: 24, md: 24, lg: 24 }),
    },
} as const;

export default typography;
