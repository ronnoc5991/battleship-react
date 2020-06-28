import React from 'react';

const Square = (props) => {

    return (
        <div className={ `Square ${ props.square === '-' ? "blank" : "filled"}`}>
            
        </div>
    )

}

export default Square;