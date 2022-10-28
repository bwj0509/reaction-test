import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ReactComponent as GoldMedal } from "../svg/goldMedal.svg";
import { ReactComponent as SilverMedal } from "../svg/silverMedal.svg";
import { ReactComponent as BronzeMedal } from "../svg/bronzeMedal.svg";


const ContainerDiv = styled.div`
    width: 70vw;
    max-width: 1000px;
    margin: auto;
    background-color: yellow;
`

function Result() {

    const state = useSelector((state) => (state.score.avgRank))
    const avgRank = state.sort((a, b) => a[0] - b[0])
    console.log(avgRank)
    return (
        <ContainerDiv>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                                <TableCell align='center' style={{fontWeight:'bold'}}>RANK</TableCell>
                                <TableCell align='center' style={{fontWeight:'bold'}}>Name</TableCell>
                                <TableCell align='center' style={{fontWeight:'bold'}}>Avg time(ms)</TableCell>
                                <TableCell align='center' style={{fontWeight:'bold'}}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                    {avgRank.map((item, index)=>(
                        <TableRow>
                            {(index+1)===1&&<TableCell component="th" scope="row" align='center'><GoldMedal width="30px" /></TableCell>}
                            {(index+1)===2&&<TableCell component="th" scope="row" align='center'><SilverMedal width="30px" /></TableCell>}
                            {(index+1)===3&&<TableCell component="th" scope="row" align='center'><BronzeMedal width="30px" /></TableCell>}
                            {(index+1)>3&&<TableCell component="th" scope="row" align='center'>{index+1}</TableCell>}
                            <TableCell align='center' >{item[1]}</TableCell>
                            <TableCell align='center' >{item[0]}</TableCell>
                            <TableCell align='center' >2022-10-27</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>


            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                                <TableCell align='center' style={{fontWeight:'bold'}}>RANK</TableCell>
                                <TableCell align='center' style={{fontWeight:'bold'}}>Name</TableCell>
                                <TableCell align='center' style={{fontWeight:'bold'}}>Avg time(ms)</TableCell>
                                <TableCell align='center' style={{fontWeight:'bold'}}>Date</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                    {avgRank.filter(item => item[0]>300).map((item)=>(
                        <TableRow>
                            <TableCell align='center' >{item[1]}</TableCell>
                            <TableCell align='center' >{item[0]}</TableCell>
                            <TableCell align='center' >2022-10-27</TableCell>
                        </TableRow>
                    ))
                        
                    }   
                    </TableBody>
                </Table>
            </TableContainer>
        </ContainerDiv>

    );
}




export default Result;