import React, { Component } from 'react';

import style from './chat.module.scss';
import classNames from 'classnames/bind';
const classes = classNames.bind(style);

class Chat extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      from: this.props.userFrom,
      text: this.text.value,
    };

    this.props.submit(newMessage);
    this.text.value = '';
  };

  whoIs = (user) => {
    if (user !== this.props.userFrom.name) {
      return true;
    } else {
      return false;
    }
  };

  showMessages = (messages) => {
    return messages.map((message, i) => 
      <div 
        key={i}
        className={classes(
          style.chat__window_message,
          {[style.chat__window_received]: this.whoIs(message.from.name)}
        )}
      >
        <span className={style.chat__window_message_author}>
          { this.whoIs(message.from.name) ? message.from.name : 'You' }
        </span>
        <p>{ message.text }</p>
      </div>
    );
  };

  render() {
    return(
      <section className={style.chat}>
        <div className={style.chat__window}>
          { this.showMessages(this.props.messages) }
        </div>
        <form
        onSubmit={this.handleSubmit} 
        className={style.chat__write} >
          <input 
            type="text" 
            className={style.chat__write_input}
            ref={input => this.text = input}
          />
          <button type="submit">send</button>
        </form>
      </section>
    )
  }
}

export default Chat;