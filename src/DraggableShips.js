import React from 'react';

const DraggableShips = (props) => {

    function dragStart (e) {
        // console.log('drag has started')
        e.dataTransfer.setData("text", e.target.dataset.length);
    }

    function dragging (e) {
        // console.log('I am dragging');
        // e.target.style.transform = 'scale(1.1)'
    }

    function dragEnd (e) {
        // console.log('drag has ended')
    }

    return (
        <div className={ `ship ship-${props.length}-${ props.direction ? 'horizontal' : 'vertical' }` } data-length={props.length} draggable="true" onDragStart={ dragStart } onDrag={ dragging } onDragEnd={ dragEnd } key={ props.shipIndex }>
        </div>
    )
}

export default DraggableShips;