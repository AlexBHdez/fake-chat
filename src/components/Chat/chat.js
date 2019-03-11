import React, { Component } from 'react';

// Style
import style from './chat.module.scss';
import classNames from 'classnames/bind';
const classes = classNames.bind(style);

class Chat extends Component {
  
  // Manage the submit on click button after type the message
  handleSubmit = (e) => {
    e.preventDefault();

    const { userFrom, chatId } = this.props;

    // Store the data from props and from the input ref.
    const newMessage = {
      from: userFrom,
      id: chatId, 
      date: new Date(),
      text: this.text.value,
    };

    // Pass the data to the father and put the input value empty.
    this.props.submit(newMessage);
    this.text.value = '';
  };
  
  // Just to scroll to bottom when overflows the chat window.
  scrollToBottom = () => {
    const chatWindow = document.querySelectorAll('#chatWindow');
    
    if (chatWindow) {
      setTimeout(() => {
        chatWindow.forEach(elem => {
          elem.scrollTop = elem.scrollTopMax;
        })
      }, 10)
    }
  };

  // To know if it is my message or not and return a boolean.
  isMe = (messageId) => {
    const { chatId } = this.props;
    return chatId !== messageId ? true : false;
  }

  // To render a formatted date.
  showDate = (date) => {
    return ` ${date.getHours()}:${date.getMinutes()}`;
  };

  // To show the messages through the received props
  showMessages = (messages) => {
    return messages.map((message, i) => 
      <div 
        key={i}
        className={classes(
          style.chat__window_message,
          {[style.chat__window_received]: this.isMe(message.id)}
        )}
      >
        <span className={style.chat__window_message_info}>
          { this.isMe(message.id) ? message.from.name : 'You' }
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
        <div className={style.chat__window} id="chatWindow" onChange={this.scrollToBottom()} >
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