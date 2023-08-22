import { Component } from 'react';
import { Wrapper, Text, InputName, Button } from './ContactForm.styled';

export class ContactForm extends Component {
  render() {
    return (
      <Wrapper>
        <Text>Name</Text>

        <InputName
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.props.changeName}
        />

        <Text>Number</Text>

        <InputName
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={this.props.changeNumber}
        />

        <Button onClick={this.props.addContact}>Add contact</Button>
      </Wrapper>
    );
  }
}
