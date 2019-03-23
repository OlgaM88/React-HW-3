import React, { Component, createRef } from 'react';
import DropDownMenu from '../DropdownMenu/DropDownMenu';

import Avatar from '../Avatar/Avatar';
import userImage from '../../../../user-image.jpg';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentWillMount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  openDropdown = () => {
    this.setState(state => ({
      isDropDownOpen: true,
    }));
  };

  closeDropdown = () => {
    this.setState(state => ({
      isDropDownOpen: false,
    }));
  };

  /* handleWindowClick = evt => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      evt.target,
    );

    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };
*/
  render() {
    const { isDropDownOpen } = this.state;
    return (
      <div
        className="UserMenu"
        onClick={this.openDropdown}
        onKeyDown={this.openDropdown}
        role="button"
        ref={this.containerRef}
        tabIndex={0}
      >
        <Avatar imageUrl={userImage} alt="Bob Ross" />
        <span className="UserName">Bob Ross</span>
        {isDropDownOpen && <DropDownMenu />}
      </div>
    );
  }
}
