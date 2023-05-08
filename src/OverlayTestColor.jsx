import React, { useState } from 'react';
import './overlay.css';

export const OverlayTestColor = () => {

  const [showOverlayTestColor, setShowOverlayTestColor] = useState(false);

  const [result, setResult] = useState("...");
  const [startTime, setStartTime] = useState(0);
  const [start, setStart] = useState(false);

  const [color, setColor] = useState("white");

  const [progress, setProgress] = useState(0);

  const circleStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    backgroundColor: color,
    margin: 'auto',
    marginTop: '100px',
    cursor: 'pointer'
  }

  const handleStart = () => {
    setProgress(0);
    setColor("white");

    let count = 0;
    const intervalId = setInterval(() => {
      // repeat 10 times in 20s
      // setColor("white");
      count++;
      if (count > 10) {
        clearInterval(intervalId);
        // console.log("cleared interval");
      }
      else {
        setColor("#0A3161"); // sua mau o day ne
        setStartTime(Date.now());
        setStart(true);
        // console.log(count);
        // audio.play();
      }
    }, 2000)
  };

  const handleClick = () => {
    if (start && progress < 100) {
      setResult(Date.now() - startTime);
      setStart(false);
      setColor('white');
      setProgress(progress + 10);
      // console.log("updated progress" + progress);
    }
  }


  const toggleOverlayTestColor = () => {
    setShowOverlayTestColor(!showOverlayTestColor);
  }

  const audio = new Audio('src/asset/beep.mp3');

  // const getcolor = () => {
  //   if(progress<40){
  //     return "#ff0000";
  //   } else if (progress<70) {
  //     return "#ffa500";
  //   } else {
  //     return "#2ecc71";
  //   }
  // };

  return (
    <div>
      <div onClick={toggleOverlayTestColor}>Цвета</div>
      {showOverlayTestColor && (
        <div className="overlay" >
          <div className="overlay-content">
            <button onClick={toggleOverlayTestColor} className='round-button'><i class="fas fa-arrow-left"></i></button>
            <header>
              <h2>Нажмите ЛКМ, когда круг поменяет цвет на синий</h2>
            </header>
            <div style={circleStyle} onClick={handleClick}></div>
            <button className='start-button' onClick={handleStart}>Начать</button>
            <p>Ваша скорость реакции:</p>
            <p>{result} мс</p>
            <div className='container-progress'>
              <div className='progress-bar'>
                <div className='progress-bar-fill' style={{ width: `${progress}%`}} ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
