import "./index.css";

// const setCurrentElement = (state, step) => {
//   let { currentIndex, items } = state;
//   // use modulo to set new index in looped array
//   const newIndex = (currentIndex + step + items.length) % items.length;
//   // handle DOM
//   items[currentIndex].classList.remove("active");
//   items[newIndex].classList.add("active");
//   // set global Index out of the setSlide function
//   state.currentIndex = newIndex;
// };

// const initSlider = (sliderEl) => {
//   // Set state
//   let currentIndex = 0;
//   const items = sliderEl.querySelectorAll(".slide");
//   const state = { currentIndex, items };

//   // starter
//   setCurrentElement(state, 0);

//   // ADD NAVIGATION
//   const nextBtn = sliderEl.querySelector("#next");
//   const prevBtn = sliderEl.querySelector("#prev");

//   // Set click event to NEXT button
//   nextBtn.addEventListener("click", () => setCurrentElement(state, +1));

//   // Set click event to PREV button
//   prevBtn.addEventListener("click", () => setCurrentElement(state, -1));
// };

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
