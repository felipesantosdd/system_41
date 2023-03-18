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
import { NewContractType, ProductInContractType } from '../../interfaces/interfaces';
import { ErrorAlert } from '../alert/errorAlert';

export default function NewContract() {

    const { handleNewContract, carr } = useContext(Context)

    const productsid: ProductInContractType[] = []
    carr?.map((product) => productsid.push({ id: product.id }))

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    function handleSubmit() {
        console.log(carr)
        const productsid: ProductInContractType[] = []
        carr?.map((product) => productsid.push({ id: product.id }))

        const data: NewContractType = {
            client_id: 'a548b7e7-4fd0-4cac-ae77-d0fd2a1149ba',
            contract_number: (document.getElementById("contract_number") as HTMLInputElement).value,
            removal_date: (document.getElementById("removal_date") as HTMLInputElement).value,
            return_date: (document.getElementById("return_date") as HTMLInputElement).value,
            status: 'Active',
            products: productsid

        }

        if (data.products.length <= 0) {
            ErrorAlert("Carrinho sem produtos")
        }

        handleNewContract(data)
    }

    return (
        <div>
            <ListItemButton onClick={handleOpen}>
                <ListItemIcon>
                    <img src="https:cdn-icons-png.flaticon.com/512/9586/9586068.png" alt="Novo Produto" style={{ maxHeight: '40px', height: 'auto' }} />
                </ListItemIcon>
                <ListItemText primary="Novo Contrato" />
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
                        <TextField label={'Cliente'} id="name" />

                        <TextField label={'Numero'} id="contract_number" margin="normal" />
                        <TextField type={'date'} helperText={'Remoção dos itens'} id="removal_date" margin="normal" />
                        <TextField type={'date'} helperText={'Retorno dos Itens'} id="return_date" margin="normal" inputProps={{
                            'aria-label': 'weight',
                        }} />

                        <Button variant="outlined" onClick={() => {
                            handleSubmit()
                            setOpen(false)
                        }}>Adicionar</Button>
                        {/* </form> */}
                    </Box>

                </div>


            </Modal>
        </div>
    );
}