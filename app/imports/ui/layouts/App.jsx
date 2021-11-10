import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import 'semantic-ui-css/semantic.css';
import { Roles } from 'meteor/alanning:roles';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from '../pages/Landing';
import NavBar from '../components/NavBar';
import ListReport from '../pages/ListReport';
import ListReportAdmin from '../pages/ListReportAdmin';
import EditReport from '../pages/EditReport';
import NotFound from '../pages/NotFound';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import Signout from '../pages/Signout';
import Distress from '../pages/Distress';
import Sighting from '../pages/Sighting';
import SealSighting from '../pages/SealSighting';
import TurtleSighting from '../pages/TurtleSighting';
import Other from '../pages/Other';
import BirdSighting from '../pages/BirdSighting';
import InfoDistress from '../pages/InfoDistress';
import BirdDistress from '../pages/BirdDistress';
import TurtleDistress from '../pages/TurtleDistress';
import SealDistress from '../pages/SealDistress';
import TaskForm from '../pages/TaskForm';
import TestPage from '../pages/testPage';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={Landing}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/distress" component={Distress}/>
            <Route path="/sighting" component={Sighting}/>
            <Route path="/sealsighting" component={SealSighting}/>
            <Route path="/turtlesighting" component={TurtleSighting}/>
            <Route path="/birdsighting" component={BirdSighting}/>
            <Route path="/other" component={Other}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/signout" component={Signout}/>
            <Route path="/navbar" component={NavBar}/>
            <Route path="/infodistress" component={InfoDistress}/>
            <Route path="/birddistress" component={BirdDistress}/>
            <Route path="/turtledistress" component={TurtleDistress}/>
            <Route path="/sealdistress" component={SealDistress}/>
            <Route path="/taskform" component={TaskForm}/>
            <Route path="/testpage" component={TestPage}/>
            <AdminProtectedRoute path="/list" component={ListReport}/>
            <AdminProtectedRoute path="/adminlist" component={ListReportAdmin}/>
            <ProtectedRoute path="/edit/:_id" component={EditReport}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

/**
 * ProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      return isLogged ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

/**
 * AdminProtectedRoute (see React Router v4 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLogged = Meteor.userId() !== null;
      const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
      return (isLogged && isAdmin) ?
        (<Component {...props} />) :
        (<Redirect to={{ pathname: '/signin', state: { from: props.location } }}/>
        );
    }}
  />
);

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  location: PropTypes.object,
};

export default App;
