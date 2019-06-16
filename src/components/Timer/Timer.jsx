import React from 'react';
import './Timer.css';

const Timer = () => (
  <div className="timer">
    <div className="timer__node">
      <div className="timer__value">01</div>
      <div className="timer__point">Hours</div>
    </div>
    <div className="timer__divider">:</div>
    <div className="timer__node">
      <div className="timer__value">25</div>
      <div className="timer__point">Minutes</div>
    </div>
    <div className="timer__divider">:</div>
    <div className="timer__node">
      <div className="timer__value">12</div>
      <div className="timer__point">Seconds</div>
    </div>
  </div>
);

export default Timer;
