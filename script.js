// Ye function player open karega aur nayi window ya modal me link play karega
function openPlayer(encodedUrl, channelName) {
  // Base64 se URL decode
  const url = atob(encodedUrl);
  // Nayi tab me open karo
  window.open(url, '_blank');
  // Optionally alert ya console me channel ka naam
  console.log("Playing channel:", channelName);
}
// script.js me:
function openPlayer(encodedUrl, channelName) {
  const url = atob(encodedUrl); // Base64 decode
  const video = document.getElementById('player');

  if (Hls.isSupported()) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
  } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    // Safari direct play karta hai
    video.src = url;
  } else {
    alert('Your browser cannot play this stream directly.');
  }
}
