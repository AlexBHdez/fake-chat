import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Components
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Chat from './components/Chat/chat';
import Intro from './components/Intro/intro';

class App extends Component {

  state = {
    users: [],
    messages: [],
  }

  showChats = () => {
    const { users } = this.state;

    return users.map((user, i) => 
      <Chat 
        key={i}
        userFrom={user}
        messages={this.state.messages} 
        submit={this.send}  
      />
    )
  };

  users = (newUsers) => {
    this.setState({
      users: newUsers,
    });
  };

  send = (newMessage) => {
    if (newMessage.text !== '') {
      this.setState({
        messages: [...this.state.messages, newMessage],
      });
    }
  };

  render() {
    const { users } = this.state;
    return(
      <Fragment>
        <Header />
        <main>
          { users.length > 1 ? this.showChats() : <Intro submit={this.users} /> }
        </main>
        <Footer />
      </Fragment>
    );

  }
};

ReactDOM.render(<App/>, document.querySelector('#root'));
