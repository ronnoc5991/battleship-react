import React from 'react';
import PlayerSquare from './PlayerSquare';

const PlayerRow = (props) => {

    return (
        <div className="Row"> 
        {props.row.map((square, squareIndex) => {
            return <PlayerSquare square={square} rowIndex={ props.rowIndex } squareIndex={ squareIndex } />
        })}
        </div>
    )
}

export default PlayerRow;