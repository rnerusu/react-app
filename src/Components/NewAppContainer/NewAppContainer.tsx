import React from 'react';
import './NewAppContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubNavbar, {SubNavItems}from '../SubNavbar/SubNavbar';
import LandingPageIcon, {IconProps} from '../LandingPageIcon/LandingPageIcon';
import Button from 'react-bootstrap/Button';

interface IconPropsArray {
  items: IconProps[]
}

const NewAppContainer: React.FC<IconPropsArray> = (props: IconPropsArray) => {
  return (
      <div>
      <SubNavbar title="New Application"
      addLink= "newapp"
      addButton= {false}
      deleteButton = {false} ></SubNavbar>
      <Container>
        <div>
          <form></form>
        </div>
      </Container>
      </div>
  );
}

export default NewAppContainer;
