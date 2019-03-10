import React, { Component } from 'react';

import style from './chat.module.scss';

class Chat extends Component {

  state = {
    text: '',
  }

  showMessages = (messages) => {
    return messages.map((message, i) => 
      <div key={i} className={style.chat__window_message}>
        { message.text }
      </div>
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      text: this.text.value,
    };

    this.props.submit(newMessage);
    this.text.value = '';
  };

  render() {
    return(
      <section className={style.chat}>
        <div className={style.chat__window}>
          { this.showMessages(this.props.messages) }
        </div>
        <form
        onSubmit={ this.handleSubmit } 
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