import "./index.css";

const stopVideo = (videoEL) => {
  videoEL.pause();
};

const videosEL = document.querySelectorAll(".video-thumb");

videosEL.forEach((item) => {
  item.addEventListener("click", (event) => {
    const videoEL = event.target;
    if (videoEL.paused) {
      videosEL.forEach(stopVideo);
      videoEL.play();
    } else {
      videoEL.pause();
    }
  });
});

