import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class MyNavBar extends Component {
  render(){
    return(
      <>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href='/home'>OpenBook</a>
            </Navbar.Brand>
            <Navbar.Toggle/>
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>

              <NavItem onClick={this.props.toProfile}>
                profile
              </NavItem>

              <NavItem onClick={this.props.toVent}>
                vent
              </NavItem>

              <NavItem onClick={this.props.toSearch}>
                commiserate
              </NavItem>

              <NavItem onClick={this.props.toWallow}>
                wallow
              </NavItem>

              <NavItem onClick={this.props.logout}>
                sign out
              </NavItem>

            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}
export default MyNavBar
