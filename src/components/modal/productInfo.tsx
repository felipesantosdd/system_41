import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { OranienbaumH1, OranienbaumH2 } from '../fonts/Oranienbaum/Oranienbaum.font';
import { Context } from '../../provider/provider';
import { useContext } from 'react';
import Button from '@mui/material/Button';
import { ProductsType } from '../../interfaces/interfaces';
import './styles.css';
import { DataGrid } from '@mui/x-data-grid';

export default function InfoProduct(id: any) {


    const { products } = useContext(Context)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const product: ProductsType | undefined = products?.find((p) => p.id === id.id)


    const rows: any = [

    ];

    product?.flows?.map((ele) => {
        const flow = {
            Retirada: ele?.removal_date,
            Retorno: ele?.return_date
        }
        rows.push(flow)
    })


    return (
        <div>
            <Button variant="contained" onClick={handleOpen}>Detalhes</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '20px',
                    alignItems: 'center',
                    borderRadius: '20px'
                }}>
                    <Box
                        sx={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '90vw',
                            height: '100vh',
                            display: 'flex',
                            flexWrap: 'wrap',
                            flexDirection: 'row',
                            overflow: 'scroll',
                            '& .MuiTextField-root': { width: '30ch' },
                        }}
                    >
                        {/* <form > */}
                        <div className='image'>
                            <img className='imageInfo' src={`http://127.0.0.1:8000${product?.image}`} alt={'image'} />
                        </div>
                        <div className='description'>
                            <OranienbaumH2>{product?.name}</OranienbaumH2>

                        </div>
                        <div className='flows'></div>

                    </Box>

                </div>


            </Modal >
        </div >
    );
}