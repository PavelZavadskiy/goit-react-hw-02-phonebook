import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  border: 2px solid black;
  padding: 20px;
  gap: 10px;
`;

export const Text = styled.p`
  margin: 0;
`;

export const InputName = styled.input``;

export const Button = styled.button`
  type="submit";
  cursor: pointer; 
  padding: 8px;
  border-radius: 6px;
  border-color: lightgray;
`;
