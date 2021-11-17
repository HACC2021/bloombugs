import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { withRouter, NavLink } from 'react-router-dom';
import { Menu, Image, Header, Dropdown } from 'semantic-ui-react';
import { Roles } from 'meteor/alanning:roles';

const kahukai = '/images/Kahukai_transparent.png';

/** The NavBar appears at the top of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    return (
      <Menu attached="bottom" borderless className="ui stackable menu" style={{background: "white" , padding: "5px"}} centered>
        <Menu.Item as={NavLink} activeClassName="" exact to="/">
          <Image src='https://www.mauibath.com/wp-content/uploads/2019/10/596998840197290025-300x300.png' width='60px' className="logo"/>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/distress">
          <Header as="h4">Distress Report</Header>
        </Menu.Item>
        <Menu.Item as={NavLink} activeClassName="" exact to="/sighting">
          <Header as="h4">Sighting Report</Header>
        </Menu.Item>
        <div className="ui hidden divider"></div>
      </Menu>
    );
  }
}

// Declare the types of all properties.
Footer.propTypes = {
  currentUser: PropTypes.string,
};

// withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
const FooterContainer = withTracker(() => ({
  currentUser: Meteor.user() ? Meteor.user().username : '',
}))(Footer);

// Enable ReactRouter for this component. https://reacttraining.com/react-router/web/api/withRouter
export default withRouter(Footer);
