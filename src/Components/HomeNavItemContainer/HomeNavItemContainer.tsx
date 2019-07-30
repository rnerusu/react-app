import React from 'react';
import './HomeNavItemContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeNavItem, {ItemProps} from './../HomeNavItem/HomeNavItem';
import LandingPageIcon, {IconProps} from './../LandingPageIcon/LandingPageIcon';
import Button from 'react-bootstrap/Button';

interface IconPropsArray {
  items: IconProps[]
}

const HomeNavItemContainer: React.FC<IconPropsArray> = (props: IconPropsArray) => {
  return (
    
    <Container className = 'LandingPageContainer'>
      <h1>Welcome to the IDAA Rules Metadata Manager</h1>
      <h3>  Easily onboard new apps, datasets and rules</h3>

      <Row className="Aligner" >
            {props.items.map((item, i) => <Col xs="12" lg="2" md="2" key={i}>
              <LandingPageIcon title={item.title} key={i} icon={item.icon} LastIcon = {item.LastIcon}></LandingPageIcon></Col>)}
            
      </Row>
      <Row className="Aligner">
          <div >
              <p> Get Started </p>
              <a href='newapp'></a><Button variant="primary" >Create new App</Button>
          </div>
      </Row>
    </Container>
  );
}

export default HomeNavItemContainer;
