import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Wrapper, Text, InputName, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChangeName = e => {
    console.log('handleChangeName');
    // console.log(e.target.validity.valid);
    this.setState({ name: e.target.value });
  };

  handleChangeNumber = e => {
    console.log('handleChangeNumber');
    // console.log(e.target.validity.valid);
    this.setState({ number: e.target.value });
  };

  handleClickAddContact = e => {
    e.preventDefault();
    console.log(e);
    const { contacts } = this.props;
    console.log(contacts);
    if (contacts.find(contact => contact.name === this.state.name) === undefined) {
      const item = { id: nanoid(), name: this.state.name, number: this.state.number };
      this.props.addContact(item);
    } else {
      alert(`${this.state.name} is already in contacts.`);
    }
  };

  render() {
    return (
      <Wrapper onSubmit={this.handleClickAddContact}>
        <Text>Name</Text>
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={this.handleChangeName}
        />
        <Text>Number</Text>
        <InputName
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.handleChangeNumber}
        />
        <Button
          type="Submit"
          // onClick={() => {
          //   this.handleClickAddContact();
          // }}
        >
          Add contact
        </Button>
      </Wrapper>
    );
  }
}
