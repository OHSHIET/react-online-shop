import React, { useEffect, useState } from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';


export default function MainContent(props) {
    return (
        <div className="content">
            <div className="container-fluid">
                <div className="row" style={{padding: 0}}>
                    <div className="col-2">
                        {props.children[0]}
                    </div>
                    <div className="col-10 text-center">
                        {props.children[1]}
                    </div>
                </div>
            </div>
        </div>
    );
}