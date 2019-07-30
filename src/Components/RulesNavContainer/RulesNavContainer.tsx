import React from 'react';
import './RulesNavContainer.css';
import Container from 'react-bootstrap/Container';
import SubNavbar, {SubNavItems}from '../SubNavbar/SubNavbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNavItem, {ItemProps} from '../HomeNavItem/HomeNavItem';
import LandingPageIcon, {IconProps} from '../LandingPageIcon/LandingPageIcon';
import Button from 'react-bootstrap/Button';

interface IconPropsArray {
  items: IconProps[]
}

const AppNavContainer: React.FC<IconPropsArray> = (props: IconPropsArray) => {
  return (
    <div>
      <SubNavbar title="Rules Manager"
      addLink= ""
      addButton= {true}
      deleteButton = {true} 
      importFile =  {true}
      eportFile = {true}
      validateButton = {true}
      submitButton = {true}>
      </SubNavbar>
      <Container>
        <div>
          <Button variant="primary">Go to Platform & Envi</Button>
        </div>
      </Container>
      </div>
  );
}

export default AppNavContainer;
