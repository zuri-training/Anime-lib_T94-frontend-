import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link as RouterLink } from 'react-router-dom'
import { Button, Link, Container, Grid, TextField, Box, Typography, CssBaseline, Divider, FormControlLabel, Checkbox } from '@mui/material';



import { RoundedButton } from '../../pages/login/styled/buttons.styles';
// import HomePage from '../home/home.page';





export default function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const configuration = {
            method: "post",
            url: "https://anime-lib-t94.herokuapp.com/login",
            data: {
                email,
                password,
            },
        };
        axios(configuration)
            .then((result) => {
                setLogin(true)
            })
            .catch((error) => {
                error = new Error()
            })
    }

    // const checkUser = () => {
    //     const userCheck = users.find(user => (user.email === data.email && user.password === data.password));
    //     if (userCheck) {
    //         console.log("Login Successful");
    //     } else {
    //         console.log("Wrong password or email");
    //     }
    // }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);
    const [message, setMessage] = useState("")

    useEffect(() => {
        const configuration = {
            method: "get",
            url: "https://anime-lib-t94.herokuapp.com/homepage"
        };
        axios(configuration)
            .then((result) => {
                setMessage(result.data.message)
            })
            .catch((error) => {
                error = new Error()
            })

    }, [])

    return (
        <>
            <Container component="main" maxWidth='lg' sx={{ mt: 0, paddingBottom: .5 }} >
                <CssBaseline />
                <div >
                    <Grid item className="signup-header" color="primary" sx={{ mt: 5, mb: 0, pl: 5 }}>
                        <Typography variant='h4' color={'#43B97F'}> Welcome back,  </Typography>
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
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
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
                                        onChange={(e) => setPassword(e.target.value)}
                                        value={password}
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
                                    control={<Checkbox value="remember_me" color="primary" sx={{ color: '#fff' }} />}
                                    label={<Typography sx={{ fontSize: '12px', ml: -1 }}>Remember me</Typography>}
                                />

                                {/* <Grid item xs={12} display="flex" justifyContent="flex-end"> */}

                                <Link color='#fff' style={{ textDecoration: 'none' }} >Forgot Password</Link>

                            </Grid >

                            <RoundedButton
                                onClick={(e) => handleSubmit(e)}
                                type="submit"
                                variant="contained"
                                sx={{ mt: 1, mb: 2, textTransform: 'capitalize', width: '426px' }}
                                xs={8}


                            >
                                Login
                            </RoundedButton>

                        </Grid>
                    </Box>
                </Box>


                <Grid sx={{ pl: 0 }}>
                    <Grid item xs={12} >
                        <FormControlLabel
                            control={<Checkbox value="remember_me" color="primary" sx={{ color: '#fff' }} />}
                            label={<Typography sx={{ fontSize: '12px', ml: -1 }}>Remember me</Typography>}
                        />
                        <Link to="/forgot-password" color='#fff' style={{ textDecoration: 'none', paddingLeft: 1 }} >Forgot Password</Link>

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
                </Grid >



            </Container>
        </>
    );
}

