import React from "react";

export default function VBrokeComp() {
  const author = { name: "Abhay R", ph: 8084240000 };
  const text = "hi";
  const date = new Date(); //creating date object
  // date.toISOString
  return (
    <>
    <br/>
      <p />
      <Comment author={author} text={text} date={date} />
      <br/>
    </>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{props.date.toISOString()}</div>
    </div>
  );
}

function Avatar(props) {
  return <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />;
}

//naming props from the component’s own point of view rather than the context in which it is being used.

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">{props.user.name}</div>
    </div>
  );
}

// function Comment(props){
//     return (
//             <div className="Comment">
//               <div className="UserInfo">
//                 <img className="Avatar"
//                   src={props.author.avatarUrl}
//                   alt={props.author.name}
//                 />
//                 <div className="UserInfo-name">
//                   {props.author.name}
//                 </div>
//               </div>
//               <div className="Comment-text">
//                 {props.text}
//               </div>
//               <div className="Comment-date">
//                 {formatDate(props.date)}
//               </div>
//             </div>
//           );
// }

// Extracting components might seem like grunt work at first,
//but having a palette of reusable components pays off in larger apps.
//A good rule of thumb is that if a part of your UI is used several times (Button, Panel, Avatar),
//or is complex enough on its own (App, FeedStory, Comment), it is a good candidate to be extracted to
//a separate component.
