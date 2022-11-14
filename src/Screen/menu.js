import React from 'react';

const Menu = (props) => {

    return (
        <div className="ipodScreen">
            <div className='toggleMenu'>
                <div className='MenuList'>
                    <h3>iPod.js</h3>
                        {/* 
                        <div className='MenuList'>
                        <h3>iPod.js</h3>
                        <ul>
                            <li className='menuItem selectedMenuItem' onClick={(item) => props.selectMenu(item.target)}>Cover Flow</li>
                            <li className='menuItem' onClick={(item) => props.selectMenu(item.target)}>Music</li>
                            <li className='menuItem' onClick={(item) => props.selectMenu(item.target)}>Games</li>
                            <li className='menuItem' onClick={(item) => props.selectMenu(item.target)}>Settings</li>
                        </ul>
                        </div> 
                        */}
                    {props.MenuItems.map((item, index) => {
                        return (
                            // if selected option and index are same then the item will be selected else not
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


export default Menu;