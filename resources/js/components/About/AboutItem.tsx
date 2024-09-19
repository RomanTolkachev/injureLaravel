import {FunctionComponent, ReactNode} from "react";

interface IProps {
    header: ReactNode
    text: ReactNode
    image?: string | ""
    className?: string
    bgClassName?: string
    headerClassName?: string
}

export const AboutItem: FunctionComponent<IProps> = ({text, header, image, className, bgClassName, headerClassName}) => {
    return (
        <div className={`h-full mx-auto ${className}`}
             >
            <div className={`h-full w-full bg-no-repeat bg-center ${bgClassName}`}
                 style={{ backgroundImage: `${image}`}}>
                <div className={"h-fit p-6 sm:px-10"}>
                    <h4 className={
                        `mb-3 pt-5 text-center text-xl font-bold first-letter:capitalize ${headerClassName}` +
                        "sm:mb-3 sm:text-start sm:text-xl md:mb-6 md:text-3xl lg:mb-10 lg:text-4xl"
                    }>{header}</h4>
                    <p className={"text-sm sm:text-xs md:text-base lg:text-lg"}>
                        {text}
                    </p>
                </div>
            </div>
        </div>

    )
}
