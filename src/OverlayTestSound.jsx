import React, { useState } from 'react';
import './overlay.css';

export const OverlayTestSound = () => {

  const [showOverlayTestSound, setShowOverlayTestSound] = useState(false);

  const toggleOverlayTestSound = () => {
    setShowOverlayTestSound(!showOverlayTestSound);
  }

  return (
    <div>
      <div onClick={toggleOverlayTestSound}>Звук</div>
      {showOverlayTestSound && (
        <div className="overlay" >
          <div className="overlay-content">
            <button onClick={toggleOverlayTestSound} className='round-button'><i class="fas fa-arrow-left"></i></button>
            <header>
              <h2>Нажмите, когда услышите звуковой сигнал</h2>
              
            </header>
          </div>
        </div>
      )}
    </div>
  );
};
