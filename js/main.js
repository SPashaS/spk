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
