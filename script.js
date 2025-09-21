let hls;

function openPlayer(encodedUrl, channelName) {
  const url = atob(encodedUrl); // Base64 decode
  document.getElementById('channelTitle').innerText = channelName;

  // Modal open
  var myModal = new bootstrap.Modal(document.getElementById('playerModal'));
  myModal.show();

  // Video element
  const video = document.getElementById('player');
  video.pause();
  video.src = '';

  if (hls) {
    hls.destroy();
  }

  if (Hls.isSupported()) {
    hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url; // Safari direct play
  } else {
    alert('Your browser cannot play this stream.');
  }
}
