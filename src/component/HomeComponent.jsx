import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Home.css'
const HomeComponent = () =>{
    return (
    <>
    <div>
        <h1 id='heading'>Quiz App</h1>
        <Link to='/quiz'><button id='playbtn'>Play</button></Link>
    </div>
    </>
    )
}
export default HomeComponent;