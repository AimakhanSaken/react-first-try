import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = function () {
  return (
    <div className={classes.general}>
      <h3>My posts</h3>
      <div className={classes.textButton}>
        <textarea>your news</textarea>
        <button>publish</button>
      </div>
      
      <div className={classes.posts}>
          <Post message= 'Hello World!' likeCounts=' 3 👍'/>
          <Post message= "It's my first post" likeCounts= ' 10 👍'/>
      </div>
    </div>
  );
};

export default MyPosts;
