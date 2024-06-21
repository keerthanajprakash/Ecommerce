import React from 'react';
import './index.css';
function UserInfo(props){
        return(
            <div>
                <label>Username: {props.name}</label><br></br>
                <label>Age: {props.age}</label>
            </div>
    )
}

export default UserInfo;