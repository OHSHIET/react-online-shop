import React, { useEffect, useState } from 'react';
import $ from 'jquery';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

export default function Footer() {
    return (
        <footer id="sticky-footer" className="fixed-bottom flex-shrink-0 py-4 bg-dark text-white-50">
            <div className="container footer-flex">
                <div className="footer-txt"><a className="footer-link">Cool Link 1</a></div>
                <div className="footer-copyright">Copyright &copy; Your Website</div>
                <div className="footer-txt"><a className="footer-link">Cool Link 2</a></div>
            </div>
        </footer>
    );
}