import React, { Component } from 'react';

// Styles
import style from './intro.module.scss';

class Intro extends Component {

  // Manage the input values and send them to the father.
  handleSubmit = (e) => {
    e.preventDefault();

    if (this.userOne.value !== '' && this.userTwo.value !== '') {
      const users = [
        { name: this.userOne.value },
        { name: this.userTwo.value }
      ];
      this.props.submit(users);
    };
  };


  render() {
    return(
      <form className={style.intro} onSubmit={this.handleSubmit}>
        <p className={style.intro__title}>Pick the username for each member of the chat.</p>
        <input 
          type="text" 
          className={style.intro__input}
          placeholder="user one" 
          ref={input => this.userOne = input} 
        />
        <input 
          type="text" 
          className={style.intro__input}
          placeholder="user two" 
          ref={input => this.userTwo = input}
        />
        <button 
          type="submit" 
          className={style.intro__button}
        >let's chat</button>
      </form>
    )
  }
};

export default Intro;