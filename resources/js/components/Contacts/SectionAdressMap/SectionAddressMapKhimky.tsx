import React, { FunctionComponent, ReactNode } from "react";
import { Address } from "./Address";
import { YandexMap } from "./YandexMap";
import { OpeningHours } from "./OpeningHours";
import { Legal } from "./Legal";
import { SmallHeaderAndInfoBrick } from "./SmallHeaderAndInfoBrick";

const markText =
  "Российская Федерация,\n" +
  "Московская область,\n" +
  "г. Мытищи, ул. Летняя\n" +
  "строение 19, офис 9-18";

const khimkyAddress: ReactNode = (
  <div className="flex flex-col justify-center border-b-[1.5px] border-b-my-main-blue pb-3 text-news-preview tracking-tight text-my-gray sm:pb-5 sm:text-xl lg:pb-12 lg:text-4xl">
    <span className="">Российская Федерация,</span>
    <span className="">Московская область,</span>
    <span className="">г. Химки, ул. "добавить"</span>
    <span className="">строение "добавить", офис "добавить"</span>
  </div>
);

export const SectionAddressMapKhimky: FunctionComponent = () => {
  return (
    <section className="container mx-auto my-6 grid w-full grid-cols-1 grid-rows-[auto_auto] gap-3 gap-x-24 px-8 tracking-tighter sm:my-10 sm:gap-y-6 lg:my-20 lg:max-w-[1024px] lg:grid-cols-2 lg:gap-y-10">
      <Address
        address={khimkyAddress}
        city={"Химки"}
        firstContact={
          <SmallHeaderAndInfoBrick
            email={"заполнить имейл для Химок"}
            telephone={"8-123-456-78-90"}
          />
        }
      />
      <div className="aspect-square w-full">
        <YandexMap
          coordinates={"55.832096, 37.629453"}
          whereWeAre={"55.909968, 37.736743"}
          zoom={10}
          clickOnMarkText={markText}
        />
      </div>
      <OpeningHours className={""} />
      <Legal
        className={"h-auto"}
        legalForm={"адвокат"}
        legalBody={"Фомин Александр Иванович"}
        registerNumberType={"тут адвокатский номер"}
        registerNumber={"заполнить номер"}
        TIN={"заполнить ИНН"}
      />
    </section>
  );
};
