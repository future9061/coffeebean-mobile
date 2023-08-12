let docElemt = document.documentElement,
  docHEight = docElemt.offsetHeight,
  userBtn = document.querySelector(".top-button"),
  offset,
  scrollPos;

if (docHEight !== 0) {
  offset = docHEight / 4;
}

window.addEventListener("scroll", function () {
  scrollPos = docElemt.scrollTop;

  if (offset < scrollPos) {
    userBtn.classList.remove("hide-button");
  } else {
    userBtn.classList.add("hide-button");
  }
});

userBtn.addEventListener("click", function () {
  scrollToTop();
});

function scrollToTop() {
  let scrollInterval = setInterval(function () {
    if (scrollPos !== 0) {
      window.scrollBy(0, -55);
    } else {
      clearInterval(scrollInterval);
    }
  }, 15);
}

let progressBar = document.querySelector(".progress-bar");

window.addEventListener("scroll", function () {
  let height =
    this.document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollPos = Math.round(this.document.documentElement.scrollTop);

  let widthValue = (scrollPos / height) * 100;

  progressBar.style.width = widthValue + "%";
});

//커피콩 누르면
// close-icon에 ,hide-button 클라스명 빼고
// black-bg에 ,hide-bg 빼주기
//login에 hide bg
//hideElement
let count = 0;
document.querySelector(".icon1").addEventListener("click", function () {
  count++;
  if (count % 2 !== 0) {
    document.querySelector(".close-icon").classList.remove("hide-button");
    document.querySelector(".black-bg").classList.remove("hide-bg");
  } else {
    document.querySelector(".close-icon").classList.add("hide-button");
    document.querySelector(".black-bg").classList.add("hide-bg");
  }
});

let burgerBtn = document.querySelector(".burger"),
  asideMenu;
burgerBtn.addEventListener("click", function () {
  asideMenu = document.querySelector(".side_menu");
  asideMenu.style.left = 0;
});

document.querySelector(".fa-xmark").addEventListener("click", function () {
  asideMenu.style.left = "-300px";
});

let dottBtn1 = document.querySelector(".dott1");
let dottBtn2 = document.querySelector(".dott2");
let dottBtn3 = document.querySelector(".dott3");

let sliderFirst = document.querySelector(".firstSlider");

dottBtn1.addEventListener("click", function () {
  sliderFirst.style.marginLeft = "0";
});

dottBtn2.addEventListener("click", function () {
  sliderFirst.style.marginLeft = "-640px";
});

dottBtn3.addEventListener("click", function () {
  sliderFirst.style.marginLeft = "-1280px";
});

let sliderBtn1 = document.querySelector(".dotted1"),
  sliderBtn2 = document.querySelector(".dotted2"),
  sliderBtn3 = document.querySelector(".dotted3"),
  sliderBtn4 = document.querySelector(".dotted4"),
  sliderBtn5 = document.querySelector(".dotted5"),
  sliderBtn6 = document.querySelector(".dotted6"),
  secondSlider = document.querySelector(".secondSlider");
sliderBtn1.addEventListener("click", function () {
  secondSlider.style.marginLeft = "0";
});
sliderBtn2.addEventListener("click", function () {
  secondSlider.style.marginLeft = "-640px";
});

sliderBtn3.addEventListener("click", function () {
  secondSlider.style.marginLeft = "-1280px";
});

sliderBtn4.addEventListener("click", function () {
  secondSlider.style.marginLeft = "-1920px";
});

sliderBtn5.addEventListener("click", function () {
  secondSlider.style.marginLeft = "-2560px";
});

sliderBtn6.addEventListener("click", function () {
  secondSlider.style.marginLeft = "-3200px";
});


//pwa 설치 버튼
var deferredPrompt;

window.addEventListener('beforeinstallprompt', function (e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});


/*서비스워커 등록 */
if ('serviceWorker' in navigator) {
  try {
    navigator.serviceWorker.register('serviceWorker.js');
    console.log("Service Worker Registered");
  } catch (error) {
    console.log("Service Worker Registration Failed");
  }
}
