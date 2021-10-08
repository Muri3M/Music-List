import React from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

import { Container, Button } from './styles';

const Header: React.FC = () => {
  const history = useHistory();

  return (
    <Container>
      <img src={logo} alt="Logo" />

      <Button onClick={() => history.push('/')}>⠀HOME⠀</Button>
      <Button onClick={() => history.push('/MinhaPlayList')}>
        ⠀Minhas Musicas
      </Button>
    </Container>
  );
};

export default Header;
