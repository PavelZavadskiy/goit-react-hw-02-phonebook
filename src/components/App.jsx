import { Component } from 'react';
import { WrapperRoot } from './App.styled';
// import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';

import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  handleAddContact = contact => {
    console.log('handlerAddContact');
    this.setState(prev => {
      return { contacts: prev.contacts.concat(contact), name: '', number: '' };
    });
  };

  handleChangeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  handleDeleteContact = id => {
    console.log(id);
    this.setState(prev => ({ contacts: prev.contacts.filter(item => item.id !== id) }));
  };

  render() {
    return (
      <WrapperRoot>
        <h1>Phonebook</h1>
        <ContactForm
          addContact={this.handleAddContact}
          contacts={this.state.contacts}
          // changeName={this.handleChangeName}
          // changeNumber={this.handleChangeNumber}
        />
        <Filter changeFilter={this.handleChangeFilter} />
        <ContactList
          contacts={
            this.state.filter.length > 0
              ? this.state.contacts.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
              : this.state.contacts
          }
          onDelete={this.handleDeleteContact}
        />
        {/* <Section
          title="Phonebook"
          children={[
            <ContactForm addContact={this.handleAddContact} changeName={this.handleChangeName} />,
            <ContactList />,
          ]}
        /> */}
      </WrapperRoot>
    );
  }
}
