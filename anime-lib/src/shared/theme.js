import { createTheme } from '@mui/material/styles';

export const COLORS = {
  green: '#43B97F',
  black: '#181a1c',
  white: '#FFFFFF',
  violet: '#C280D2',
  orange: '#43B97F'
}

export const FONTS = {
  main: 'Nunito',
}

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