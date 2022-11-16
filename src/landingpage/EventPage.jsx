import React from "react";
import {useLocation} from 'react-router-dom';
import messages from "./messages";


const EventPage = () => {
  const location = useLocation();
  const scdStyle = {
      backgroundColor: "rgba(20,20,20,0.5)",
      backgroundImage: `url(${location.state.background})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundBlendMode : "multiply"
  };
  var messageText = null;
  messages.forEach(element =>{
      if(element.city == location.state.city){
        messageText = element.text;
      }
  });
  setTimeout(togglePlay,5000);
  function togglePlay(){
      const audioControl = document.querySelector(`#${"eventSong"}`);
      if(audioControl) {
          //Register the changed source
          audioControl.play();
      }
  }
  console.log(location.state.song);
  return(
      <div className="eventpage">
        <div className="eventbackground" style={scdStyle}>
        </div>
        <div className="randombox"></div>
        <p className="message" dangerouslySetInnerHTML={{__html: messageText}}></p>
        <audio id="eventSong" src={location.state.song}/>
      </div>
      
  );
}
export default EventPage;
