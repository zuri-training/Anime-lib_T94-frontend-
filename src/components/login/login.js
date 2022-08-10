import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Button, Link, Container, Grid, TextField, Box, Typography, CssBaseline, GlobalStyles, Divider, FormControlLabel, Checkbox } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import theme from './theme.js';
import myButtons from '../styled/buttons.styles';
import { RoundedButton } from '../styled/buttons.styles';


import '@fontsource/nunito'
const theme = createTheme();

const themeDark = createTheme({
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
            "Nunito, sans serif",

        ].join(',')
    },

    input: {
        color: "blue"
    }
});



export default function Login() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    }


    return (
        <ThemeProvider theme={themeDark} >



            <Container component="main" maxWidth='lg' sx={{ mt: 0, height: 200 }} >
                <CssBaseline />
                <div >
                    <Grid item className="signup-header" color="primary" sx={{ mt: 5, mb: 0, pl: 5 }}>
                        <Typography variant='h4' color={'#43B97F'}> Welcome back, </Typography>
                        <Typography variant='body1' color={'#fff'}> Don't have an account yet?
                            <Link component={RouterLink} to='/signup' color='#ffcc4a' style={{ textDecoration: 'none', paddingLeft: 5 }} >Sign Up</Link></Typography>



                    </Grid>


                </div>
                <Box
                    sx={{
                        width: 512,
                        borderRadius: '15px',
                        marginTop: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >

                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2, borderRadius: '15px' }}>
                        <Grid container spacing={0}>

                            <Grid item xs={12} sx={{ mb: 2, borderRadius: '15px' }}>
                                <Box component="span" sx={{ fontSize: 10 }} >Email</Box>
                                <Box sx={{ backgroundColor: '#fff', borderRadius: '10px' }}>
                                    <TextField
                                        required
                                        fullWidth
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                color: '#000'
                                            }
                                        }}
                                        name="email"
                                        autoComplete="email"
                                        size="small"
                                    /></Box>
                            </Grid>
                            <Grid item xs={12} sx={{ mb: 2, borderRadius: '15px' }}>
                                <Box component="span" sx={{ fontSize: 10 }} >Password</Box>
                                <Box sx={{ backgroundColor: '#fff', borderRadius: '10px', color: '#000' }}>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        sx={{
                                            "& .MuiInputBase-root": {
                                                color: '#000'
                                            }
                                        }}
                                        type="password"
                                        id="password"
                                        autoComplete="new-password"
                                        size="small"

                                    />
                                </Box>
                            </Grid>

                        </Grid>
                        <Grid sx={{ pl: 0 }}>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="rememberme" color="primary" sx={{ color: '#fff' }} />}
                                    label={<Typography sx={{ fontSize: '12px', ml: -1 }}>Remember me</Typography>}
                                />
                                {/* <Grid item xs={12} display="flex" justifyContent="flex-end"> */}

                                <Link color='#fff' style={{ textDecoration: 'none' }} >Forgot Password</Link>


                            </Grid>

                            <RoundedButton

                                type="submit"
                                variant="contained"
                                sx={{ mt: 1, mb: 2, textTransform: 'capitalize', width: '426px' }}
                                xs={8}

                            >
                                Login
                            </RoundedButton>



                            <Divider sx={{
                                width: '100%', "&::before, &::after": {
                                    borderColor: '#fff', borderBottomWidth: 42
                                }, mt: 2
                            }}>Or</Divider>
                            <Button variant="outlined" fullWidth sx={{ width: '426px', mt: 5, mb: 2, textTransform: 'capitalize' }}>
                                Continue with Google</Button>
                        </Grid>
                    </Box>
                </Box>
            </Container >
        </ThemeProvider >
    )
}

