import React from 'react';

const PlayerSquare = (props) => {

    return (
        <div className={ `player-square ${ props.square === '-' ? "blank" : "filled"}`} key={`[${props.rowIndex}, ${ props.squareIndex }]`} data-coordinates={ [`${props.rowIndex}${ props.columnIndex }`] } >
        </div>
    )

}

export default PlayerSquare;