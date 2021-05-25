var myMap;
ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса

function init() {
    myMap = new ymaps.Map("yandex-map", {
        center: [
          59.937468, 30.322623
        ], // Координаты центра карты
        zoom: 15 // Zoom
    }),

    myPlacemark = new ymaps.Placemark([59.938635, 30.323118], {
        hintContent: "Собственный значок метки"
    }, {
        // Опции. Необходимо указать данный тип макета.
        iconLayout: "default#image",
        // Своё изображение иконки метки.
        iconImageHref: "img/index/icon-map.svg",
        // Размеры метки.
        iconImageSize: [
            41, 41
        ]
    });

    myMap.geoObjects.add(myPlacemark)
};
