import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { FaDeezer } from 'react-icons/fa';

import { MdPlaylistAdd } from 'react-icons/md';

import { PlayPreview } from '../PlayPreview';

import {
  Add,
  Artist,
  Container,
  Content,
  Duration,
  Flex,
  FullMusic,
  Imagem,
  Leave,
  Title,
} from './styles';

type Props = {
  music: MusicInterface;
  addMusic: (music: MusicInterface) => void;
};

export const Music: React.FC<Props> = ({ music, addMusic }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();

  const saveMusic = React.useCallback(
    // eslint-disable-next-line no-shadow
    (music: MusicInterface) => dispatch(addMusic(music)),
    [addMusic, dispatch]
  );

  const musics: readonly MusicInterface[] = useSelector(
    (state: MusicState) => state.musics,
    shallowEqual
  );

  const FilteredList = musics.filter((item: MusicInterface) => {
    return item.title.toLowerCase().includes(music.title.toLowerCase());
  });

  return (
    <Container>
      <PlayPreview url={music.preview} />
      <Imagem src={music.album.cover} alt="Capa do album" />
      <Content>
        <Title>{music.title}</Title>
        <Artist>{music.artist.name}</Artist>
        <Flex />
        <Duration>
          {new Date(music.duration * 1000).toISOString().substr(14, 5)} min
        </Duration>
      </Content>
      <div>
        {!(FilteredList.length > 0) ? (
          <Add onClick={() => saveMusic(music)}>
            <MdPlaylistAdd size={25} />
          </Add>
        ) : (
          <Leave>
            <MdPlaylistAdd size={25} />
          </Leave>
        )}
        <Flex />
        <div>
          <FullMusic onClick={() => window.open(music.link, '_blank')}>
            <span>Ouça no deezer </span>
            <FaDeezer />
          </FullMusic>
        </div>
      </div>
    </Container>
  );
};
