import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        background-color: ${({ theme }) => theme.palette.background.default.main};
        color: ${({ theme }) => theme.palette.text.primary};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        transition: all 0.50s linear;
    }
`