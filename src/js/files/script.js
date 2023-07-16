// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const map = document.getElementById("map");
if (map) {
  let center =  [55.79956456550331,37.767582319465596];
  function init() {
    let map = new ymaps.Map("map", {
      center: [55.79835594059611,37.76396046599078],
      zoom: 16
    });
    let placemark = new ymaps.Placemark(center, {}, {
      // iconLayout: "default#image",
      // iconImageHref: "img/location.png",
      iconImageSize: [80,80],
      iconImageOffset: [-40,-70]
  
    });
  
    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.geoObjects.add(placemark);
  }
  
  ymaps.ready(init);
}


// window.onload = function () {

//   const menuList = document.querySelector(".menu__list");
//   const widthMenuList = menuList.offsetWidth;
//   console.log('container', widthMenuList);
//   if (menuList) {
//     // console.dir(menuList);
//   }

//   const arrayItem = menuList.querySelectorAll(".menu__item");
//   console.log(arrayItem[0].offsetWidth);

//   let allWidth = 0;

//   for (let i = 0; i < arrayItem.length; i++) {
//     const element = arrayItem[i];
//     let width = element.clientWidth;
//     allWidth += width;
//     console.log('вся длина',allWidth);
//     if (allWidth > widthMenuList) {
//       break;
//     }
//   }

//   menuList.insertAdjacentHTML("beforeend",'<div class="menu__more"><div class="menu__more-btn _icon-ellipsis-vertical"></div><ul class="menu__list"></ul></div>');

// }