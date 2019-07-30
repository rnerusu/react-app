import React, { useState } from 'react';
import './HomeNavItem.css';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';

export interface ItemProps {
  title: string,
  routeLink: string,
  icon: string,
  hoverIcon?: string
}

const HomeNavItem: React.FC<ItemProps> = (props: ItemProps) => {
  let [ hover, setHover ] = useState(false);
  let [ icon, setIcon ] = useState(props.icon);

  function toggleHover() {
    if(props.hoverIcon) {
      setHover(!hover);
      setIcon(hover ? props.icon : props.hoverIcon);  
    }
  }

  return (
    <Nav.Link variant="light" onMouseEnter={toggleHover} onMouseLeave={toggleHover}
    className="item-selected" href={props.routeLink}><img src={icon}/>&nbsp;{props.title} </Nav.Link >
  );
}

export default HomeNavItem;
