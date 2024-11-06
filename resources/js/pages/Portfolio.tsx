import { motion } from "framer-motion";
import { FunctionComponent } from "react";
import { SectionDescription } from "../components/Header/SectionDescription";
import { Sprite } from "../components/Sprite";

export const Portfolio: FunctionComponent = () => {
    return (
        <>
            <SectionDescription
                header="портфолио"
                BGImage="/webp/sectionHeader/handShake.webp"
                className={"mb-10 2xl:mb-14"}
            />
            {/*<div className="container justify-center items-center mb-10 flex flex-col">*/}
            {/*    <h3 className={"p-10 text-2xl text-center first-letter:capitalize font-bold max-w-screen-md"}>*/}
            {/*        у нас так много завершенных дел, что нашим программистам нужно еще немного времени, чтобы закончить эту страницу*/}
            {/*    </h3>*/}
            {/*    <motion.div*/}
            {/*        className={"h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] rounded-[50%] overflow-hidden"}*/}
            {/*        animate={{*/}
            {/*          rotate: [0, 360],*/}
            {/*          transition: {*/}
            {/*              duration: 12,*/}
            {/*              repeat: Infinity,*/}
            {/*              repeatType: "loop",*/}
            {/*              ease: "linear"*/}
            {/*          }*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        <Sprite gear={true} />*/}
            {/*    </motion.div>*/}
            {/*</div>*/}
            <section className={"py-6"}>
                <div
                    className={
                        "grid-container mx-auto grid auto-rows-[minmax(auto,500px)] grid-cols-1 gap-x-3 gap-y-3 p-3 sm:container first:before:pb-[120%] max-sm:w-[320px] sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-3"
                    }
                >
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div
                            className={
                                "flex flex-col overflow-hidden rounded-md bg-white p-2 shadow-lg"
                            }
                        >
                            <h5 className={"mb-4 shrink-0 grow-0 font-bold"}>
                                <span className={"block text-base sm:text-lg"}>
                                    УИД:
                                </span>
                                <span
                                    className={
                                        "mb-2 block text-sm sm:text-base"
                                    }
                                >
                                    29RS0025-01-2023-000075-70
                                </span>
                                <span className={"text-base sm:text-lg"}>
                                    Дело:
                                </span>
                                <span className={"block text-sm sm:text-base"}>
                                    {"№2-113/2023"}
                                </span>
                            </h5>
                            <p
                                className={
                                    "line-clamp-[20] shrink grow overflow-hidden text-clip text-xs text-my-deep-gray sm:mb-5 sm:line-clamp-[17] sm:text-base"
                                }
                            >
                                Рассмотрев в открытом судебном заседании
                                гражданское дело по исковому
                                заявлению Старостина А.Л. к администрации
                                Устьянского муниципального округа Архангельской
                                области о признании права собственности на
                                здание в силу приобретательной давности.
                                Рассмотрев в открытом судебном заседании
                                гражданское дело по исковому
                                заявлению Старостина А.Л. к администрации
                                Устьянского муниципального округа Архангельской
                                области о признании права собственности на
                                здание в силу приобретательной давности
                                заявлению Старостина А.Л. к администрации
                                Устьянского муниципального округа Архангельской
                                области о признании права собственности на
                                здание в силу приобретательной давности
                                заявлению Старостина А.Л. к администрации
                                Устьянского муниципального округа Архангельской
                                области о признании права собственности на
                                здание в силу приобретательной давности
                            </p>
                            <button
                                className={
                                    "sm:nav shrink-0 grow-0 text-[#0067F2] first-letter:capitalize max-sm:p-4 sm:text-start sm:before:bottom-0 sm:before:bg-[#0067F2]"
                                }
                            >
                                скачать решение
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
