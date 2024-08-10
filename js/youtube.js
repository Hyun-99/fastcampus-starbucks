var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    videoId: "MwBeUwqU5H0",
    playerVars: {
      autoplay: true, // 자동재생
      loop: true, // 루프 설정
      playlist: "MwBeUwqU5H0", // 루프 설정시 다음 영상이 뭔지 설정
    },
    events: {
      onReady: function (event) {
        event.target.mute(); // 음소거
      },
    },
  });
}
