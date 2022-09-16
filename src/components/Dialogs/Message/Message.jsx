
import classes from "./../Dialogs.module.css";


const Message = (props) => {
  return <div className={classes.chat}>{props.message}</div>;
};



export default Message;


