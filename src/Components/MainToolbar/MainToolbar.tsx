import React from 'react';
import './MainToolbar.css';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import HomeNavItem, {ItemProps} from './../HomeNavItem/HomeNavItem';
import Col from 'react-bootstrap/Col';

interface ItemPropsArray {
  items: ItemProps[]
}

const MainToolbar: React.FC <ItemPropsArray> = (props: ItemPropsArray) => {
  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/" className = "coloredheader">Rule Metadata Manager</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav navbar-nav navbar-center">
    {props.items.map((item, i) => 
              <HomeNavItem title={item.title} key={i}
              icon={item.icon} routeLink = {item.routeLink} hoverIcon={item.hoverIcon}></HomeNavItem>)}
    </Nav>
  </Navbar.Collapse>
  <Nav>
      <Nav.Link href=""><img  src = './images/rulesmdstyles/navigationIconsWhite/notification.png'/> </Nav.Link>
  </Nav>
</Navbar>
  );
}

export default MainToolbar;
