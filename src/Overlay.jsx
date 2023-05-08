
import React, { useState } from 'react';
import { OverlayTestColor } from "./OverlayTestColor";
import { OverlayTestSound } from "./OverlayTestSound";
import './overlay.css';


export const Overlay = () => {

  const [showOverlay, setShowOverlay] = useState(false);

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  }

  return (
    <div>
      <button onClick={toggleOverlay} className='test-button'>Тест реакции</button>
      {showOverlay && (
        <div className="overlay" >
          <div className="overlay-content">
            <button onClick={toggleOverlay} className='round-button'><i class="fas fa-arrow-left"></i></button>
            <header>
              <h1>СЕНСОМОТОРНЫЕ РЕАКЦИИ</h1>
            </header>
            <div className='options'>
              
              <div className="box">Свет</div>
              <div className="box"><OverlayTestSound /></div>
              <div className="box"><OverlayTestColor /> </div>
              <div className="box">Сумма+<br/></div>
              <div className="box">Сумма</div>
            </div>
            {/* <progress value="10" max="100"></progress> */}
          </div>
        </div>
      )}
    </div>
  );
};
