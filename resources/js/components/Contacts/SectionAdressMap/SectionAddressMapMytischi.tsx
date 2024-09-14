import React, { FunctionComponent } from "react";
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

const mytischiAddress = (
  <div className="flex flex-col justify-center border-b-[1.5px] border-b-my-main-blue pb-3 text-news-preview tracking-tight text-my-gray sm:pb-5 sm:text-2xl lg:pb-12 lg:text-xl">
    <span className="">Российская Федерация,</span>
    <span className="">Московская область,</span>
    <span className="">г. Мытищи, ул. Летняя</span>
    <span className="">строение 19, офис 9-18</span>
  </div>
);

interface Iprops {
  className?: string;
}

export const SectionAddressMapMytischi: FunctionComponent<Iprops> = ({
  className,
}) => {
  return (
    <div className={"my-6 sm:my-10 lg:my-20"}>
      <section
        className={`${className} container mx-auto mb-10 grid w-full grid-cols-1 gap-3 gap-x-12 px-8 pb-12 tracking-tighter sm:gap-y-6 md:grid-cols-2 lg:max-w-[1024px] lg:gap-y-10`}
      >
        <Address
          address={mytischiAddress}
          city={"мытищи"}
          firstContact={
            <SmallHeaderAndInfoBrick
              email={"fomartemy@gmail.com"}
              telephone={"8-985-557-27-08"}
            />
          }
          secondContact={
            <SmallHeaderAndInfoBrick
              email={"amarkelova_arina@inbox.ru"}
              telephone={"8-915-452-90-61"}
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
      </section>
    </div>
  );
};
