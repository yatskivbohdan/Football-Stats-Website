import React from 'react';


import InstaLogo from '../assets/footer-icons/insta-logo.png'
import FacebookLogo from '../assets/footer-icons/facebook-logo.png'
import InLogo from '../assets/footer-icons/linkedin-logo.png'
import GitLogo from '../assets/footer-icons/github-logo.png'


const Contact = ({name, href, logo}) => (
    <a className="contact-container" href={(href)} target="_blank"><img className="contact-logo" src ={logo} alt={name}/></a>
    );

export default class ContactBar extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [{
                name: 'insta',
                href: 'https://www.instagram.com/_bohdan_yatskiv_/',
                logo: InstaLogo,
            },{
                name: 'facebook',
                href: 'https://www.facebook.com/bohdanfootball',
                logo: FacebookLogo,
            },{
                name: 'linkedin',
                href: 'https://www.linkedin.com/in/bohdan-yatskiv-6bb698195/',
                logo: InLogo,
            },
            {
                name: 'github',
                href: 'https://github.com/yatskivbohdan',
                logo: GitLogo,
            },/*{
                name: 'telegram',
                href: 'https://google.com',
                logo: TgLogo,
            },*/
        ]
        }
    }

    render() {
        return(
            <div className="header-contact-bar-container">
                
                <div className="header-contact-bar">
                    <div className="contact-bar-signature">Bohdan Yatskiv(2020)</div>
                    {this.state.items.map((item)=> (
                        <Contact name={item.name} href={item.href} logo={item.logo}></Contact>
                        ))}
            </div>
           </div>
        );
    }
}
    