import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import styled from "styled-components";

import Button from './Button'
import Toggler from '../../components/Toggler/Toggler'
import DrawerComponent from "./Drawer";
import LogoImg from '../../assets/images/logo.png'
import { useDarkMode } from '../../hooks/useDarkMode';

const Logo = styled.img``

const StyledButton = styled(Button)`
  padding: 16px 48px;
  margin-right: 36px;
  gap: 16px;
`

const InverseButton = styled(Button)`
  background: transparent;
  /* color: #3da874; */
  color: ${({ theme }) => theme.palette.primary.dark};
  border: ${({ theme }) => `1px solid ${theme.palette.primary.dark}`};
  /* border: 1px solid #3da874; */
  width: 164px;
  height: 68px;
  margin-left: 36px;
  margin-right: 36px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #FFF;
`

const InverseLink = styled(StyledLink)`
  color: ${({ theme }) => theme.palette.primary.dark};
`

const AboutLink = styled(StyledLink)`
  margin-right: 115px;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`

function Navbar() {
  const getTheme = useTheme();
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  console.log('theme', theme);
  const isMobile = useMediaQuery(getTheme.breakpoints.down("md"));

  if (!mountedComponent) return <div />

  return (
    <>

      <AppBar position="static" sx={{
        paddingRight: '80px', paddingLeft: '80px', height: '120px',
        justifyContent: 'center'
      }}></AppBar>

      <AppBar position="static" sx={{
        paddingRight: '80px', paddingLeft: '80px', height: '120px',
        justifyContent: 'center', backgroundImage: 'none', boxShadow: 'none'
      }}>

        <CssBaseline />
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Logo src={LogoImg} alt="logo" />
          {isMobile ? (
            <DrawerComponent />
          ) : (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <AboutLink to="/about">
                About Us
              </AboutLink>
              <Toggler theme={theme} toggleTheme={themeToggler} />
              <InverseButton>
                <InverseLink to="/login">
                  Log In
                </InverseLink>
              </InverseButton>
              <StyledButton>
                <StyledLink to="/signup">
                  Sign Up
                </StyledLink>
              </StyledButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>

  );
}
export default Navbar
