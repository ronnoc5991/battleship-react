import React from 'react';
import PlayerSquare from './PlayerSquare';

const PlayerRow = (props) => {

    return (
        <div className="Row"> 
        {props.row.map((square, columnIndex) => {
            return <PlayerSquare square={square} rowIndex={ props.rowIndex } columnIndex={ columnIndex } />
        })}
        </div>
    )
}

export default PlayerRow;