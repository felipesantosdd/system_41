import { LoginContainer } from "./login.styled";
import * as React from 'react';
import Box from "@mui/system/Box";
import TextField from '@mui/material/TextField';
import { OranienbaumH1 } from "../fonts/Oranienbaum/Oranienbaum.font";
import Button from '@mui/material/Button';
import { useContext } from "react";
import { Context } from "../../provider/provider";

export function LoginForm() {

    const { handleLogin } = useContext(Context);

    function handleSubmit() {

        const data = {
            username: (document.getElementById("username") as HTMLInputElement).value,
            password: (document.getElementById("password") as HTMLInputElement).value,
        }

        handleLogin(data);
    }

    return (
        <LoginContainer style={{ margin: "auto" }}>
            <OranienbaumH1>Login</OranienbaumH1>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& .MuiTextField-root': { width: '30ch' },
                }}
            >
                <TextField label={'User Name'} id="username" />

                <TextField type="password" label={'Password'} id="password" margin="dense" />
            </Box>
            <Button variant="outlined" onClick={() => {
                handleSubmit()
            }}>Conectar</Button>
        </LoginContainer>
    )
}