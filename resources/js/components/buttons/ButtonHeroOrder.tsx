import React, { FunctionComponent, ReactNode } from "react";

interface IButtonHeroOrderProps {
    children: ReactNode;
    telephone: string;
    clackHandler?: () => any;
}
export const ButtonHeroOrder: FunctionComponent<IButtonHeroOrderProps> = ({
    telephone,
    children,
    clackHandler,
}) => {
    return (
        <div
            onClick={clackHandler}
            className="hidden h-full items-center gap-3 rounded-full bg-my-white py-1 pl-5 pr-1 text-xl text-my-main-blue lg:flex"
        >
            <a
                href="tel:123-456-7890"
                className="text-header-nav font-semibold"
            >
                {telephone}
            </a>
            <button className="h-full text-nowrap rounded-full bg-white px-6 text-header-order font-bold">
                {children}
            </button>
        </div>
    );
};
