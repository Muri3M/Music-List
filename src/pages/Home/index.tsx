/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { FaSearch } from 'react-icons/fa';

import api from '../../services/api';

import { Music } from '../../components/Music';
import { addMusic } from '../../store/actionCreators';
import SearchBar from '../../components/SearchBar';
import Header from '../../components/Header';

import {
  Button,
  Container,
  Message,
  Search,
  Scroll,
  Title,
  TitleBusca,
} from './styles';

interface deezerObject {
  data: MusicInterface[];
}

const Home: React.FC = () => {
  const [object, setObject] = useState<deezerObject>({
    data: [],
  });
  const [musicArray, setMusicArray] = useState<MusicInterface[]>([]);

  const [search, setSearch] = useState('');
  const [input, setInput] = useState('');

  const [searchIndex, setSearchIndex] = useState(10);

  useEffect(() => {
    if (search.length > 0) {
      api
        .get('search', { params: { index: 0, limit: 10, q: search } })
        .then((Response) => {
          setObject(Response.data);
          setSearchIndex(10);
        });
    } else {
      api
        .get('chart/0/tracks', { params: { index: 0, limit: 10 } })
        .then((Response) => {
          setObject(Response.data);
          setSearchIndex(10);
        });
    }
  }, [search]);

  useEffect(() => {
    setMusicArray(object.data);
  }, [object]);

  const list = musicArray.map((music: MusicInterface) => (
    <Music key={music.id} music={music} addMusic={addMusic} />
  ));

  const fetchMoreData = () => {
    if (search.length > 0) {
      api
        .get('search', {
          params: { index: searchIndex, limit: 10, q: search },
        })
        .then((Response) => {
          const newObject: deezerObject = Response.data;
          setMusicArray(musicArray.concat(newObject.data));
        });
    } else {
      api
        .get('chart/0/tracks', {
          params: { index: searchIndex, limit: 10 },
        })
        .then((Response) => {
          const newObject: deezerObject = Response.data;
          setMusicArray(musicArray.concat(newObject.data));
        });
    }
    setSearchIndex(searchIndex + 10);
  };

  function handleSubmit(event: any) {
    event.preventDefault();
    setSearch(input);
  }

  return (
    <>
      <Container>
        <Header />
        <form onSubmit={handleSubmit}>
          <Search>
            <SearchBar
              placeholder="Buscar por álbum, artista, ou título da música"
              value={input}
              onChange={(event) => setInput(event.target.value.trimStart())}
            />
            <Button type="submit">
              <FaSearch />
            </Button>
          </Search>
        </form>
        {search.length > 0 ? (
          <TitleBusca>Busca</TitleBusca>
        ) : (
          <Title>MAIS OUVIDAS</Title>
        )}
        {list && (
          <Scroll>
            <InfiniteScroll
              dataLength={list.length}
              next={fetchMoreData}
              hasMore
              loader={
                list && list.length === 0 ? (
                  search !== '' && (
                    <Message> Não foi encontrado {`"${search}"`} </Message>
                  )
                ) : (
                  <Message>Loading...</Message>
                )
              }
              endMessage={<Message> Você chegou ao fim</Message>}
            >
              {list}
            </InfiniteScroll>
          </Scroll>
        )}
      </Container>
    </>
  );
};

export default Home;
