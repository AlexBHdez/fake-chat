(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={chat:"chat_chat__3ipiM",chat__window:"chat_chat__window__7XEvZ",chat__window_message:"chat_chat__window_message__3CVK3",chat__window_message_info:"chat_chat__window_message_info__2_Q1i",chat__window_message_text:"chat_chat__window_message_text__1-UZE",chat__window_received:"chat_chat__window_received__3At0b",chat__write:"chat_chat__write__324ve",chat__write_input:"chat_chat__write_input__A8laM",chat__write_button:"chat_chat__write_button__3vLKh"}},14:function(e,t,a){e.exports=a(21)},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(2),c=a(3),s=a(5),o=a(4),_=a(6),i=a(0),u=a.n(i),h=a(10),l=a.n(h),m=(a(20),a(8)),d=a.n(m),p=function(){return u.a.createElement("header",{className:d.a.header},u.a.createElement("a",{href:"/",className:d.a.header__brand},"fakeChat"),u.a.createElement("span",{className:d.a.header__copy},"Made with love (and react) by ",u.a.createElement("a",{href:"https://github.com/AlexBHdez/",target:"_blank",rel:"noopener noreferrer"},"@AlexBHdez")))},w=a(11),f=a(1),b=a.n(f),v=a(12),g=a.n(v).a.bind(b.a),E=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),_=0;_<n;_++)c[_]=arguments[_];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(e){e.preventDefault();var t=a.props,n={from:t.userFrom,id:t.chatId,date:new Date,text:a.text.value};a.props.submit(n),a.text.value=""},a.scrollToBottom=function(){var e=document.querySelectorAll("#chatWindow");e&&setTimeout(function(){e.forEach(function(e){e.scrollTop=e.scrollTopMax})},10)},a.isMe=function(e){return a.props.chatId!==e},a.showDate=function(e){return" ".concat(e.getHours(),":").concat(e.getMinutes())},a.showMessages=function(e){return e.map(function(e,t){return u.a.createElement("div",{key:t,className:g(b.a.chat__window_message,Object(w.a)({},b.a.chat__window_received,a.isMe(e.id)))},u.a.createElement("span",{className:b.a.chat__window_message_info},a.isMe(e.id)?e.from.name:"You",a.showDate(e.date)),u.a.createElement("p",{className:b.a.chat__window_message_text},e.text))})},a}return Object(_.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.messages;return u.a.createElement("section",{className:b.a.chat},u.a.createElement("div",{className:b.a.chat__window,id:"chatWindow",onChange:this.scrollToBottom()},this.showMessages(t)),u.a.createElement("form",{onSubmit:this.handleSubmit,className:b.a.chat__write},u.a.createElement("input",{type:"text",placeholder:"Type a message",className:b.a.chat__write_input,ref:function(t){return e.text=t}}),u.a.createElement("button",{type:"submit",className:b.a.chat__write_button})))}}]),t}(i.Component),y=a(7),O=a.n(y),x=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,c=new Array(n),_=0;_<n;_++)c[_]=arguments[_];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(e){if(e.preventDefault(),""!==a.userOne.value&&""!==a.userTwo.value){var t=[{name:a.userOne.value},{name:a.userTwo.value}];a.props.submit(t)}},a}return Object(_.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement("form",{className:O.a.intro,onSubmit:this.handleSubmit},u.a.createElement("p",{className:O.a.intro__title},"Pick the username for each member of the chat."),u.a.createElement("input",{type:"text",className:O.a.intro__input,placeholder:"user one",ref:function(t){return e.userOne=t}}),u.a.createElement("input",{type:"text",className:O.a.intro__input,placeholder:"user two",ref:function(t){return e.userTwo=t}}),u.a.createElement("button",{type:"submit",className:O.a.intro__button},"let's chat"))}}]),t}(i.Component),j=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,_=new Array(c),i=0;i<c;i++)_[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(_)))).state={users:[],messages:[]},a.showChats=function(){return a.state.users.map(function(e,t){return u.a.createElement(E,{key:t,userFrom:e,chatId:t,messages:a.state.messages,submit:a.send})})},a.users=function(e){a.setState({users:e})},a.send=function(e){""!==e.text&&a.setState({messages:[].concat(Object(n.a)(a.state.messages),[e])})},a}return Object(_.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state.users;return u.a.createElement(i.Fragment,null,u.a.createElement(p,null),u.a.createElement("main",null,e.length>1?this.showChats():u.a.createElement(x,{submit:this.users})))}}]),t}(i.Component);l.a.render(u.a.createElement(j,null),document.querySelector("#root"))},7:function(e,t,a){e.exports={intro__title:"intro_intro__title__3Ky0L",intro__input:"intro_intro__input__XbwRs",intro__button:"intro_intro__button__12ESv"}},8:function(e,t,a){e.exports={header:"header_header__biqVs",header__brand:"header_header__brand__3hgnH",header__copy:"header_header__copy__J3zC7"}}},[[14,1,2]]]);
//# sourceMappingURL=main.d8371ce1.chunk.js.map