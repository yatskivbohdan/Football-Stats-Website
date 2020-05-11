import React from 'react';

import ContactBar from './ContactBar/fs-footer-contact-bar';
import './fs-footer.css';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <ContactBar></ContactBar>
      </footer>
    );
  }
}
