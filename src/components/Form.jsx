import React, { useState } from 'react';
import AddColumnButton from './AddColumn';

function Form() {
    const [columns, setColumns] = useState([]);

    const addColumn = () => {
        setColumns([...columns, {}]);
    };

    const removeColumn = (index) => {
        setColumns(columns.filter((_, i) => i !== index));
    };

    return (
        <>
            <AddColumnButton onClick={addColumn} />
            <div style={{ display: 'flex', width: 'calc(100% - 250px)', borderRadius: 20, border: '1px solid black', margin: 40, overflow: 'auto' }}>

                {columns.map((column, index) => (
                    <div key={index} style={{ flex: '1 1 auto', borderRight: '1px solid black', position: 'relative', boxSizing: 'border-box' }}>
                        <button onClick={() => removeColumn(index)} style={{ position: 'absolute', top: 0, right: 0, margin: 5 }}>X</button>                        
                    </div>
                ))}
            </div>
        </>
    );
}

export default Form;
