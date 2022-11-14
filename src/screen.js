import React from 'react';
import Menu from './Screen/menu';
import Setting from './Screen/settings';
import Games from './Screen/games';
import CoverFlow from './Screen/coverflow';
import SongsMenu from './Screen/songs';
import AllSongs from './Screen/Songs/allsongs';
import Artists from './Screen/Songs/artists';
import Albums from './Screen/Songs/albums';


const Screen = (props) => {

    return (
        <div className='Screen'>
            {/* This is default component-The first menu visible on screen */}
            {props.songPageIndex === -1 && props.PageNumber === -1 ? <Menu
                //selectMenu={props.selectMenu}
                selectedOption={props.selectedOption}
                MenuItems={props.MenuItems}
            /> : ''}
            {/* Below are default menu items components */}
            {props.songPageIndex === -1 && props.PageNumber === 0 ? <Games /> : ''}
            {props.songPageIndex === -1 && props.PageNumber === 1 ? <SongsMenu
                songsItems={props.songsItems}
                selectedOption={props.selectedOption}
            /> : ''}
            {props.songPageIndex === -1 && props.PageNumber === 2 ? <Setting /> : ''}
            {props.songPageIndex === -1 && props.PageNumber === 3 ? <CoverFlow /> : ''}
        {/* if props.songPageIndex!=-1 that means we are on songs menu and not on default menu */}
            {props.songPageIndex === 0 ? <AllSongs/> : ''}
            {props.songPageIndex === 1 ? <Artists /> : ''}
            {props.songPageIndex === 2 ? <Albums /> : ''}

        </div>
    );
}


export default Screen;