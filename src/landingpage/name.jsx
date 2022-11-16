import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

const Namebar = () => {
    const [value, setValue] = useState('');
    //const [modal, setModal] = useState('');
    const navigate = useNavigate();

    const handleChange=(e)=>{
        e.preventDefault();
        setValue(e.target.value);
    }

    const modalCheck = (e) =>{
        e.preventDefault();
        const abcd =  value;
        if(abcd.toLowerCase() === "shivani"){
            navigate('/schedule');
        }
        else{
            setValue('');
            navigate('/');
        }
    } 
    return (
        <div className="namebar">
            <form className="searchfield form__group field" onSubmit = {modalCheck}>
                <input type="text" className = "form__field" id="fname" placeholder = "First Name" value={value} onChange = {handleChange} />
                <label htmlFor="fname" className="form__label">First Name</label>
            </form>
        </div>
    );
}

export default Namebar;