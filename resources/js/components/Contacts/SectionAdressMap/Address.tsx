import React, { FunctionComponent, ReactNode } from "react";
import { SocialMedia } from "./SocialMedia";
import { OpeningHours } from "./OpeningHours";
import { Legal } from "./Legal";

interface IAddress {
    className?: string;
    city?: string;
    address?: string | ReactNode;
    firstContact?: ReactNode;
    secondContact?: ReactNode;
    socialMediaComponent?: ReactNode;
}

export const Address: FunctionComponent<IAddress> = ({
    className,
    city = "город",
    address,
    firstContact,
    secondContact,
    socialMediaComponent = (
        <SocialMedia
            className={
                "!max-sm:gap-5 items-center justify-start max-sm:h-[50px]"
            }
        />
    ),
}) => {
    return (
        <div className={`${className} flex flex-col first-letter:capitalize`}>
            <h4 className="pb-3 text-2xl font-semibold tracking-tight text-my-blue-dark first-letter:capitalize md:text-4xl lg:text-6xl">
                {city}
            </h4>
            <div className={"flex flex-col gap-y-3"}>
                <div
                    className={
                        "text-news-preview font-semibold tracking-tight text-my-gray"
                    }
                >
                    {address}
                </div>
                <OpeningHours className={""} />
                <div className="emails flex w-full gap-6">
                    {firstContact}
                    {secondContact}
                </div>
                <div className="">{socialMediaComponent}</div>
                <Legal
                    className={""}
                    legalForm={"ИП"}
                    legalBody={"Фомин Артем Александрович"}
                    registerNumberType={"ОГРНИП"}
                    registerNumber={"320290100020510"}
                    TIN={"292203988833"}
                />
            </div>
        </div>
    );
};
