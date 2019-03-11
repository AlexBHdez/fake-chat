import React, { Component } from 'react';

import style from './chat.module.scss';
import classNames from 'classnames/bind';
const classes = classNames.bind(style);

class Chat extends Component {

  handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      from: this.props.userFrom,
      date: new Date(),
      text: this.text.value,
    };

    this.props.submit(newMessage);
    this.text.value = '';
  };

  isMe = (user) => {
    const { userFrom } = this.props;
    return user !== userFrom.name ? true : false;
  };

  showDate = (date) => {
    return ` ${date.getHours()}:${date.getMinutes()}`;
  };

  showMessages = (messages) => {
    return messages.map((message, i) => 
      <div 
        key={i}
        className={classes(
          style.chat__window_message,
          {[style.chat__window_received]: this.isMe(message.from.name)}
        )}
      >
        <span className={style.chat__window_message_info}>
          { this.isMe(message.from.name) ? message.from.name : 'You' }
          { this.showDate(message.date) }
        </span>
        <p className={style.chat__window_message_text}>{ message.text }</p>
      </div>
    );
  };

  render() {
    const { messages } = this.props;
    return(
      <section className={style.chat}>
        <div className={style.chat__window} >
          { this.showMessages(messages) }
        </div>
        <form
        onSubmit={this.handleSubmit} 
        className={style.chat__write} >
          <input 
            type="text"
            placeholder="Type a message"
            className={style.chat__write_input}
            ref={input => this.text = input}
          />
          <button 
            type="submit" 
            className={style.chat__write_button}
          ></button>
        </form>
      </section>
    )
  }
}

export default Chat;