import React from 'react';

import './fs-footer.css'

import ContactBar from './fs-footer-contact-bar'


export default class Footer extends React.Component {
    constructor() {
        super();

    }
    
    render() {
        return (
            <footer className="footer">
           <ContactBar></ContactBar>
           </footer>
        );
    }
}
