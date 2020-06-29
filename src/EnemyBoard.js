import React from 'react';
import Row from './Row';

const EnemyBoard = (props) => {

    return (
        <div className="enemy-board">
                <div className="arm"></div>
                <div className="circle circle-1"></div>
                <div className="circle circle-2"></div>
                <div className="circle circle-3"></div>
                <div className="circle circle-4"></div>
                { props.board.board.map((row) => {
                return <Row row={row} />
                }) }
        </div>
    )
}

export default EnemyBoard;