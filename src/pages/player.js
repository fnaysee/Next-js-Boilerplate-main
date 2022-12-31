import 'pod-comm-offline-sdk/dist/node/css/style.css';
import 'pod-comm-offline-sdk/dist/node/css/material-icons.min.css';

let SDK;

function Player() {
  return (
    <div id="playerroot">
      <button
        onClick={async (e) => {
          // Dynamically load fuse.js
          const OfflinePlayer = (await import('pod-comm-offline-sdk')).default;

          SDK = new OfflinePlayer({
            containerId: 'playerroot',
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
