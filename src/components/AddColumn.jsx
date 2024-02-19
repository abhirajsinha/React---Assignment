import React from 'react';

function AddColumn({ onClick }) {
    return (
        <div style={{ position: 'absolute', top: 0, right: 50, marginTop: 10 }}>
            <button onClick={onClick}>Add Column</button>
        </div>
    );
}

export default AddColumn;
