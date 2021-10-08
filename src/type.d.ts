interface MusicInterface {
  id: number;
  title: string;
  album: {
    cover: string;
    title: string;
  };
  artist: {
    name: string;
  };
  duration: number;
  link: string;
  preview: string;
}

type MusicState = {
  musics: MusicInterface[];
};

type MusicAction = {
  type: string;
  music: MusicInterface;
};

type DispatchType = (args: MusicAction) => MusicAction;
