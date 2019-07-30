import React from 'react';
import './App.css';
import MainToolbar from './Components/MainToolbar/MainToolbar';
import HomeNavItemContainer from './Components/HomeNavItemContainer/HomeNavItemContainer';
import AppNavContainer from './Components/AppNavContainer/AppNavContainer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RulesNavContainer from './Components/RulesNavContainer/RulesNavContainer';
import NewAppContainer from './Components/NewAppContainer/NewAppContainer';


const App: React.FC = () => {
  const items = [{
                  title: 'Application',
                  routeLink: 'application',
                  icon: './images/rulesmdstyles/navigationIconsWhite/app_nav_white.png',
                  hoverIcon: './images/rulesmdstyles/NavigationIconsBlue/app.png'
                },
                {
                  title: 'Platform&environment',
                  routeLink: 'platform&environment',
                  icon: './images/rulesmdstyles/navigationIconsWhite/platform&environment.png',
                  hoverIcon: './images/rulesmdstyles/NavigationIconsBlue/platform&environment.png'
                },
                {
                  title: 'Dataset',
                  routeLink: 'dataset',
                  icon: './images/rulesmdstyles/navigationIconsWhite/dataset_nav_white.png',
                  hoverIcon: './images/rulesmdstyles/NavigationIconsBlue/dataset.png'
                },
                {
                  title: 'Rules',
                  routeLink: 'rules',
                  icon: './images/rulesmdstyles/navigationIconsWhite/rules_nav_white.png',
                  hoverIcon: './images/rulesmdstyles/NavigationIconsBlue/rules.png'
                },
                {
                  title: 'Quick Rule',
                  routeLink: 'quickrule',
                  icon: './images/rulesmdstyles/navigationIconsWhite/quickRule_nav_white.png',
                  hoverIcon: './images/rulesmdstyles/NavigationIconsBlue/quickRule.png'
                },
                {
                  title: 'Admin',
                  routeLink: 'admin',
                  icon: './images/rulesmdstyles/navigationIconsWhite/admin_nav_white.png',
                  hoverIcon: './images/rulesmdstyles/NavigationIconsBlue/admin.png'
                }
              ];
const icons = [{
                title: 'Create app',
                icon: './images/rulesmdstyles/LandingPageBlack/app.png',
                LastIcon: false
              },
              {
                title: 'Choose platform and environments',
                icon: './images/rulesmdstyles/LandingPageBlack/platform&environment.png',
                LastIcon: false
              },
              {
                title: 'Select dataset',
                icon: './images/rulesmdstyles/LandingPageBlack/dataset.png',
                LastIcon: false
              },
              {
                title: 'Onboard rules',
                icon: './images/rulesmdstyles/LandingPageBlack/rules.png',
                LastIcon: false
              },
              {
                title: 'Validate and submit',
                icon: './images/rulesmdstyles/LandingPageBlack/validation.png',
                LastIcon: true
              }
            ];
 const MyProductPage = () => {
              return (
                <HomeNavItemContainer items={icons}></HomeNavItemContainer>
              );
            }
  return (
    <div className="App">
        <MainToolbar items={items}></MainToolbar>
        <Router>
          <Route path="/application" exact component={AppNavContainer} />
          <Route path="/rules" exact component={RulesNavContainer} />
          <Route exact path='/' component={MyProductPage} />
          <Route path="/newapp" exact component={NewAppContainer} />
        </Router>
    </div>
  );
}

export default App;


