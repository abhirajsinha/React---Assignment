import React from 'react';

function SideBar() {
    const handleDragStart = (e) => {
        e.dataTransfer.setData('text/plain', 'sidebarButton');
    };

    return (
        <div style={{ borderRadius: 20, border: '1px solid black', margin: 40, width: '250px', height: "100vh", textAlign: 'center', paddingTop: 10 }}>
            <button style={{ width: '200px', borderRadius: 10 }} draggable onDragStart={handleDragStart}>
                Button
            </button>
        </div>
    );
}

export default SideBar;
