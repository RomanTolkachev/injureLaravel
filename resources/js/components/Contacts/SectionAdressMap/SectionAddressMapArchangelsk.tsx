import React, { FunctionComponent, ReactNode } from "react";
import { Address } from "./Address";
import { YandexMap } from "./YandexMap";
import { SmallHeaderAndInfoBrick } from "./SmallHeaderAndInfoBrick";

const markText =
    "163069, Российская Федерация,\n" +
    "г. Архангельск,\n" +
    "наб. Северной Двины,\n" +
    "д. 112, корп. 1";

const archangelskAddress: ReactNode = (
    <div className="flex flex-col justify-center border-b-[1.5px] border-b-my-main-blue pb-3 text-news-preview tracking-tight text-my-gray sm:pb-5 sm:text-2xl lg:pb-12 lg:text-xl">
        <span className="">Российская Федерация,</span>
        <span className="">г. Архангельск,</span>
        <span className="">г. наб. Северной Двины,</span>
        <span className="">д. 112, корп. 1</span>
    </div>
);

interface Iprops {
    className?: string;
}

export const SectionAddressMapArchangelsk: FunctionComponent<Iprops> = ({
    className,
}) => {
    return (
        <div className={"my-6 sm:my-10 lg:my-20"}>
            <section
                className={`${className} container mx-auto mb-10 grid w-full grid-cols-1 gap-3 gap-x-12 px-8 pb-12 tracking-tighter sm:gap-y-6 md:grid-cols-2 lg:max-w-[1024px] lg:gap-y-10`}
            >
                <Address
                    address={archangelskAddress}
                    city={"Архангельск"}
                    firstContact={
                        <SmallHeaderAndInfoBrick
                            email={"заполнить имейл для Архангельска"}
                            telephone={"заполнить телефон для архангельска"}
                        />
                    }
                />
                <div className="aspect-square w-full">
                    <YandexMap
                        coordinates={"64.545651, 40.551968"}
                        whereWeAre={"64.553027, 40.516355"}
                        zoom={12}
                        clickOnMarkText={markText}
                    />
                </div>
            </section>
        </div>
    );
};
