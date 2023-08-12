# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [✍ 주요 기능 소개](#-주요-기능-소개)
   - [sub menu event](#✔-sub-menu-event)
   - [무한 루프 인기 순위](#✔-무한-루프-인기-순위)
   - [무한 루프 이미지 슬라이드](#✔-무한-루프-이미지-슬라이드)
   - [상품 선택 기능](#✔-상품-선택-기능)
   - [Json data 가져와서 정렬](#✔-json-data-가져와서-정렬)
   - [scroll Top btn](#✔-scroll-top-btn)
3. [🧾 code review](#-code-review)

   <br />

## 💻 프로젝트 소개

<div align="center">
  
   <img src="https://github.com/future9061/ohou_future/assets/132829711/763b526a-74b1-40a1-9740-72d196808230" width="50%">
   
   https://future9061.github.io/ohou_future

   <p align="start">
     오늘의 집을 클론 코딩한 프로젝트 입니다. vanilla javascript로 슬라이드 및 인기순위 애니메이션, json 데이터를 가져와 필터, 정렬 등을 해보았습니다.<br />
      breakepoint는 1024px 480px 입니다.
      
   </p>
</div>

<br />

## ✍ 주요 기능 소개

### ✔ sub menu event

#### [코드 보기](#sub-menu)

메인 메뉴에 마우스를 올리면 하단의 sub menu가 바뀌는 이벤트입니다.  
 전에는 메인메뉴와 서브 메뉴의 id를 비교하는 방식을 주로 썼었으나, <br />
이번에는 id 없이 forEach에서 this와 submenu를 비교해 클라스를 추가했습니다. <br />

   <img src="https://github.com/future9061/ohou_future/assets/132829711/69b4842f-26cd-4929-9744-e3d012ffdc0a" width="50%">

<br />

<br />
<br />
<br />
<br />

### ✔ 무한 루프 인기 순위

#### [코드 보기](#인기-순위)

setInterval이 아닌 setTimeout로 만든 인기순위입니다.
인기 순위 함수 내에서 재귀호출로 무한이 인기순위가 돌아갑니다.

<img src="https://github.com/future9061/ohou_future/assets/132829711/541b7a41-fec4-497d-9ea4-58f0b7b6747f" width="50%">

<br />
<br />
<br />
<br />

### ✔ 무한 루프 이미지 슬라이드

#### [코드 보기](#img-slide)

dom load가 끝나면 무한으로 돌아가는 이미지 슬라이드입니다.
btn 클릭 시에도 이동하도록 만들었습니다.

<br />
<br />
<br />
<br />

### ✔ 상품 선택 기능

#### [코드 보기](#상품-선택)

상품에 있는 하트를 클릭하면 상품명이 LocalStolage에 저장되는 기능입니다.
toggle 형식으로 두번 클릭하면 localSrolage에서 상품명이 사라집니다.

<br />
  <img src="https://github.com/future9061/ohou_future/assets/132829711/188bd7a9-2860-4760-bca5-aacb94fddff5" width="40%">

<br />
<br />
<br />
<br />

### ✔ Json data 가져와서 정렬

#### [코드 보기](#json-data)

fetch로 data를 가져와서 string으로 만든 html에 적용해 상품 박스를 만들었습니다.
sort로 가격순정렬, 글자순정렬도 가능하고 글자 정렬은 brand명 기준입니다.

<br />
  <img src="https://github.com/future9061/ohou_future/assets/132829711/86766a7d-a2f9-439b-ba62-6ab76dfd02a8" width="30%" height="100px">

<br />
<br />
<br />
<br />

### ✔ scroll top btn

#### [코드 보기](#top-btn)

사용자의 vh보다 scrollY의 값이 커지면 top 버튼이 나타납니다.<br />
버튼 클릭 시에는 interval로 scrollY가 -55px씩 올라가며 scrollY가 0이 되면 clear 됩니다.

<br />
<br />
<br />

## 🧾 code review

<br />

#### sub menu

```javascript
const mainNav = document.querySelectorAll(".main-menu li");
const subNav = document.querySelectorAll(".sub-menu li");

mainNav.forEach((elem, index) => {
  elem.addEventListener("mouseover", function () {
    if (this === mainNav[index]) {
      subNav.forEach((a) => {
        a.classList.remove("z-index");
      });
      subNav[index].classList.add("z-index");
    }
  });
});


//css
.z-index{
  z-index : 3
}
```
