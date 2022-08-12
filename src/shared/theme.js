import { createTheme } from '@mui/material/styles';

export const COLORS = {
    green: '#43B97F',
    darkGreen: '#1C4E35',
    green700: '#30835A',
    black: '#181a1c',
    white: '#FFFFFF',
    offWhite: '#FEFEFE',
    violet: '#C280D2',
    orange: '#CA6635',
    yellow: '#FFCC4A',
}

export const FONTS = {
    main: 'Nunito',
}

// theme settings
const palette = {
    light: {
        primary: {
            main: COLORS.green,
            dark: COLORS.darkGreen,
            contrastText: COLORS.darkGreen,
        },
        secondary: {
            main: COLORS.offWhite,
        },
        text: {
            primary: COLORS.black,
        },
    },
    dark: {
        primary: {
            main: COLORS.green,
            dark: COLORS.green,
            contrastText: COLORS.black,
        },
        secondary: {
            main: COLORS.black,
        },
        text: {
            primary: COLORS.white,
            secondary: COLORS.yellow,
        }
    },
};

export const getDesignTokens = (mode) => ({
    palette: {
        mode,
        ...(mode === 'light'
        ? {
            primary: {
                main: palette.light.primary.main,
                dark: palette.light.primary.dark,
                contrastText: palette.light.primary.contrastText,
            },
            background: {
                default: palette.light.secondary,
                paper: palette.light.secondary,
            },
            text: {
                primary: palette.light.text.primary,
            },
            common: {
                black: COLORS.black,
                white: COLORS.white,
            }
        }
        : {
            primary: {
                main: palette.dark.primary.main,
                dark: palette.dark.primary.dark,
                contrastText: palette.dark.primary.contrastText,
            },
            background: {
                default: palette.dark.secondary,
                paper: palette.dark.secondary,
            },
            text: {
                primary: palette.dark.text.primary,
                secondary: palette.dark.text.secondary,
            },
            common: {
                black: COLORS.black,
                white: COLORS.white,
            }
        }),
    },
    typography: {
        fontFamily: FONTS.main,
        button: {
            textTransform: 'none'
        }
    },
});

export const getThemedComponents = (mode) => ({
    components: {
        ...(mode === 'light'
        ? {
            MuiAppBar: {
                styleOverrides: {
                colorPrimary: {
                    backgroundColor: COLORS.offWhite,
                },
                },
            },
            }
        : {
            MuiAppBar: {
                styleOverrides: {
                colorPrimary: {
                    backgroundColor: COLORS.black,
                },
                },
            },
            }),
    },
});


const theme = createTheme({
    palette: {
        primary: {
            main: '#43B97F'
        },
    },
    bg: {
        main: '#000',
    },
    text: {
        main: '#FFF',
    },
    typography: {
        fontFamily: 'Nunito',
        button: {
            textTransform: 'none'
        }
    },
});

export default theme;