import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { Component } from 'react';
import HomePage from './pages/HomePage/HomePage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false }; // temporary login
    this.loginHandler = this.loginHandler.bind(this);
  }

  loginHandler() {
    console.log('change login state');
    this.setState({ isLoggedIn: true });
  }

  render() {
    return (
      <div className='layout-mobile'>
        {!this.state.isLoggedIn ? (
          <LoginPage onLogin={this.loginHandler} />
        ) : (
          <HomePage />
        )}
      </div>
    );
  }
}

export default App;
