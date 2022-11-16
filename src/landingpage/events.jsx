import React from "react";
import { useNavigate } from "react-router-dom";
import eventlist from "./eventbglist"

const Events = (props) => {
    const scdStyle = {
        backgroundImage: `url(${props.background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
    }
    const navigate = useNavigate();
    const NavToEvent = (p) =>{
        if(p.currentTarget.id == "Special"){
            navigate('/personal');
        }
        else{
            eventlist.forEach(element => {
                if(p.currentTarget.id == element.city){
                    navigate('/eventpage', {state:{background: element.background, city: element.city, song: element.song}})
                }
            });
        }
    }
    
    return(
        <div id={props.city} onClick={NavToEvent}>
            <div className="events" style={scdStyle}></div>
            <div className="eventPlace">{props.city}</div>
        </div>
    );
}
export default Events;