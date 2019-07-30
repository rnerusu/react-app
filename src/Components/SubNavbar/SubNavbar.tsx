import React from 'react';
import './SubNavbar.css';
import Button from 'react-bootstrap/Button'
import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'


export interface SubNavItems {
  title: string,
  addLink: string,
  addButton: boolean,
  deleteButton: boolean,
  importFile?: boolean,
  eportFile?: boolean,
  validateButton?: boolean,
  submitButton?: boolean
}


const SubNavbar: React.FC<SubNavItems> = (props: SubNavItems) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="" >{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="nav navbar-nav navbar-center">
          {(props.validateButton === true)? <Nav.Link href="">Validate</Nav.Link>: ''}
          {(props.submitButton === true)? <Nav.Link href="">Submit</Nav.Link> : ''}
        </Nav>
        <Nav>
          {(props.importFile === true) ? <Nav.Link href="">Import File</Nav.Link> : ''}
          {(props.eportFile === true) ? <Nav.Link href="">Export File</Nav.Link> : ''}
        </Nav>
      </Navbar.Collapse>
      <Nav>
        {(props.addButton === true) ? <Nav.Link href={props.addLink} className="EditButtons"><i className="fa fa-plus"></i></Nav.Link> : ''}
        {(props.deleteButton === true) ? <Nav.Link href="" className="EditButtons"><i className="fa fa-times"></i></Nav.Link> : ''}
      </Nav>
    </Navbar>
  );
}

export default SubNavbar;
