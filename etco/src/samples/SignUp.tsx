import React from 'react';
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
        email: data.get('email'),
        password: data.get('password'),
    });
}
const SignIn = () => {
    return (
       )
};

export default SignIn;