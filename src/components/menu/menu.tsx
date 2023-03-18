import * as React from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useContext } from "react";
import { Context } from '../../provider/provider';
import NewProduct from '../formsModal/newProduct';
import NewContract from '../formsModal/newContract';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function SwipeableTemporaryDrawer() {

    const navigate = useNavigate()

    const { buttons, logout, handleGetClients, handleGetProducts
    } = useContext(Context);

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });


    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                if (
                    event &&
                    event.type === 'keydown' &&
                    ((event as React.KeyboardEvent).key === 'Tab' ||
                        (event as React.KeyboardEvent).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, backgroundColor: '#9FA8DA', height: '100vw' }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/dashboard")
                        handleGetProducts()
                    }}>
                        <ListItemIcon>
                            <img src='https:cdn-icons-png.flaticon.com/512/3074/3074076.png' style={{ maxHeight: '40px', height: 'auto' }} />
                        </ListItemIcon>
                        <ListItemText primary="Produtos" />
                    </ListItemButton>
                </ListItem>
                <NewProduct />
                <NewContract />

                <ListItem disablePadding>
                    <ListItemButton onClick={() => {
                        navigate("/clients")
                        handleGetClients()
                    }}>
                        <ListItemIcon>
                            <img src='https:cdn-icons-png.flaticon.com/512/2620/2620247.png' style={{ maxHeight: '40px', height: 'auto' }} />
                        </ListItemIcon>
                        <ListItemText primary="Clientes" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton onClick={() => { logout() }}>
                        <ListItemIcon>
                            <LogoutIcon fontSize='large' />
                        </ListItemIcon>
                        <ListItemText primary="Sair" />
                    </ListItemButton>
                </ListItem>

            </List>

        </Box >
    );

    return (
        <div>
            {(['left'] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{<MenuIcon sx={{ backgroundColor: '#232F47' }} fontSize="large" />}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>
            ))}
        </div>
    );
}