import React from 'react';
import { useSelector } from 'react-redux';


function Result() {

    const state = useSelector((state) => (state.score.avgRank))
    const avgRank = state.sort((a, b) => a[0] - b[0])
    console.log(avgRank)
    return (
        <div>
            {avgRank.map((score, index) => (
                <ul>RANK{index + 1}: {score[1]}: {score[0]}</ul>
            ))}
        </div>
    );
}

export default Result;