import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Image, Header, Dropdown } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

const kahukai = '/images/Kahukai_transparent.png';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class NavBar extends React.Component {
  render() {
    return (
      <Menu attached="top" borderless id="nav" className="ui stackable menu" style={{background: "white" , border: "none"}}>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image src={kahukai} size='small' alt='Kahukai app logo'/>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/distress">
          <Header as="h4">Distress Report</Header>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/sighting">
          <Header as="h4">Sighting Report</Header>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/infodistress">
          <Header as="h4">Info</Header>
        </Menu.Item>
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/birdadminlist" key='birdadminlist'><Header as="h4">Bird Sightings</Header></Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/sealadminlist" key='sealadminlist'><Header as="h4">Seal Sightings</Header></Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
          <Menu.Item as={NavLink} activeClassName="active" exact to="/turtleadminlist" key='turtleadminlist'><Header as="h4">Turtle Sightings</Header></Menu.Item>
        ) : ''}
        {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
            <Menu.Item as={NavLink} activeClassName="active" exact to="/distressadminlist" key='distressadminlist'><Header as="h4">DISTRESS Sightings</Header></Menu.Item>
        ) : ''}
        <Menu.Item position="right">
          {this.props.currentUser === '' ? (
            <Dropdown id="login-dropdown" text="Login" pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="login-dropdown-sign-in" icon="user" text="Sign In" as={NavLink} exact to="/signin"/>
                <Dropdown.Item id="login-dropdown-sign-up" icon="add user" text="Sign Up" as={NavLink} exact to="/signup"/>
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Dropdown id="navbar-current-user" text={this.props.currentUser} pointing="top right" icon={'user'}>
              <Dropdown.Menu>
                <Dropdown.Item id="navbar-sign-out" icon="sign out" text="Sign Out" as={NavLink} exact to="/signout"/>
              </Dropdown.Menu>
            </Dropdown>
          )}
        </Menu.Item>
        <div className="ui hidden divider"></div>
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
