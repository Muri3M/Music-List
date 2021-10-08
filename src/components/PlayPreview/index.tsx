import React, { useEffect, useState } from 'react';
import { BsFillPauseFill, BsPlay } from 'react-icons/bs';

import { Container } from './styles';

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [playing, toggle] as const;
};

interface Props {
  url: string;
}

export const PlayPreview: React.FC<Props> = ({ url }) => {
  const [playing, toggle] = useAudio(url);
  return (
    <div>
      <Container onClick={toggle}>
        {playing ? <BsFillPauseFill size={40} /> : <BsPlay size={40} />}
      </Container>
    </div>
  );
};
