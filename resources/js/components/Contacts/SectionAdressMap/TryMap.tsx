import { FunctionComponent, useEffect } from "react";
import customizationData from "../../../services/utils/customization.json";
import {
  useDispatchTyped as useDispatch,
  useSelectorTyped as useSelector,
} from "../../../services/hooks/typedUseSelector";
import { handleMapLoaded } from "../../../services/actions/mapActions";
import { YMapLocationRequest } from "ymaps3";

const key: string = "fee7c7a6-093c-41b9-83e6-9ab1f4d6b6f8";

export const TryMap: FunctionComponent = () => {
  console.log(customizationData);
  const dispatch = useDispatch();
  const { isMapLoaded } = useSelector((state) => state.mapState);
  console.log(isMapLoaded);
  useEffect(() => {
    // @ts-ignore
    document.getElementById("map").appendChild("");
  }, []);
  // useEffect(() => {
  //   dispatch(handleMapLoaded());
  //   if (!isMapLoaded) {
  //     const script: HTMLScriptElement = document.createElement("script");
  //     document.body.appendChild(script);
  //     script.type = "text/javascript";
  //     script.src = `https://api-maps.yandex.ru/v3/?apikey=${key}&lang=ru_RU`;
  //     script.onload = () => {
  //       async function initMap(): Promise<void> {
  //         await ymaps3.ready;
  //         const LOCATION: YMapLocationRequest = {
  //           center: [37.623082, 55.75254],
  //           zoom: 9,
  //         };
  //         const { YMap, YMapDefaultSchemeLayer } = ymaps3;
  //         const mapElement = document.getElementById("map") as HTMLElement;
  //         const layer = new YMapDefaultSchemeLayer({
  //           // @ts-ignore
  //           customization: customizationData,
  //         });
  //         const map = new YMap(mapElement, {
  //           location: LOCATION,
  //         });
  //
  //         map.addChild(
  //           // @ts-ignore
  //           layer,
  //         );
  //       }
  //       initMap();
  //     };
  //   }
  // }, []);

  return <div id="map" className={"h-[500px] w-[500px] bg-blue-100"}></div>;
};
