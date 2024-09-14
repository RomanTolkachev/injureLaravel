import { FunctionComponent } from "react";
import { Logo } from "./Header/Logo";

export const Footer: FunctionComponent = () => {
  return (
    <div className="my-footer-gradient w-full py-10">
      <div className="container grid grid-cols-1 justify-center gap-10 text-white md:grid-cols-2 md:grid-rows-[auto_auto] lg:grid-cols-3 [&>*]:px-5">
        <div className="text-header-nav max-md:text-center md:col-start-1">
          <div className="mb-3 w-28 max-md:mx-auto">
            <Logo />
          </div>
          <h4 className="text-nowrap text-2xl">Нам доверяют по праву!</h4>
        </div>
        <div className="max-md:-mb-8 max-md:text-center md:col-start-1 lg:col-start-2">
          <ul className="[&_li:not(:last-of-type)]:mb-2">
            <li>Банкротство</li>
            <li>Госзакупки и тендеры</li>
            <li>Арбитражные споры</li>
          </ul>
        </div>
        <div className="max-md:text-center lg:col-start-3">
          <ul className="[&_li:not(:last-of-type)]:mb-2">
            <li>Антимонопольные споры</li>
            <li>Защита по уголовным делам</li>
            <li>Земля, строительство, недвижимость</li>
            <li>Частным лицам</li>
          </ul>
        </div>
        <div className="font-bold max-md:text-center md:col-start-1">
          injure@yahoo.com
        </div>
        <div className="text-lg font-normal max-md:text-center md:col-start-2">
          Московская область, город Мытищи, улица Юбилейная, дом 24, квартира
          181
        </div>
        <div className="flex flex-col text-nowrap text-footer-phone font-bold max-md:text-center md:col-start-2 lg:col-start-3">
          <span>8-915-452-90-61</span>
          <span>8-985-557-27-08</span>
          <span className="text-header-nav">иконки соцсетей</span>
        </div>
      </div>
    </div>
  );
};
