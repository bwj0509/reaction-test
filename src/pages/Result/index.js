import React from "react";
import { useSelector } from "react-redux";
import * as S from "pages/Result/indexStyle";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ReactComponent as GoldMedal } from "asset/svg/goldMedal.svg";
import { ReactComponent as SilverMedal } from "asset/svg/silverMedal.svg";
import { ReactComponent as BronzeMedal } from "asset/svg/bronzeMedal.svg";

function Result() {
  const state = useSelector((state) => state.score.avgRank);
  const avgRank = state.sort((a, b) => a[0] - b[0]);
  return (
    <S.ContainerDiv>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">RANK</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Avg time(ms)</TableCell>
              <TableCell align="center">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {avgRank.map((item, index) => (
              <TableRow key={index}>
                {index + 1 === 1 && (
                  <TableCell component="th" scope="row" align="center">
                    <GoldMedal width="30px" />
                  </TableCell>
                )}
                {index + 1 === 2 && (
                  <TableCell component="th" scope="row" align="center">
                    <SilverMedal width="30px" />
                  </TableCell>
                )}
                {index + 1 === 3 && (
                  <TableCell component="th" scope="row" align="center">
                    <BronzeMedal width="30px" />
                  </TableCell>
                )}
                {index + 1 > 3 && (
                  <TableCell component="th" scope="row" align="center">
                    {index + 1}
                  </TableCell>
                )}
                <TableCell align="center">{item[1]}</TableCell>
                <TableCell align="center">{item[0]}</TableCell>
                <TableCell align="center">{item[2]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </S.ContainerDiv>
  );
}

export default Result;
