import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import Button from './Button'
import LogoImg from '../../assets/images/logo.png';
const Container = styled.div`
    width: 100%;
    height: 182px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #0D0E0F;
`
const Logo = styled.img`
  height: 61px;
`

function Footer() {
    return (
        <Container>
            <Logo src={LogoImg} alt="logo" />
            <Typography>Copyright &copy; 2022. Animotion by Zuri Inc</Typography>
            <Button>Contact Us</Button>
        </Container>
    );
}
export default Footer;
