import { NavLink } from "react-router-dom";
import classes from "./Dialogs.module.css";

const Users = (props) => {
  return (
    <div className={classes.item}>
      <NavLink to={"/Dialogs/" + props.id}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
    return (
        <div className={classes.chat}>{props.message}</div>
    )
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.usersItems}>
        <Users  name='John' id='1'/>
        <Users  name='Sam' id='2'/>
        <Users  name='Leo' id='3'/>
        <Users  name='Nick' id='4'/>
        <Users  name='Max' id='5'/>
        <Users  name='Mona' id='6'/>
        <Users  name='Tomy' id='7'/>
      </div>
      <div className={classes.chats}>
        <Message message='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore repudiandae iste eligendi odio'/>
        <Message message='At, mollitia dignissimos harum iure autem sunt enim dicta facere dolor.'/>
        <Message message='Maiores et ullam accusamus reiciendis consectetur!'/>
      </div>
    </div>
  );
};

export default Dialogs;
