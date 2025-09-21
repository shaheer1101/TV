// Ye function player open karega aur nayi window ya modal me link play karega
function openPlayer(encodedUrl, channelName) {
  // Base64 se URL decode
  const url = atob(encodedUrl);
  // Nayi tab me open karo
  window.open(url, '_blank');
  // Optionally alert ya console me channel ka naam
  console.log("Playing channel:", channelName);
}
