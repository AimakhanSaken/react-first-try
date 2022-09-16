import Message from "./Message/Message";
import React from "react";
import classes from "./Dialogs.module.css";
import Users from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <Users name={d.name} id={d.id} />
  ));
  let messagesElements = props.state.messages.map((m) => (
    <Message message={m.message} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };

  return (
    <div>
      <div className={classes.dialogs}>
        <div className={classes.usersItems}>{dialogsElements}</div>
        <div className={classes.chats}>{messagesElements}</div>
      </div>
      <div className={classes.sendText}>
      <textarea
          className={classes.messageTextarea}
          ref={newMessageElement}
        ></textarea>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Dialogs;
