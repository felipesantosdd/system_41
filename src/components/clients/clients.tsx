import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Context } from '../../provider/provider';
import { useContext, useEffect } from 'react'

const useRowStyles = makeStyles({
    root: {
        '& > *': {
            borderBottom: 'unset',
        },
    },
});

function createData(
    name: string,
    cpf: string,
    rg: string,
    whatsApp: string,
    id: string,
    contracts: any
) {
    return {
        name,
        cpf,
        rg,
        whatsApp,
        id,
        contracts,
    };
}

function Row(props: { row: any }) {

    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const classes = useRowStyles();

    return (
        <React.Fragment>
            <TableRow className={classes.root} style={{ backgroundColor: 'rgba( 0, 0, 0, 0.6 )', }}>
                <TableCell style={{ color: '#ffffff', }}>
                    {row.contracts.length > 0 ? (
                        <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    ) : null}
                </TableCell>
                <TableCell style={{ color: '#ffffff', }} component="th" scope="row" align="center">
                    {row.name}
                </TableCell>
                <TableCell style={{ color: '#ffffff', }} align="center">{row.cpf}</TableCell>
                <TableCell style={{ color: '#ffffff', }} align="center">{row.rg}</TableCell>
                <TableCell style={{ color: '#ffffff', }} align="center">{row.whatsApp}</TableCell>
                <TableCell style={{ color: '#ffffff', }} align="center">{row.id}</TableCell>
            </TableRow>
            <TableRow style={{ backgroundColor: 'rgba( 0, 0, 0, 0.6 )', }}>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0, }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box margin={1}>
                            <Typography style={{ textAlign: "center", color: '#ffffff', }} variant="h6" gutterBottom component="div">
                                Contratos
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: '#ffffff', }} align="center">Numero</TableCell>
                                        <TableCell style={{ color: '#ffffff', }} align="center">Remoção</TableCell>
                                        <TableCell style={{ color: '#ffffff', }} align="center">Devolução</TableCell>
                                        <TableCell style={{ color: '#ffffff', }} align="center">Status</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.contracts.map((contractsRow: any) => (
                                        <TableRow key={contractsRow.contract_number}>
                                            <TableCell style={{ color: '#ffffff', }} align="center">
                                                {contractsRow.contract_number}
                                            </TableCell>
                                            <TableCell style={{ color: '#ffffff', }} align="center">
                                                {contractsRow.removal_date}
                                            </TableCell>
                                            <TableCell style={{ color: '#ffffff', }} align="center">{contractsRow.return_date}</TableCell>
                                            <TableCell style={{ color: '#ffffff', }} align="center">
                                                {contractsRow.status}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}


export default function ClientsTables() {

    const { clients } = useContext(Context)


    const rows: any = [];

    clients?.map((client) => {
        rows.push(createData(client.name, client.cpf, client.rg, client.whatsApp, client.id, client.contracts))
    })

    console.log(clients[0])

    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow style={{ backgroundColor: 'rgba( 0, 0, 0, 0.6 )', }}>
                        <TableCell />
                        <TableCell style={{ color: '#ffffff', }} align="center">Nome</TableCell>
                        <TableCell style={{ color: '#ffffff', }} align="center">CPF</TableCell>
                        <TableCell style={{ color: '#ffffff', }} align="center">RG</TableCell>
                        <TableCell style={{ color: '#ffffff', }} align="center">WhatsApp</TableCell>
                        <TableCell style={{ color: '#ffffff', }} align="center">ID</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row: any) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
