import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function ({ seconds }) {
  console.log(seconds);
  localStorage.setItem('videoplayer-current-time', seconds);
};

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(onPlay, 1000));
