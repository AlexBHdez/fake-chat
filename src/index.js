import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Components
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

const App = () => (
  <Fragment>
    <Header />
    <main>Main</main>
    <Footer />
  </Fragment>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
