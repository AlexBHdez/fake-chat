import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Components
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Chat from './components/Chat/chat';

const App = () => (
  <Fragment>
    <Header />
    <main>
      <Chat />
      <Chat />
    </main>
    <Footer />
  </Fragment>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
