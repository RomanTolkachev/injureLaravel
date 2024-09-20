import {FunctionComponent} from "react";
import {motion} from "framer-motion";

export const Questions: FunctionComponent<{className: string}> = ({className}) => {
    return (
        <div className={`${className} p-3 bg-[#0884FF] h-full shadow-md rounded-2xl`}>
            <div className={"p-6 h-full bg-white rounded-xl flex flex-col"}>
                <h4 className={
                    "mb-3 pt-5 text-center text-xl font-bold first-letter:capitalize " +
                    "sm:mb-3 sm:text-start sm:text-xl md:mb-6 md:text-3xl lg:mb-10 lg:text-4xl"
                }>есть вопросы или хотите получить консультацию?</h4>
                <p className={"max-sm:text-center text-sm sm:text-xs md:text-base lg:text-lg shrink grow"}>
                    заполните форму и мы свяжемся с Вами в течение часа
                </p>
                <motion.button
                    whileTap={{scale: 0.98}}
                    className={" shadow-lg bg-[#0884FF] md:mt-8 lg:mt-0 text-white max-sm:mt-8 -mx-2 -mb-2 py-2 rounded-lg"}>хочу проконсультироваться</motion.button>
            </div>
        </div>
    )
}
