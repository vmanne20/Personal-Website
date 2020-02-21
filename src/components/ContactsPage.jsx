import React, {Component} from 'react';
import '../css/index.css';
import SectionHeader from './SectionHeader';
import ContactsContent from './ContactsContent';

class ContactsPage extends Component {
    render() {
        return (
        <div className="ContactsPage">
            <SectionHeader name="Contacts" color="white"/>
            <ContactsContent/>
        </div>
        );
    }
}

export default ContactsPage;