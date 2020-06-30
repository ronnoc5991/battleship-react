import React from 'react';

const DraggableShips = (props) => {

    function dragStart (e) {
        console.log('drag has started')
        console.log(e.button);
        e.dataTransfer.setData("text", e.target.dataset.length);
    }

    function dragging (e) {
        console.log('I am dragging');
    }

    function dragEnd (e) {
        console.log('drag has ended')
    }

    function rightClick (e) {
        console.log('right click')
        e.preventDefault();
        e.stopPropagation();
    }

    function letGo (e) {
        console.log(e.button)
        if (e.button === 2) {
            return false;
        }
    }

    return (
        <div className={ `ship ship-${props.length}` } data-length={props.length} draggable="true" onDragStart={ dragStart } onDrag={ dragging } onDragEnd={ dragEnd } onContextMenu={ rightClick } onMouseUp={ letGo } key={ props.shipIndex }>
            
        </div>
    )
}

export default DraggableShips;