import { FormControlLabel, Switch } from '@mui/material';
import styled from "styled-components";

import "./Toggler.css";

const StyledSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 98,
  height: 46,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    color: '#30835A',
    '&.Mui-checked': {
        transform: 'translateX(54px)',
        color: '#43B97F',
        '& .MuiSwitch-thumb:before': {
            backgroundImage: `url('data:image/svg+xml;utf8,<svg width="25" height="14" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.37125 13.4498C2.74868 18.9658 7.33029 23.4536 12.8135 23.7C16.6822 23.8714 20.142 22.0291 22.2179 19.1265C23.0776 17.9376 22.6163 17.145 21.18 17.4128C20.4775 17.5413 19.7541 17.5948 18.9992 17.5627C13.8725 17.3485 9.67876 12.9678 9.65779 7.79447C9.64731 6.40207 9.93038 5.08464 10.4441 3.88503C11.0103 2.55689 10.3288 1.92496 9.01825 2.49263C4.8665 4.28133 2.02527 8.55493 2.37125 13.4498Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>')`,
        },
        '& + .MuiSwitch-track': {
            backgroundColor: theme.palette.mode === 'dark' ? '#181a1c' : '#181a1c', //FFF for light
            opacity: 1,
            border: '1px solid #FFFFFF',
            borderRadius: 40,
        },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 36,
    height: 36,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="26" height="18" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1761 19.9619C16.9398 19.9619 19.9908 16.8449 19.9908 12.9999C19.9908 9.15484 16.9398 6.03784 13.1761 6.03784C9.4124 6.03784 6.36133 9.15484 6.36133 12.9999C6.36133 16.8449 9.4124 19.9619 13.1761 19.9619Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6614 20.6473L20.5251 20.5081M20.5251 5.49159L20.6614 5.35235L20.5251 5.49159ZM5.6899 20.6473L5.82619 20.5081L5.6899 20.6473ZM13.1756 2.37475V2.28906V2.37475ZM13.1756 23.7106V23.6249V23.7106ZM2.77528 12.9998H2.69141H2.77528ZM23.6599 12.9998H23.576H23.6599ZM5.82619 5.49159L5.6899 5.35235L5.82619 5.49159Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
')`,
    },
  },
  '& .MuiSwitch-track': {
    borderRadius: 28 / 2,
    backgroundColor: '#FFF',
    border: '1px solid #30835A',
    opacity: 1,
    transition: theme.transitions.create(['background-color'], {
        duration: 500,
    }),
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('data:image/svg+xml;utf8,<svg width="35" height="35" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.1761 19.9619C16.9398 19.9619 19.9908 16.8449 19.9908 12.9999C19.9908 9.15484 16.9398 6.03784 13.1761 6.03784C9.4124 6.03784 6.36133 9.15484 6.36133 12.9999C6.36133 16.8449 9.4124 19.9619 13.1761 19.9619Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20.6614 20.6473L20.5251 20.5081M20.5251 5.49159L20.6614 5.35235L20.5251 5.49159ZM5.6899 20.6473L5.82619 20.5081L5.6899 20.6473ZM13.1756 2.37475V2.28906V2.37475ZM13.1756 23.7106V23.6249V23.7106ZM2.77528 12.9998H2.69141H2.77528ZM23.6599 12.9998H23.576H23.6599ZM5.82619 5.49159L5.6899 5.35235L5.82619 5.49159Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
')`,
'&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
    },
'&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.37125 13.4498C2.74868 18.9658 7.33029 23.4536 12.8135 23.7C16.6822 23.8714 20.142 22.0291 22.2179 19.1265C23.0776 17.9376 22.6163 17.145 21.18 17.4128C20.4775 17.5413 19.7541 17.5948 18.9992 17.5627C13.8725 17.3485 9.67876 12.9678 9.65779 7.79447C9.64731 6.40207 9.93038 5.08464 10.4441 3.88503C11.0103 2.55689 10.3288 1.92496 9.01825 2.49263C4.8665 4.28133 2.02527 8.55493 2.37125 13.4498Z" stroke="#30835A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>')`,
      right: 12,
    },
  },
}));

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark = storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}

const toggleTheme = (e) => {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
};

const Toggler = () => {
    return (
        <FormControlLabel control={<StyledSwitch sx={{ m: 1 }} defaultChecked />}
      />
    );
    };

export default Toggler;