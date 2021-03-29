import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import StartForm from './StartForm';
import LoginPage from './LoginPage'
import TimelineCreation from './TimelineCreation'


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleDone = this.handleDone.bind(this);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false})
  }

  handleDone(){
    this.setState({isLoggedIn: false, completeState: true});
  }
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const completeState = this.state.completeState;
    console.log('state in index', this.state)


    if(isLoggedIn === true){
      return(
        <div className="pagecontainer">
          <TimelineCreation isLoggedIn={isLoggedIn} handleLogoutClick={this.handleLogoutClick} completeState={completeState} handleClick={this.handleDone.bind(this)} />
        </div>
      );

    }

    return(
      <div >
        <StartForm handleLoginClick={this.handleLoginClick}/>
      </div>
    );

  }
}

ReactDOM.render(
  <React.StrictMode>
    <LoginControl />
  </React.StrictMode>,
  document.getElementById('root')
);
