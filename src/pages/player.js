import 'pod-comm-offline-sdk/dist/node/css/style.css';
import 'pod-comm-offline-sdk/dist/node/css/material-icons.min.css';

let SDK;
let isAppendedPlayer = false;

function Player() {
  const myInterval = setInterval(async () => {
    if (
      !isAppendedPlayer &&
      typeof window !== 'undefined' &&
      document.getElementById('player-root') &&
      !document.getElementById('stream-video-container')
    ) {
      isAppendedPlayer = true;
      const OfflinePlayer = (await import('pod-comm-offline-sdk')).default;
      SDK = new OfflinePlayer({
        containerId: 'player-root',
        env: 'main',
        logging: {
          info: true,
          debug: true,
          error: true,
        },
        showForwardBackwardButtons: true,
        fullScreenPlayer: false,
        loadAssetsFromCDN: false,
      });
      try {
        SDK.playMedia({
          hash: 'QS6TQ7A1FV3YOK22', // '8FEBGXQM25Q3GRHZ',//"DBPPGRD3PUPV4MNL",
          quality: 240,
          token: 'ed24e37c7ee84313acf2805a80122f94',
        });
      } catch (error) {
        console.error({ error });
      }

      clearInterval(myInterval);
    }
  }, 2000);
  return (
    <div id="player-root">
      <button
        onClick={async (e) => {
          // Dynamically load fuse.js

          SDK.playMedia({
            hash: 'QS6TQ7A1FV3YOK22', // '8FEBGXQM25Q3GRHZ',//"DBPPGRD3PUPV4MNL",
            quality: 240,
            token: 'ed24e37c7ee84313acf2805a80122f94',
          });
        }}
      >
        Start Playing
      </button>
    </div>
  );
}

export default Player;
