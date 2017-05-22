import React, { Component } from 'react';

const Button = (props) => 
<button onClick={props.handleClick} >{props.text}</button>
export default Button;