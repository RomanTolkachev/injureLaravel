import React, { FunctionComponent } from "react";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

// api-maps.yandex.ru/2.1?fee7c7a6-093c-41b9-83e6-9ab1f4d6b6f8&lang=ru_RU // этот работает
interface IYandexMap {
  coordinates: string;
  whereWeAre: string;
  zoom?: number;
  clickOnMarkText?: string;
}
const stringToArrayNumbers = (coordinates: string): number[] => {
  let coordinatesToArray = coordinates.split(",");
  return coordinatesToArray.map((item) => Number(item));
};

export const YandexMap: FunctionComponent<IYandexMap> = ({
  coordinates,
  whereWeAre,
  zoom = 10,
  clickOnMarkText,
}) => {
  const defaultState = {
    center: stringToArrayNumbers(coordinates),
    zoom: zoom,
    controls: ["zoomControl", "fullscreenControl"],
  };

  return (
    <div className="h-full w-full">
      <YMaps
        query={{
          lang: "en_RU",
          apikey: "fee7c7a6-093c-41b9-83e6-9ab1f4d6b6f8",
          load: "control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon", // сюда импортируем кнопки, пробки, слои, и т.д.
        }}
      >
        <Map defaultState={defaultState} className="h-full w-full">
          <Placemark
            geometry={stringToArrayNumbers(whereWeAre)}
            properties={{
              iconCaption: "InJure", // тут справа от точки добавится описание
              balloonContent: clickOnMarkText, // эта штука показывает окошко с информацией при нажатии на балон
            }}
            options={{
              iconLayout: "default#image", // это тип, если хотим картинку
              iconImageHref: "/images/INJURE.png", // ссылка на картинку
              iconImageSize: [70, 50],
              iconImageOffset: [-40, -25],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
};
