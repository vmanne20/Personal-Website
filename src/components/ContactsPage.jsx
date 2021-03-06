import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import ContactsContent from './ContactsContent';

class ContactsPage extends Component {
    render() {
        const { name } = this.props;
        return (
            <section id={name}>
            <div id={name} className={name}>
                <SectionHeader name={name} color="white"/>
                <ContactsContent/>
            </div>
            </section>
        );
    }
}

export default ContactsPage;