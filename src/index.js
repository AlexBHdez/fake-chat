import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => (
  <Fragment>
    <header>Header</header>
    <main>Main</main>
    <footer>Footer</footer>
  </Fragment>
);

ReactDOM.render(<App/>, document.querySelector('#root'));
