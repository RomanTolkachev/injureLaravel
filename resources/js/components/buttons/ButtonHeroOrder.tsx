import React, {FunctionComponent, ReactNode} from "react";

interface IButtonHeroOrderProps {
    children: ReactNode
    telephone: string
}
export const ButtonHeroOrder: FunctionComponent<IButtonHeroOrderProps> = ({telephone,children}) => {
    return (
        <div
            className='bg-my-white rounded-full h-full lg:flex items-center py-1 pl-5 pr-1 gap-3 text-my-main-blue text-xl hidden '>
            <a href="tel:123-456-7890" className="font-semibold text-header-nav">{telephone}</a>
            <button className="font-bold text-header-order text-nowrap bg-white rounded-full h-full px-6">{children}
            </button>
        </div>
    )
}