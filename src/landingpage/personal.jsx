import React from "react";
import flower from "../img/flower.png";
import shivani from "../img/shivani.jpg";
import kasoor from "../audio/kasoor.mp3";


const Personal = () => {
    setTimeout(togglePlay,18500);
    function togglePlay(){
        const audioControl = document.querySelector(`#${"eventSong"}`);
        if(audioControl) {
            //Register the changed source
            audioControl.play();
        }
    }
    return(
    <div className="personal">
        <div class="border">
            <div class="flower1">
                <img src={flower} alt="Side Flower"/>
            </div>
            <div class="flower2">
                <img src={flower} alt="Side Flower"/>
            </div>
            <p class="to">To,</p>
            <div class="text">
                <p class="text-1">Hi! Stupid</p>
                <p class="text-2">Seems like finally managed to survive through this.</p>
                <p class="text-3">Well I hope this brought a small smile on your face and wish to stay like that forever</p>
                <p class="text-4">I don't have anything to say, So here's the last song for you. Enjoy!</p>
            </div>
        </div>
        <div className="image">
            <img src={shivani} alt="PersonalPhoto"/>
        </div>
        <audio id="eventSong" src={kasoor}/>
        <div className="footer"><p>S H I V A N I&emsp;P A H A D E</p></div>
    </div>
    );
}

export default Personal;