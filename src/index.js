import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Components
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Chat from './components/Chat/chat';

class App extends Component {

  state = {
    users: [
      { name: 'Alex' },
      { name: 'Manu' }
    ],
    messages: [
      {from:'', to: '', date: '', text: 'holaaa'},
      {text: 'holaaa'},
      {text: 'holaaa'},
    ],
  }

  showChats = () => {
    const { users } = this.state;

    return users.map((user, i) => 
      <Chat 
        key={i} 
        user={user} 
        messages={this.state.messages} 
        submit={this.send}  
      />
    )
  };

  send = (newMessage) => {
    this.setState({
      messages: [...this.state.messages, newMessage],
    });
  };

  render() {
    return(
      <Fragment>
        <Header />
        <main>
          { this.showChats() }
        </main>
        <Footer />
      </Fragment>
    );

  }
};

ReactDOM.render(<App/>, document.querySelector('#root'));
