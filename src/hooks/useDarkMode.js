import { useContext } from 'react';

import { CustomThemeContext } from '../contexts/CustomThemeProvider';

export const useDarkMode = () => {
    const { theme, setTheme } = useContext(CustomThemeContext);

    return { theme, setTheme };
}
