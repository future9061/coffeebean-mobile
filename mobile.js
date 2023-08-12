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


const slide1Btn = document.querySelectorAll(".play-icon1 > li");
const slider1 = document.querySelector(".slider1");
const sliderItem1 = document.querySelector('.slider1 > div');
let moveValue = (sliderItem1.offsetWidth * 4) + 30;


slide1Btn.forEach((elem, idx) => {
  elem.addEventListener('click', function (e) {
    if (e.target === elem) {
      slider1.style.transform = `translateX(-${moveValue * idx}px)`
    }
  })
})

const slide2Btn = document.querySelectorAll('.play-icon2 > li');
const slider2 = document.querySelector(".image_slider2 > ul");
const sliderItem2 = document.querySelector(".image_slider2 > ul > div");
let moveValue2 = (sliderItem2.offsetWidth * 2) + 20;

slide2Btn.forEach((elem, idx) => {
  elem.addEventListener('click', function (e) {
    if (e.target === elem) {
      slider2.style.transform = `translateX(-${moveValue2 * idx}px)`
    }
  })
})



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
