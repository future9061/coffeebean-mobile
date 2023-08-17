# 🎇목차

1. [💻프로젝트 소개](#-프로젝트-소개)
2. [🚫 pwa 변환 과정에서 겪었던 에러](#-pwa-변환-과정에서-겪었던-에러)

   <br />

## 💻 프로젝트 소개

<div align="center">

  <img src="https://github.com/future9061/coffeebean-mobile/assets/132829711/41f37a3a-b2f8-4f2b-820a-2ab956492054" width="50%">

![image](https://github.com/future9061/coffeebean-mobile/assets/132829711/ed3b9c00-bbcf-4b03-95ca-e2198a05d721)

https://musical-daifuku-70205f.netlify.app/

   <p align="start">
    코딩을 처음 배울 때쯤에 만든 coffeebean 모바일 버전입니다.<br>
    만드는 당시에는 모바일 처럼 보이게만 ui를 구성해놓았는데 이번에 pwa로 변환을 해봤습니다. <br>
    pwa를 선택한 이유는 별도로 앱 스토어 이용 없이 설치할 수 있다는 점. <br> 오프라인 상태에서도 사용 가능하다는 점이 장점으로 다가와서 pwa를 이용하게 되었습니다.
      
   </p>
</div>
<br>

## 📦 개발 환경

- **editor** : <img src="https://img.shields.io/badge/VisualStudioCode-007ACC?style=flat-square&logo=visualstudiocode&logoColor=white"/>
- **language** : <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
- **skill** : <img src="https://img.shields.io/badge/pwa-5A0FC8?style=flat-square&logo=pwa&logoColor=white"/>

<br />


## 🚫 pwa 변환 과정에서 겪었던 에러

✔ **manifest 옵션 설정 에러**

<img src="https://github.com/future9061/coffeebean-mobile/assets/132829711/daced97e-168c-4ba9-9737-dad05b601db7" > <br />
manifest 옵션을 저장하고 application에서 확인했을 때 발견한 에러이다. pwa 처음이여서 필수적으로 192px, 512px의 아이콘이 필요한 걸 몰랐다. <br /> 때문에 이미지 수정 후 icons 배열에 옵션을 추가하고 해결했다.

<br />

✔ **assets 경로 오타**

<img src="https://github.com/future9061/coffeebean-mobile/assets/132829711/4a9c7f62-4998-4e80-a8b1-f69990ff746f" > <br />

pwa는오프라인에서 사용하기 위해 workspace 파일에서 모든 assets의 경로를 담은 배열을 cache에게 전달해주는데 그 과정에서 생긴 오류이다. <br />
모든 이미지 파일 경로를 적어놨는데 오타가 있기 때문이였다.

<br />

✔ **pwa 설치 팝업이 안뜸!**  

<img src="https://github.com/future9061/coffeebean-mobile/assets/132829711/bb77a0e6-def8-4430-9cb6-5c1b8af01cf9" > <br />
pc에서는 멀쩡히 뜨는 설치 팝업이 모바일에서는 나오지 않았다. <br />
당연히 모바일에 앱이 저장되지도 않았다. <br /> 설치 팝업이 뜨는 조건이 여러가지가 있고 브라우저 마다 차이도 있기 때문에 beforeinstallprompt 이벤트로 설치 버튼을 만들어 설치를 유도했다. <br />
<u>ios에서는 beforeinstallpromt가 안된다</u>

<br />

<br />
