import React from 'react';

const DraggableShips = (props) => {

    function dragStart (e) {
        console.log('drag has started')
        console.log(e);
        e.dataTransfer.setData("text", e.target.dataset.length);
        
    }

    return (
        <div className={ `ship ship-${props.length}` } data-length={props.length} draggable="true" onDragStart={ dragStart }>
            
        </div>
    )
}

export default DraggableShips;