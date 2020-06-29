import React from 'react';
import EnemySquare from './EnemySquare';

const EnemyRow = (props) => {

    return (
        <div className="Row"> 
        {props.row.map((square, columnIndex) => {
            return <EnemySquare square={square} rowIndex={ props.rowIndex } columnIndex={ columnIndex } />
        })}
        </div>
    )
}

export default EnemyRow;