import React from 'react';
import Square from './Square';

const Row = (props) => {

    function logIt () {
        console.log('Hello')
    }

    return (
        <div className="Row"> 
        {props.row.map((square) => {
            return <Square square={square} onClick={ logIt }/>
        })}
        </div>
    )
}

export default Row;