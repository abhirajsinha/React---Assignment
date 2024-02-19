import React from 'react';

function AddColumn({ onClick }) {
    return (
        <div style={{ position: 'absolute', top: -10, right: 30, margin: 20 }}>
            <button onClick={onClick}>Add Column</button>
        </div>
    );
}

export default AddColumn;
