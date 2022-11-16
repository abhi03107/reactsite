import React from "react";
import Events from "./events";
import eventlist from "./eventlist";
import special from '../img/special.jpg'

const Schedule = () => {
  const listItems = eventlist.map((eventlist) => {
    const data ={
      background: eventlist.background,
      city: eventlist.city
    };
    return <Events {...data} />
  });
  const specialData = {
    background: special,
    city: "Special"
  };
  return (
    <div className="schedule">
      <div className="eventswrap">
        {listItems}
      </div>
      <div className="specialEvent">
        <Events {...specialData}/>
      </div>
    </div>
  );
}

export default Schedule;
