import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {loggedIn: null};
  componentDidMount() {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        // firebase config
      });
    }
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }
    });
  }
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button
            onPress={() => firebase.auth().signOut()}
            style={{marginTop: 50}}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerContainer}>
            <Spinner size="large" />
          </View>
        );
    }
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 20,
  },
};

export default App;
