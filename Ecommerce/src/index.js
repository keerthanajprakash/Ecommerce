import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import PropTypes from 'prop-types';


function Calculate(props){
    return(
    <div>
    <label>Additions:{props.a+props.b}</label><br></br>
    <label>Subtraction:{props.a-props.b}</label><br></br>
    <label>Multiplication:{props.a*props.b}</label><br></br>
    <label>Division:{props.a/props.b}</label><br></br>
    </div>
    )
}
function Show(){
return(
<div><Calculate a="10" b={2}></Calculate></div>
)
}

Calculate.propTypes={
    a:PropTypes.number,
    b:PropTypes.number
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);
