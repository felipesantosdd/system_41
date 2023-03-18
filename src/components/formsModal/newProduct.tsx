import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import { OranienbaumH1 } from '../fonts/Oranienbaum/Oranienbaum.font';
import { Context } from '../../provider/provider';
import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { ErrorAlert } from '../alert/errorAlert';

export default function NewProduct() {

    const { handleAddProducts } = useContext(Context)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [img, setImg]: any | null = React.useState(null);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [files, setFiles]: any | null = React.useState(null);

    function handleSubmit() {
        const data = {
            name: (document.getElementById("name") as HTMLInputElement).value,
            type: (document.getElementById("type") as HTMLInputElement).value,
            color: (document.getElementById("color") as HTMLInputElement).value,
            value: Number((document.getElementById("value") as HTMLInputElement).value),
            image: img
        }

        if (data.image === undefined || data.image === null) {
            ErrorAlert("Adicione a imagem para o produto")
        }

        handleAddProducts(data)
        handleClose()
    }

    return (
        <div>
            <ListItemButton onClick={handleOpen}>
                <ListItemIcon>
                    <img src="https:cdn-icons-png.flaticon.com/512/4014/4014801.png" alt="Novo Produto" style={{ maxHeight: '40px', height: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Novo Produto" />
            </ListItemButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#8AB7C5',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    alignItems: 'center',
                    borderRadius: '20px'
                }}>
                    <OranienbaumH1>Novo Produto</OranienbaumH1>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            '& .MuiTextField-root': { width: '30ch' },
                        }}
                    >
                        {/* <form > */}
                        <TextField label={'Codigo'} id="name" />

                        <TextField label={'Categoria'} id="type" margin="normal" />
                        <TextField label={'Cor'} id="color" margin="normal" />

                        <TextField type="number" label={'valor'} id="value" margin="normal" />
                        <IconButton color="primary" aria-label="upload picture" component="label" id="image">
                            <input
                                formEncType="multipart/form-data"
                                hidden
                                accept="image/*"
                                type="file"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    setImg(event.target.files ? event.target.files[0] : null);
                                    setFiles(event.target.files);
                                }}
                            />
                            <PhotoCamera />
                        </IconButton>
                        <Button variant="outlined" onClick={() => {
                            handleSubmit()
                        }}>Adicionar</Button>
                        {/* </form> */}
                    </Box>

                </div>


            </Modal>
        </div>
    );
}