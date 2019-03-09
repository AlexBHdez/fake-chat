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
    ]
  }

  showChats = () => {
    const { users } = this.state;
    return users.map((user, i) => 
      <Chat key={i} user={user} />
    )
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
