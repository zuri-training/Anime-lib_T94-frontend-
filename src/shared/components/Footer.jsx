import { Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

import Button from './Button'
import LogoImg from '../../assets/images/logo.png';

const Container = styled.div`
    width: 100%;
    height: 182px;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    background: #0D0E0F;
    justify-content: space-between;
    padding-right: 80px;
    padding-left: 80px;
`
const Logo = styled.img`
    height: 61px;
`
const InverseButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.palette.text.primary};
  border: ${({ theme }) => `1px solid ${theme.palette.text.primary}`};
  /* border: 1px solid #3da874; */
  width: 216px;
  height: 68px;
  /* margin-left: 36px;
  margin-right: 36px; */
`;

function Footer() {
    return (
        <Container>
            <Logo src={LogoImg} alt="logo" />
            <Typography>Copyright &copy; 2022. Animotion by Zuri Inc</Typography>
            <InverseButton>Contact Us</InverseButton>
        </Container>
    );
}
export default Footer;
