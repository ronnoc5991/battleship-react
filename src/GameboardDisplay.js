import React from 'react';
import Row from './Row';
import Square from './Square';

const GameboardDisplay = () => {

    const board = [
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ];

    return (
        <div className="GameboardDisplay">
            <div className="arm"></div>
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
            <div className="circle circle-4"></div>
            <div className="circle circle-5"></div>
            <div className="circle circle-6"></div>
            <div className="circle circle-7"></div>
            { board.map((row) => {
               return <Row row={row} />
            }) }
        </div>
    )
}

export default GameboardDisplay;