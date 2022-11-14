import React from 'react';
import './App.css';

import ZingTouch from 'zingtouch';

import Screen from './screen';
import ButtonWheel from './buttonWheel';


class App extends React.Component {
  constructor() {
    super();
    this.angle_change = 0;
    this.temp_selected = 0;
    this.state = {
      defaultMenu: ['Games', 'Music', 'Settings', 'CoverFlow'],
      songsMenu: ['All songs', 'Artists', 'Albums'],
      selected: 0,
      PageNumber: -1,
      songMenuVisible: false,
      songPageIndex: -1
    }
  }

  componentDidMount() {
    // zingtouch library for rotate event on buttons wheel
    // if you rotate on wheel options on screen would change
    var target = document.getElementById('buttonWheel');
    var region = new ZingTouch.Region(target);
    region.bind(target, 'rotate', (event) => {
      if (!document.getElementsByClassName('toggleMenu')[0].classList.contains('notdisplayToggleMenu')) {
        let dist = event.detail.distanceFromLast;
        this.angle_change += dist;
        if (this.state.PageNumber === -1) {
          if (this.angle_change > 30) {
            this.temp_selected++;
            this.temp_selected = this.temp_selected % this.state.defaultMenu.length;
            this.setState({
              selected: this.temp_selected,
            });
            this.angle_change = 0;
          }
          else if (this.angle_change < -30) {
            this.temp_selected--;
            if (this.temp_selected === -1)
              this.temp_selected = this.state.defaultMenu.length - 1;

            this.temp_selected = this.temp_selected % this.state.defaultMenu.length;
            this.setState({
              selected: this.temp_selected,
            });
            this.angle_change = 0;
          }
        }
        else if (this.state.PageNumber === 1) {
          if (this.angle_change > 30) {
            this.temp_selected++;
            this.temp_selected = this.temp_selected % this.state.songsMenu.length;
            this.setState({
              selected: this.temp_selected,
            });
            this.angle_change = 0;
          }
          else if (this.angle_change < -30) {
            this.temp_selected--;
            if (this.temp_selected === -1)
              this.temp_selected = this.state.songsMenu.length - 1;

            this.temp_selected = this.temp_selected % this.state.songsMenu.length;
            this.setState({
              selected: this.temp_selected,
            });
            this.angle_change = 0;
          }
        }
      }

    });
    
    
  }

  // selectMenu = (clickedItem) => {

  //   var item = document.getElementsByClassName("menuItem");
  //   for (var i = 0; i < item.length; i++) {
  //     item[i].classList.remove("selectedMenuItem");
  //   }
  //   clickedItem.classList.add("selectedMenuItem");

  // }

  menuButtonClicked = () => {
    //Earlier made it such that you can open the menu button or close it above any page
    // var clicked = document.getElementsByClassName("toggleMenu")[0];
    // clicked.classList.toggle("notdisplayToggleMenu");

    //but this one here would take user to default menu page
    //can apply any as convenient to the user
    this.setState({
      PageNumber: -1,
      songMenuVisible: false,
      songPageIndex:-1
    });

  }
  centerButtonClicked = () => {
    //for the default menu
    if (this.state.songMenuVisible === false) {
      if (this.state.selected === 0) {
        this.setState({
          PageNumber: 0,
          songMenuVisible: false
        });
      }
      else if (this.state.selected === 1) {
        this.setState({
          PageNumber: 1,
          songMenuVisible: true,
          selected:0
        });
      }
      else if (this.state.selected === 2) {
        this.setState({
          PageNumber: 2,
          songMenuVisible: false
        });
      }
      else if (this.state.selected === 3) {
        this.setState({
          PageNumber: 3,
          songMenuVisible: false
        });
      }
    }


    //Now for the songs menu
    if (this.state.songMenuVisible) {
      if (this.state.selected === 0) {
        this.setState({
          songPageIndex: 0
        });
      }
      else if (this.state.selected === 1) {
        this.setState({
          songPageIndex: 1
        });
      }
      else if (this.state.selected === 2) {
        this.setState({
          songPageIndex: 2
        });
      }
    }

  }

  render() {
    return (
     
      <div className='ipodContainer'>
        <Screen
          // selectMenu={this.selectMenu}
          selectedOption={this.state.selected}
          PageNumber={this.state.PageNumber}
          MenuItems={this.state.defaultMenu}
          songsItems={this.state.songsMenu}
          songPageIndex={this.state.songPageIndex}

        />
        <ButtonWheel
          menuButtonClicked={this.menuButtonClicked}
          nextButtonClicked={this.nextButtonClicked}
          prevButtonClicked={this.prevButtonClicked}
          pauseButtonClicked={this.pauseButtonClicked}
          centerButtonClicked={this.centerButtonClicked}
        />
      </div>

    );
  }
}

export default App;
