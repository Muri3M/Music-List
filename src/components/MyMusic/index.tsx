import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { FaDeezer } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';

import { PlayPreview } from '../PlayPreview';

import {
  Artist,
  Container,
  Content,
  Duration,
  Flex,
  FullMusic,
  Imagem,
  Remove,
  Title,
} from './styles';

type Props = {
  music: MusicInterface;
  removeMusic: (music: MusicInterface) => void;
};

export const MyMusic: React.FC<Props> = ({ music, removeMusic }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch: Dispatch<any> = useDispatch();
  const deleteMusic = React.useCallback(
    // eslint-disable-next-line no-shadow
    (music: MusicInterface) => dispatch(removeMusic(music)),
    [dispatch, removeMusic]
  );
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
        <Remove onClick={() => deleteMusic(music)}>
          <MdCancel />
        </Remove>
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
