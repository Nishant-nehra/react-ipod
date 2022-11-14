import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFastBackward, faFastForward, faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
const ButtonWheel = (props) => {
  
  return (
    <div id='buttonWheel'>
      <div className='MenuButton' onClick={props.menuButtonClicked}>Menu</div>
      <div className='nextButton' onClick={props.nextButtonClicked}><FontAwesomeIcon icon={faFastForward} size="lg" /></div>
      <div className='previousButton' onClick={props.prevButtonClicked}><FontAwesomeIcon icon={faFastBackward} size="lg" /></div>
      <div className='pauseAndPlay' onClick={props.pauseButtonClicked}><FontAwesomeIcon icon={faPlay} size="lg" /> <FontAwesomeIcon icon={faPause} size="lg" /></div>
      <button className='centerButton' onClick={props.centerButtonClicked}></button>
    </div>
  );
}


export default ButtonWheel;