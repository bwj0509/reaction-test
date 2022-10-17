import React, { useState } from "react";
import { Table, InputGroup, FormControl, Button } from 'react-bootstrap'

function Score({ resultAvg }) {
    const ascendingArr = resultAvg.sort((a, b) => a[0] - b[0])

    return (
        <div style={{ width: '80vw', margin: 'auto' }}>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>순위</th>
                        <th>이름</th>
                        <th>시간</th>
                    </tr>
                </thead>
                <tbody>
                    {ascendingArr.map((value, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{value[1]}</td>
                                <td>{value[0]}ms</td>
                            </tr>
                        )


                    })}

                </tbody>
            </Table>

        </div>
    )
} export default Score;