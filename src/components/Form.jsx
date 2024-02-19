import React, { useState } from 'react';
import AddColumnButton from './AddColumn';

function Form() {
    const [columns, setColumns] = useState([]);
    const [buttons, setButtons] = useState([]);
    const [draggedButtonIndex, setDraggedButtonIndex] = useState(null);
    const [dragStartOffset, setDragStartOffset] = useState({ x: 0, y: 0 });

    const addColumn = () => {
        setColumns([...columns, {}]);
    };

    const removeColumn = (index) => {
        setColumns(columns.filter((_, i) => i !== index));
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        if (data === 'sidebarButton') {
            const newButton = (
                <button
                    key={buttons.length}
                    style={{
                        position: 'absolute',
                        left: e.clientX - dragStartOffset.x,
                        top: e.clientY - dragStartOffset.y,
                        zIndex: 5,
                    }}
                    draggable
                    onDragStart={(e) => handleDragStart(e, buttons.length)}
                >
                    Button {buttons.length}
                </button>
            );
            setButtons([...buttons, newButton]);
        }
    };

    const handleDragStart = (e, index) => {
        const rect = e.target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        setDragStartOffset({ x: offsetX, y: offsetY });
        setDraggedButtonIndex(index);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDropButton = (e) => {
        e.preventDefault();
        if (draggedButtonIndex !== null) {
            const newButtons = [...buttons];
            newButtons[draggedButtonIndex] = React.cloneElement(newButtons[draggedButtonIndex], {
                style: {
                    ...newButtons[draggedButtonIndex].props.style,
                    left: e.clientX - dragStartOffset.x,
                    top: e.clientY - dragStartOffset.y,
                },
            });
            setButtons(newButtons);
            setDraggedButtonIndex(null);
        }
    };

    return (
        <>
            <AddColumnButton onClick={addColumn} />
            <div style={{ display: 'flex', width: 'calc(100% - 250px)', borderRadius: 20, border: '1px solid black', margin: 40, overflow: 'auto' }} onDrop={handleDrop} onDragOver={handleDragOver} onDragEnd={handleDropButton}>
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>{button}</React.Fragment>
                ))}

                {columns.map((column, index) => (
                    <div key={index} style={{ position: 'relative', flex: '1 1 auto', borderRight: '1px solid black', boxSizing: 'border-box' }}>
                        <button onClick={() => removeColumn(index)} style={{ position: 'absolute', top: 0, right: 0, margin: 5 }}>X</button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Form;
