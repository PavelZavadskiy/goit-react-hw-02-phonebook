import { Wrapper, Title } from './Section.styled';
// const { Component } = require('react');

export const Section = props => (
  <Wrapper>
    <Title>{props.title}</Title>
    {props.children}
  </Wrapper>
);
