import React, { useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { MyMusic } from '../../components/MyMusic';
import { removeMusic } from '../../store/actionCreators';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';

import { Container, Title } from './styles';

const MyPlayList: React.FC = () => {
  const [search, setSearch] = useState('');

  const musics: readonly MusicInterface[] = useSelector(
    (state: MusicState) => state.musics,
    shallowEqual
  );
  const FilteredList = musics.filter((item: MusicInterface) => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.album.title.toLowerCase().includes(search.toLowerCase()) ||
      item.artist.name.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <>
      <Container>
        <Header />
        <SearchBar
          placeholder="Buscar em minha lista por álbum, artista, ou título da música"
          value={search}
          onChange={(event) => setSearch(event.target.value.trimStart())}
        />
        <Title>Minhas Musicas</Title>
        {FilteredList.map((music: MusicInterface) => (
          <MyMusic key={music.id} music={music} removeMusic={removeMusic} />
        ))}
      </Container>
    </>
  );
};

export default MyPlayList;
