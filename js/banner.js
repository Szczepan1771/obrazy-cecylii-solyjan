let activeElement = 1;
const slogans = ["pejzaże", "martwa natura", "obrazy cecylii sołyjan"];

const bannerBg = document.querySelector("header img");
const bannerSlogan = document.querySelector("header h1");

const changeBanner = () => {
  activeElement++;
  if (activeElement == 4) activeElement = 1;
  bannerBg.src = `img/banner${activeElement}.jpg`;
  bannerSlogan.textContent = slogans[activeElement - 1];
};

setInterval(changeBanner, 6000);
