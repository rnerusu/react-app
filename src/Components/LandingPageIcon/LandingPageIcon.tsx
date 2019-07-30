import React, { useState } from 'react';
import './LandingPageIcon.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export interface IconProps {
  title: string,
  icon: string,
  LastIcon?: boolean
}

const LandingPageIcon: React.FC<IconProps> = (props: IconProps) => {
  let [ hover, setHover ] = useState(false);
  let [ icon, setIcon ] = useState(props.icon);
 
  if(!props.LastIcon){
  return (
    //<Nav.Link className="item-selected"><img src= {props.icon}/>{props.title} </Nav.Link >
    
        <div>
        <Col xs="12" lg="6" md="6" >
        <span>
            <img src={props.icon}></img>        
        </span>
        
        </Col>
        <Col xs="12" lg="6" md="6" >
        <span className="arrowIcon">
            <img src="./images/rulesmdstyles/LandingPageBlack/arrow.png" ></img>
        </span>
        </Col>
        <div className = 'iconTitle'><span>{props.title}</span></div>
    </div>

);
}
else {
    return (
        <div className="lastItem">
        <span>
            <img src={props.icon}></img>        
        </span>
        <div className = 'iconTitle'> {props.title}</div>
    </div>  
      
    );
}

}

export default LandingPageIcon;

/*<div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/app.png" ></img>
        <p>Create App</p>
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/arrow.png" class= "arrowIcon"></img>
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/platform&environment.png" ></img>
        <p>Choose platform and environments</p>
        
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/arrow.png" class= "arrowIcon"></img>
    </div>
    <div class = "LandingPageIcons"> 
        <img src="./images/rulesmdstyles/LandingPageBlack/dataset.png" ></img>
        <p>select Dataset</p>
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/arrow.png" class= "arrowIcon"></img>
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/rules.png" ></img>
        <p>Onboard Rules</p>
        
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/arrow.png" class= "arrowIcon"></img>
    </div>
    <div class = "LandingPageIcons">
        <img src="./images/rulesmdstyles/LandingPageBlack/validation.png" ></img>
        <p>Validate and submit</p>


    </div>
    <Row className = "LandingPageIcons">
        <Col xs="12"  lg="6" md="6" >
            <img src={props.icon}  ></img>
            <p>{props.title}</p>
        </Col>
    </Row>
    <Row className = "LandingPageIcons"> 
        <Col xs="12"  lg="6" md="6" >
            <img src= "./images/rulesmdstyles/LandingPageBlack/arrow.png" className= "arrowIcon"/>
        </Col>   
    </Row>
    
    
    */
