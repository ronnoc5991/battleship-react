import React from 'react';
import Row from './Row';

const EnemyBoard = () => {

    const board = [
        ['0', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['0', '-', '-', '4', '4', '-', '-', '2', '-', '-',],
        ['0', '-', '-', '-', '-', '-', '-', '2', '-', '3',],
        ['0', '-', '-', '-', '-', '-', '-', '2', '-', '3',],
        ['0', '-', '-', '-', '-', '-', '-', '-', '-', '3',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '1', '1', '1', '1', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',],
        ['-', '-', '-', '-', '-', '-', '-', '-', '-', '-',]
    ];

    return (
        <div className="enemy-board">
                <div className="arm"></div>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                { board.map((row) => {
                return <Row row={row} />
                }) }
        </div>
    )
}

export default EnemyBoard;