import React from 'react';
import './AppNavContainer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SubNavbar, { SubNavItems } from '../SubNavbar/SubNavbar';
import LandingPageIcon, { IconProps } from '../LandingPageIcon/LandingPageIcon';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

interface IconPropsArray {
  items: IconProps[]
}

const AppNavContainer: React.FC<IconPropsArray> = (props: IconPropsArray) => {
  return (
    <div>
      <SubNavbar title="Application Manager"
        addLink="newapp"
        addButton={true}
        deleteButton={true} ></SubNavbar>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
              <th>Table heading</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
        <div>
          <Button variant="primary">Go to Platform & Envi</Button>
        </div>
      </div>
    </div>
  );
}

export default AppNavContainer;
