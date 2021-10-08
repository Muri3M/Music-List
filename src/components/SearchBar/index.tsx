import React, { InputHTMLAttributes, useRef } from 'react';

import { Container } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchBar: React.FC<InputProps> = ({ ...rest }) => {
  const inputRef = useRef(null);

  return (
    <Container>
      <input ref={inputRef} {...rest} />
    </Container>
  );
};

export default SearchBar;
