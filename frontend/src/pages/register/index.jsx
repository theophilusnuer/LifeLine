import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from "@mui/material/Button";
import { Grid, OutlinedInput, CircularProgress, MenuItem, Select } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../../components/navbar';

export default function Register() {
    const [showPassword, setShowPassword] = React.useState(false);
    const [loading, setLoading] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const navigate = useNavigate();
    const [error, setError] = useState('');

    const registerUser = async (values, { setSubmitting, resetForm }) => {
        try {
            setLoading(true);
            console.log("Submitting values:", values); // Debug log
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });

            console.log("Response status:", response.status); // Debug log

            if (response.ok) {
                toast.success('User registered successfully');
                resetForm();
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } else if (response.status === 409) {
                setError('User already exists.');
                toast.error('User already exists, try a new email');
            } else {
                toast.error('An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Error registering user:', error);
            toast.error('An error occurred. Please try again.');
        } finally {
            setLoading(false);
            setSubmitting(false);
        }
    };

    return (
        <Grid container spacing={0}>
            <Navbar/>
            <Grid item xs={12}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    borderRadius: '10px',
                    boxShadow: 3,
                    width: 'auto',
                    mx: '300px',
                    marginTop: '70px',
                    marginBottom: '25px',
                    padding: '10px',
                    backgroundColor: 'white'
                }}>
                    <div>
                        <div className="flex flex-col font-bold text-2xl">
                            <img className='w-32 m-auto' src='' alt="" />
                            <p className='text-center'>Register</p>
                        </div>

                        <Formik
                            initialValues={{
                                email: '',
                                fullname: '',
                                password: '',
                                phone: '',
                                dob: '',
                                gender: ''
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string().email('Invalid email').required('Email is required'),
                                fullname: Yup.string().required('Fullname is required'),
                                password: Yup.string().required('Password is required'),
                                phone: Yup.string().required('Phone number is required'),
                                dob: Yup.date().required('Date of Birth is required'),
                                gender: Yup.string().oneOf(['Male', 'Female'], 'Invalid gender').required('Gender is required')
                            })}
                            onSubmit={registerUser}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className='p-8'>
                                        <FormControl style={{ marginBottom: '20px' }} fullWidth sx={{ m: 1, width: 'full' }}>
                                            <InputLabel htmlFor="standard-adornment-amount">E-mail</InputLabel>
                                            <Field
                                                id="standard-adornment-amount"
                                                name="email"
                                                as={OutlinedInput}
                                                label="E-mail"
                                            />
                                            <ErrorMessage name="email" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: '20px' }} fullWidth sx={{ m: 1, width: 'full' }}>
                                            <InputLabel htmlFor="standard-adornment-amount">Fullname</InputLabel>
                                            <Field
                                                id="standard-adornment-amount"
                                                name="fullname"
                                                as={OutlinedInput}
                                                label="Fullname"
                                            />
                                            <ErrorMessage name="fullname" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: '20px' }} fullWidth sx={{ m: 1, width: 'full' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <Field
                                                id="outlined-adornment-password"
                                                type={showPassword ? 'text' : 'password'}
                                                name="password"
                                                as={OutlinedInput}
                                                label="Password"
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                            <ErrorMessage name="password" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: '20px' }} fullWidth sx={{ m: 1, width: 'full' }}>
                                            <InputLabel htmlFor="standard-adornment-amount">Phone Number</InputLabel>
                                            <Field
                                                id="standard-adornment-amount"
                                                name="phone"
                                                as={OutlinedInput}
                                                label="Phone"
                                            />
                                            <ErrorMessage name="phone" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: '20px' }} fullWidth sx={{ m: 1, width: 'full' }}>
                                            <InputLabel htmlFor="standard-adornment-amount"></InputLabel>
                                            <Field
                                                id="standard-adornment-amount"
                                                name="dob"
                                                as={OutlinedInput}
                                                type="date"
                                                label="Date of Birth"
                                                inputProps={{
                                                    placeholder: ''
                                                }}
                                            />
                                            <ErrorMessage name="dob" component="div" />
                                        </FormControl>

                                        <FormControl style={{ marginBottom: '20px' }} fullWidth sx={{ m: 1, width: 'full' }}>
                                            <InputLabel htmlFor="standard-adornment-gender">Gender</InputLabel>
                                            <Field
                                                id="standard-adornment-gender"
                                                name="gender"
                                                as={Select}
                                                label="Gender"
                                            >
                                                <MenuItem value="Male">Male</MenuItem>
                                                <MenuItem value="Female">Female</MenuItem>
                                            </Field>
                                            <ErrorMessage name="gender" component="div" />
                                        </FormControl>

                                        <div className='flex justify-center'>
                                            <Button
                                                type='submit'
                                                disabled={isSubmitting}
                                                style={{ color: 'white', backgroundColor: '#005CB1', marginBottom: '10px' }}
                                                sx={{ width: 'full' }}
                                                variant="contained"
                                            >
                                                {loading ? <CircularProgress size={18} color="inherit" /> : (isSubmitting ? 'Submitting' : 'Register')}
                                            </Button>
                                        </div>

                                        <div className='flex justify-center'>
                                            Already Registered?
                                            <Link to="/login">
                                                <p style={{ marginLeft: '8px', color: '#005CB1', fontWeight: 'bold' }}>Login Here</p>
                                            </Link>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                        <ToastContainer />
                    </div>
                </Box>
            </Grid>
        </Grid>
    );
}
