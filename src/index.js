import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';

// Styles
import './index.scss';

// Components
import Header from './components/Header/header';
import Chat from './components/Chat/chat';
import Intro from './components/Intro/intro';

class App extends Component {

  state = {
    users: [],
    messages: [],
  }

  // Render the chats and passing the needed props.
  showChats = () => {
    const { users } = this.state;

    return users.map((user, i) => 
      <Chat 
        key={i}
        userFrom={user}
        chatId={i}
        messages={this.state.messages} 
        submit={this.send}  
      />
    )
  };

  // Call from intro component on submit.
  users = (newUsers) => {
    this.setState({
      users: newUsers,
    });
  };

  // Call from chat component on submit message.
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
          {/* Render the intro until we have two usernamos */}
          { users.length > 1 ? this.showChats() : <Intro submit={this.users} /> }
        </main>
      </Fragment>
    );

  }
};

ReactDOM.render(<App/>, document.querySelector('#root'));
