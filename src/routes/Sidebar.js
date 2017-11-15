import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import BurgerMenu from "react-burger-menu"
import './Styles.css';

import { Navbar, NavDropdown, MenuItem } from 'react-bootstrap';




export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  showSettings (event) {
    event.preventDefault();

  }
  render() {
    return (
      <Menu
            isOpen={ this.props.isOpen } >
          <Navbar>
            <b>
            <MenuItem eventkey={1} id="home" className="menu-item" href="/">Home</MenuItem>
                  <MenuItem divider />
            <MenuItem eventkey={2} id="Portfolio" className="menu-item" href="/Portfolio">Portfolio</MenuItem>
            <NavDropdown eventkey={3} id="basic-nav-dropdown" title="Life" className="menu-item" href="/Life">
                  <MenuItem eventkey={3.1} href="/daily">daily</MenuItem>
                  <MenuItem eventkey={3.2} href="/front developer">front developer</MenuItem>
            </NavDropdown>
            <MenuItem eventkey={4} onClick={ this.showSettings } className="menu-item--small"
               href="/Settings">Settings</MenuItem>
            </b>
          </Navbar>
      </Menu>
    );
  }
}
