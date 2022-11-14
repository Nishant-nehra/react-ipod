import React from 'react';

const SongsMenu = (props) => {

    return (
        <div className="ipodScreen">
            <div className='toggleMenu'>
                <div className='MenuList'>
                    <h3>Songs</h3>
                        
                    {props.songsItems.map((item, index) => {
                        return (
                            <div className={props.selectedOption === index ? 'menuItem selectedMenuItem' : 'menuItem'} key={index}>
                                <p>{item}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}


export default SongsMenu;