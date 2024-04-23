import React from 'react';
import '../App.css';
import { Nav, Nav2 } from './../Components/nav';
import Ibar from './../Components/inputbar';
import './selfstyling.css';

function Page2() {

    return (
        <div className="mainc">
            <Nav></Nav>
            <Nav2></Nav2>
            <Ibar></Ibar>
        </div>

    );
}

export default Page2;
