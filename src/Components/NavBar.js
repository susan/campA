import React from 'react';
import { NavLink } from "react-router-dom"
import { Menu } from 'semantic-ui-react';

const Nav = (props) => {
  return (
    <ul>
      <Menu attached='top' color='green' inverted>
        <Menu.Item as={ NavLink } name="Home" to="/">
        </Menu.Item>
        <Menu.Item as={ NavLink } name="Parks" to="/parks">
        </Menu.Item>
        <Menu.Item as={ NavLink } name="Campgrounds" to="/campgrounds" >
        </Menu.Item>
        <Menu.Item position="right">
          <li> Login</li>
        </Menu.Item>
      </Menu>
    </ul>
  )
}

export default Nav;
