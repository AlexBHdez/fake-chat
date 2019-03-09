import React, { Component } from 'react';

import style from './chat.module.scss';

class Chat extends Component {

  state = {
    messages: [
      { from: '', to: '', date: '', text: 'Hola' }
    ],
  };

  showMessages = () => {
    const { messages } = this.state;
    return messages.map((message, i) => 
      <div key={i} className={style.chat__window_message}>
        { message.text }
      </div>
    );
  };

  render() {
    return(
    <section className={style.chat}>
      <div className={style.chat__window}>
        { this.showMessages() }
      </div>
      <div className={style.chat__write}>
        <input type="text" className={style.chat__write_input} />
        <button type="button">send</button>
      </div>
    </section>
    );
  };
};

export default Chat;