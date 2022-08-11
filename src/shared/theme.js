import { createTheme } from '@mui/material/styles';

export const COLORS = {
    green: '#43B97F',
    black: '#181a1c',
    white: '#FFFFFF',
    offWhite: '#FEFEFE',
    violet: '#C280D2',
    orange: '#43B97F'
}

export const FONTS = {
    main: 'Nunito',
}

// theme settings
const palette = {
    light: {
        primary: {
            main: COLORS.green,
        },
        secondary: {
            main: COLORS.offWhite,
        },
        text: {
            main: COLORS.black,
        }
    },
    dark: {
        primary: {
            main: COLORS.green,
        },
        secondary: {
            main: COLORS.black,
        },
        text: {
            main: COLORS.white,
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
            },
            background: {
                default: palette.light.secondary,
                paper: palette.light.secondary,
            },
            text: {
                primary: palette.light.text.main,
            }
            }
        : {
            primary: {
                main: palette.dark.primary.main,
            },
            background: {
                default: palette.dark.secondary,
                paper: palette.dark.secondary,
            },
            text: {
                primary: palette.dark.text.main,
            },
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