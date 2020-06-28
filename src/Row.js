import React from 'react';
import Square from './Square';

const Row = (props) => {

    return (
        <div className="Row"> 
        {props.row.map((square) => {
            return <Square square={square} />
        })}
        </div>
    )
}

export default Row;