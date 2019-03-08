import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

// Components
import Header from './components/Header/header';

const App = () => (
  <Fragment>
    <Header />
    <main>Main</main>
    <footer>Footer</footer>
  </Fragment>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
