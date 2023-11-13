import React from 'react'
import './GridStyles.css'

function Grid() {
    const gridItems = Array.from({ length: 48 }, (_, index) => index + 1);
  
    return (
      <div className="custom-grid-container">
        {gridItems.map((item) => (
          <div key={item} className="custom-grid-item">
            {item}
          </div>
        ))}
      </div>
    );
  }
  

export default Grid