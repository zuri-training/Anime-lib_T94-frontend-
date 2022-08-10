import { createTheme } from '@mui/material/styles';
import '@fontsource/nunito/500.css'

// const Colors = {
//     primary: "#43B97F",
//     secondary: "#FFCC4A",
//     warning: "#ffcc4a",
//     text: "#fff",
//     green: "#43B97F"


// }


const theme = createTheme({
    palette: {
        primary: {
            main: '#43B97F',
        },
        secondary: {
            main: '#ffcc4a'
        },
        background: {
            default: "#000"
        },
        text: {
            primary: "#ffffff"
        },

    },
    typography: {
        fontFamily: [
            "Nunito",
            "sans serif",

        ].join(',')
    },
    input: {
        color: 'white'
    }
});




export default theme;