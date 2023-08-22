import { Component } from 'react';
import { Item, Title, Text, List } from './ContactList.styled';

export class ContactList extends Component {
  render() {
    const { contacts } = this.props;
    return (
      <>
        <Title>Contacts</Title>
        <List>
          {contacts.map(item => (
            <Item key={item.id}>
              <Text>
                {item.name}: {item.number}
              </Text>
            </Item>
          ))}
        </List>
      </>
    );
  }
}
