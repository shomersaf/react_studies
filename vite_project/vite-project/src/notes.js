import { useState } from "react";
import "./comments.css";
export default function Comments() {
    
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [fSize, setFSize] = useState(10);
  const [allComments, setAllComments] = useState([]);
  //   console.log(allComments);
  function setUserNameInput(event) {
    const value = event.target.value;
    setUserName(value);
  }
  function setCommentInput(event) {
    const value = event.target.value;
    setComment(value);
  }
  function addCommentHandler() {
    if (!userName || !comment) return;


    const newComment = { userName, comment, fSize };
    setAllComments([...allComments, newComment]);
    setUserName("");
    setComment("");
    setFSize(10);
  }

  

  return (
    <div style={{ padding: "20px" }}>
      <div>
        <h3> Add Comment </h3>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Name:</span>{" "}
          <input type={"text"} value={userName} onChange={setUserNameInput} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>Comment:</span>
          <input type={"text"} value={comment} onChange={setCommentInput} />
        </div>
        <div style={{ textAlign: "right" }}>
          <button onClick={addCommentHandler}> Add Comment </button>
        </div>
      </div>
      <div>
        <h3> Comments:</h3>
        {allComments.map((singleComment) => {
          return (
            <SingleComment
              key={singleComment.comment}
              {...singleComment}
              deleteSingleComment={(
                currentUserToDelete,
                currentCommentToDelete
              ) => {
                const newComments = allComments.filter(
                  (c) =>
                    c.userName !== currentUserToDelete &&
                    c.comment !== currentCommentToDelete
                );
                
                setAllComments(newComments);
                
              }}
              
              increase={()=>{
               // setFSize(10);
              singleComment.fSize++;
              
              setFSize(singleComment.fSize);
            }}
              decrease={()=>{
               // setFSize(10);
                singleComment.fSize--;
               
                setFSize(singleComment.fSize);
              }}
              
            />
          );
        })}
       
      </div>
    </div>
  );
}

function SingleComment(props) {
 
  const { userName, comment, fSize } = props;

  return (
    
    <div className = "commentsDiv">
      <span>{userName}</span>
      <p style={{fontSize : props.fSize}}>{comment}</p>
      <button
        onClick={() => {
          props.deleteSingleComment(userName, comment, fSize);
        }}
      >
        {" "}
        Delete{" "}
      </button>
      <button className ="textButton" onClick={props.increase}> + </button>
      <button className ="textButton" onClick={props.decrease}> - </button>
    </div>
  );
}