import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Image, Header } from 'semantic-ui-react';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
      <Menu color='blue' attached="top" borderless>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image src="https://www.mauibath.com/wp-content/uploads/2019/10/596998840197290025-300x300.png" size='mini'/>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/distress">
          <Header as="h4">Distress</Header>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/sighting">
          <Header as="h4">Report</Header>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/infodistress">
          <Header as="h4">Info</Header>
        </Menu.Item>
      </Menu>
    );
  }
}

// Declare the types of all properties.
NavBar.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const NavBarContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(NavBar);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(NavBarContainer);
