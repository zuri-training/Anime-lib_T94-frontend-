import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.palette.background.default};
        color: ${({ theme }) => theme.palette.text};
        font-family: ${({ theme }) => theme.typography.fontFamily};
        transition: all 0.50s linear;
    }
`